'use client';

import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './Review.css';
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';

export default function Review() {
    const [slidesPerView, setSlidesPerView] = useState(3);

    useEffect(() => {
        const handleResize = () => {
            setSlidesPerView(window.innerWidth < 500 ? 1 : 3);
        };

        handleResize(); // استدعاء التحديث عند التحميل الأول
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className='review'>
            <h2>Some of our customer's review</h2>
            <Swiper
                spaceBetween={50}
                slidesPerView={slidesPerView} // ✅ تحديث القيمة ديناميكيًا
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {[...Array(7)].map((_, index) => (
                    <SwiperSlide key={index}>
                        <div className='reviewcontent'>
                            <div className='c-info'>
                                <div className='cimg'>
                                    <Image
                                        src='/Assets/23d82dc4c815751205145e2bb9ccd467.png'
                                        alt='userimg'
                                        width={50}
                                        height={50}
                                    />
                                    <div>
                                        <h5>omar samir</h5>
                                        <p>15 March 2024</p>
                                    </div>
                                </div>
                                <div className='stars'>
                                    {[...Array(5)].map((_, i) => (
                                        <FaStar key={i} className="star-icon" />
                                    ))}
                                </div>
                            </div>
                            <p style={{ marginTop: '20px', color: 'gray' }}>
                                At PureFit, we prioritize your needs by offering customized service that enhances your journey. Our commitment to innovation ensures you receive the best solutions available.
                            </p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
