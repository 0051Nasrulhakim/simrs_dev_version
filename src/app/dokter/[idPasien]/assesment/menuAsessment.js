"use client"
import React,{ useEffect, useState } from 'react'
import Link from "next/link";
import { usePathname, useParams } from 'next/navigation';
import FontAwesomeIcon from '../../../fontawesome';
import { faUserNurse, faUserDoctor } from '@fortawesome/free-solid-svg-icons';

export default function MenuAsessment() {
    const [activeMenu, setActiveMenu] = useState('nav-dok');
    const pathname = usePathname();
    const params = useParams();
    const path1 = 'dokter'

    const handleMenuClick = (menuId) => {
        setActiveMenu(menuId);
    };

    useEffect(() => {
        
        switch (pathname) {
            case `/${path1}/${params.idPasien}/assesment/${path1}`:
                setActiveMenu('nav-dok');
                break;
            case `/${path1}}/${params.idPasien}/assesment/perawat`:
                setActiveMenu('nav-per');
                break;
            default:
                setActiveMenu('nav-dok');
        }
    }, [pathname]);

    return (
        <div className='flex justify-center mt-[2.5%]'>
            <Link 
                href="/dokter/[idPasien]/assesment/dokter" as={`/dokter/${params.idPasien}/assesment/dokter`}
                className={`p-2 border rounded-tl-md ${activeMenu === 'nav-dok' ? 'text-white border-b-0 border-gray-700 bg-gray-700 font-bold' : ''
                    }`}
                id='nav-dok'
                onClick={() => handleMenuClick('nav-dok')}
            >
                <FontAwesomeIcon icon={faUserDoctor} className='mr-1'/>
                DOKTER
            </Link>
            <Link 
                href="/dokter/[idPasien]/assesment/perawat" as={`/dokter/${params.idPasien}/assesment/perawat`}
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
