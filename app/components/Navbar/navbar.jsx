'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import './navbar.css';

export default function Navbar() {
    const [showMenu, setShowMenu] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 500);
            if (window.innerWidth >= 500) {
                setShowMenu(true); // في الشاشات الكبيرة، القائمة تظهر دائمًا
            } else {
                setShowMenu(false); // في الشاشات الصغيرة، القائمة مخفية افتراضيًا
            }
        };

        handleResize(); // تحديث الحالة عند تحميل الصفحة
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="navbar">
            <div className='logo'>
                <h2 onClick={() => { window.location.href = "/" }}>PureFit</h2>
            </div>

            {/* زر لإظهار وإخفاء القائمة في الشاشات الصغيرة */}
            {isMobile && (
                <button className="menu-button" onClick={() => setShowMenu(!showMenu)}>
                    {showMenu ? "Close Menu" : "Open Menu"}
                </button>
            )}

            {/* قائمة التنقل */}
            {showMenu && (
                <div className='n-right'>
                    <ul>
                        <li><a href='/'>Home</a></li>
                        <li><a href='#sol'>About Us</a></li>
                        <li><a href='#footer'>Contact</a></li>
                    </ul>
                    <Link href='/UserDetails'>
                        <button>Explore Our Program</button>
                    </Link>
                </div>
            )}
        </div>
    );
}
