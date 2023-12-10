"use client"
import React, { useState } from 'react';
import Link from "next/link";
import { DataProvider } from '../DataContext'

export default function Layout({ children }) {
    const [activeMenu, setActiveMenu] = useState('nav-dok');

    const handleMenuClick = (menuId) => {
        setActiveMenu(menuId);
    };

    return (
        <div className='border border-sky-900'>
            <div className='ml-4 mr-4 mb-2'>
                <div className='flex justify-center mt-5'>
                    <Link href="/dashboard/assesment/dokter"
                        className={`p-2 border rounded-tl-md ${activeMenu === 'nav-dok' ? 'text-white border-b-0 border-gray-700 bg-gray-700 font-bold' : ''
                            }`}
                        id='nav-dok'
                        onClick={() => handleMenuClick('nav-dok')}
                    >
                        DOKTER
                    </Link>
                    <Link href="/dashboard/assesment/perawat"
                        className={`p-2 border rounded-tr-md ${activeMenu === 'nav-per' ? 'text-white border-b-0 border-gray-700 bg-gray-700 font-bold' : ''
                            }`}
                        id='nav-per'
                        onClick={() => handleMenuClick('nav-per')}
                    >
                        PERAWAT
                    </Link>
                </div>
                <div className='border p-2 border-gray-700 mb-10 rounded-tl-md rounded-tr-md'>

                        {children}

                </div>
            </div>
        </div>
    );
}
