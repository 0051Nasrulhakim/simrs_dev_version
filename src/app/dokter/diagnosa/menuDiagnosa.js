"use client"
import React, { useState, useEffect } from 'react'
import Link from "next/link";
import { usePathname } from 'next/navigation';
import FontAwesomeIcon from '../../fontawesome';
import { faStethoscope, faBookMedical } from '@fortawesome/free-solid-svg-icons';

export default function menuDiagnosa() {
    const [activeMenu, setActiveMenu] = useState();

    const handleMenuClick = (menuId) => {
        console.log(menuId);
        setActiveMenu(menuId);
    };

    const pathname = usePathname()

    useEffect(() => {
        // Update activeMenu based on the current route
        switch (pathname) {
            case '/dokter/dianosa/diagnosa':
                setActiveMenu('nav-diagnosa');
                break;
            case '/dokter/diagnosa/prosedur':
                setActiveMenu('nav-prosedur');
                break;
        }
    }, [pathname]);


    return (
        <div className='flex justify-center mt-[2.5%]'>
            <Link href="/dokter/diagnosa/diagnosa"
                className={`p-2 border rounded-tl-md ${activeMenu === 'nav-diagnosa' ? 'text-white border-b-0 border-gray-700 bg-gray-700 font-bold' : ''
                    }`}
                id='nav-dok'
                onClick={() => handleMenuClick('nav-diagnosa')}
            >
                <FontAwesomeIcon icon={faStethoscope} className='mr-1' />
                DIAGNOSA
            </Link>
            <Link href="/dokter/diagnosa/prosedur"
                className={`p-2 border rounded-tr-md ${activeMenu === 'nav-prosedur' ? 'text-white border-b-0 border-gray-700 bg-gray-700 font-bold' : ''
                    }`}
                id='nav-per'
                onClick={() => handleMenuClick('nav-prosedur')}
            >
                <FontAwesomeIcon icon={faBookMedical} className='mr-1' />
                PROSEDUR
            </Link>
        </div>
    )
}
