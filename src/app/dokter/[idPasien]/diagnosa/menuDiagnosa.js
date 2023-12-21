"use client"
import React, { useState, useEffect } from 'react'
import Link from "next/link";
import { usePathname, useParams } from 'next/navigation';
import FontAwesomeIcon from '../../../fontawesome';
import { faStethoscope, faBookMedical } from '@fortawesome/free-solid-svg-icons';

const MenuDiagnosa = () => {
    const [activeMenu, setActiveMenu] = useState('nav-diagnosa');

    const handleMenuClick = (menuId) => {
        console.log(menuId);
        setActiveMenu(menuId);
    };
    const pathname = usePathname();
    const params = useParams();

    useEffect(() => {
        // Update activeMenu based on the current route
        switch (pathname) {
            case `/dokter/${params.idPasien}/dianosa/diagnosa`:
                setActiveMenu('nav-diagnosa');
                break;
            case `/dokter/${params.idPasien}/diagnosa/prosedur`:
                setActiveMenu('nav-prosedur');
                break;
        }
    }, [pathname]);


    return (
        <div className='flex justify-center mt-[2.5%]'>
            <Link href="/dokter/[idPasien]/diagnosa/diagnosa" as={`/dokter/${params.idPasien}/diagnosa/diagnosa`}
                className={`p-2 border rounded-tl-md ${activeMenu === 'nav-diagnosa' ? 'text-white border-b-0 border-gray-700 bg-gray-700 font-bold' : ''
                    }`}
                id='nav-dok'
                onClick={() => handleMenuClick('nav-diagnosa')}
            >
                <FontAwesomeIcon icon={faStethoscope} className='mr-1'/>
                DIAGNOSA
            </Link>
            <Link href="/dokter/[idPasien]/diagnosa/prosedur" as={`/dokter/${params.idPasien}/diagnosa/prosedur`}
                className={`p-2 border rounded-tr-md ${activeMenu === 'nav-prosedur' ? 'text-white border-b-0 border-gray-700 bg-gray-700 font-bold' : ''
                    }`}
                id='nav-per'
                onClick={() => handleMenuClick('nav-prosedur')}
            >
                <FontAwesomeIcon icon={faBookMedical} className='mr-1'/>
                PROSEDUR
            </Link>
        </div>
    )
}

export default MenuDiagnosa;
