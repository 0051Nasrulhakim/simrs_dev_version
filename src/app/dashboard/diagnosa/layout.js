"use client"
import React, { useState, useEffect } from 'react';
import Link from "next/link";
import { usePathname } from 'next/navigation';

export default function Layout({ children }) {
    const [activeMenu, setActiveMenu] = useState('nav-diagnosa');

    const handleMenuClick = (menuId) => {
        setActiveMenu(menuId);
    };

    const pathname = usePathname()

    useEffect(() => {
        // Update activeMenu based on the current route
        switch (pathname) {
          case '/dashboard/dianosa/diagnosa':
            setActiveMenu('nav-diagnosa');
            break;
          case '/dashboard/diagnosa/prosedur':
            setActiveMenu('nav-prosedur');
            break;
          default:
            setActiveMenu('nav-diagnosa');
        }
      }, [pathname]);

    return (
        <div className='border mt-[-0.8%] border-t-1 border-sky-900'>
            <div className='ml-4 mr-4 mb-2'>
                <div className='flex justify-center mt-[2.5%]'>
                    <Link href="/dashboard/diagnosa/diagnosa"
                        className={`p-2 border rounded-tl-md ${activeMenu === 'nav-diagnosa' ? 'text-white border-b-0 border-gray-700 bg-gray-700 font-bold' : ''
                            }`}
                        id='nav-dok'
                        onClick={() => handleMenuClick('nav-dok')}
                    >
                        DIAGNOSA
                    </Link>
                    <Link href="/dashboard/diagnosa/prosedur"
                        className={`p-2 border rounded-tr-md ${activeMenu === 'nav-prosedur' ? 'text-white border-b-0 border-gray-700 bg-gray-700 font-bold' : ''
                            }`}
                        id='nav-per'
                        onClick={() => handleMenuClick('nav-per')}
                    >
                        PROSEDUR
                    </Link>
                </div>
                <div className='border p-2 border-gray-700 mb-10 rounded-tl-md rounded-tr-md'>
                    {children}

                </div>
            </div>
        </div>
    );
}
