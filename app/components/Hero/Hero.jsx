import React from 'react';
import Image from 'next/image';
import './Hero.css';
import Link from 'next/link';

export default function Hero() {
    return (
        <div className="hero">
            <div>
                <h2>Achieve Your Fitness Goals With PureFit</h2>
                <p>
                    Tailored Workout Plans, nutritional guides, and expert tips to transform your life
                </p>
                <Link href='/UserDetails'><button>Explore Our Program</button></Link>
            </div>
            <div className='heroimg'>
                <Image src="/Assets/23d82dc4c815751205145e2bb9ccd467.png" alt="Fitness Goal" width={500} height={300} />
            </div>
        </div>
    );
}
