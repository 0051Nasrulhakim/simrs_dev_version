"use client"
import React,{ useEffect, useState } from 'react'
import Link from "next/link";
import { usePathname } from 'next/navigation';
import FontAwesomeIcon from '../../fontawesome';
import { faUserNurse, faUserDoctor } from '@fortawesome/free-solid-svg-icons';

export default function MenuAsessment() {
    const [activeMenu, setActiveMenu] = useState('nav-dok');

    const handleMenuClick = (menuId) => {
        setActiveMenu(menuId);
    };

    const pathname = usePathname()

    useEffect(() => {
        // Update activeMenu based on the current route
        switch (pathname) {
            case '/dokter/assesment/dokter':
                setActiveMenu('nav-dok');
                break;
            case '/dokter/assesment/perawat':
                setActiveMenu('nav-per');
                break;
            default:
                setActiveMenu('nav-dok');
        }
    }, [pathname]);

    return (
        <div className='flex justify-center mt-[2.5%]'>
            <Link href="/dokter/assesment/dokter"
                className={`p-2 border rounded-tl-md ${activeMenu === 'nav-dok' ? 'text-white border-b-0 border-gray-700 bg-gray-700 font-bold' : ''
                    }`}
                id='nav-dok'
                onClick={() => handleMenuClick('nav-dok')}
            >
                <FontAwesomeIcon icon={faUserDoctor} className='mr-1'/>
                DOKTER
            </Link>
            <Link href="/dokter/assesment/perawat"
                className={`p-2 border rounded-tr-md ${activeMenu === 'nav-per' ? 'text-white border-b-0 border-gray-700 bg-gray-700 font-bold' : ''
                    }`}
                id='nav-per'
                onClick={() => handleMenuClick('nav-per')}
            >
                <FontAwesomeIcon icon={faUserNurse} className='mr-1'/>
                PERAWAT
            </Link>
        </div>
    )
}
