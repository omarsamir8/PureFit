'use client';

import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './Partner.css';
import Image from 'next/image';

export default function Partner() {
    const [slidesPerView, setSlidesPerView] = useState(5);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 500) {
                setSlidesPerView(2);
            } else if (window.innerWidth < 900) {
                setSlidesPerView(3);
            } else {
                setSlidesPerView(5);
            }
        };

        handleResize(); // تحديث عدد الشرائح عند تحميل الصفحة
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className='partner'>
            <h2>Partner</h2>
            <Swiper
                spaceBetween={50}
                slidesPerView={slidesPerView} // ✅ تحديث عدد الشرائح ديناميكيًا
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {[
                    "/Assets/healthcare.png",
                    "/Assets/gym.png",
                    "/Assets/slim.png",
                    "/Assets/222.png",
                    "/Assets/111.png",
                    "/Assets/healthcare.png",
                    "/Assets/gym.png",
                    "/Assets/slim.png",
                    "/Assets/222.png",
                    "/Assets/111.png"
                ].map((src, index) => (
                    <SwiperSlide key={index}>
                        <Image
                            style={{
                                width: "130px",
                                height: "130px",
                                borderRadius: "50%",
                                marginTop: "20px"
                            }}
                            src={src}
                            alt="Fitness Goal"
                            width={500}
                            height={300}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
