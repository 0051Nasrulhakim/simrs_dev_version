"use client"

import React, { useState, useEffect } from 'react'
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { DataProvider } from './DataContext'

export default function layout({ children }) {
  const [activeMenu, setActiveMenu] = useState();

  const handleMenuClick = (menuId) => {
    setActiveMenu(menuId);
  };

  const pathname = usePathname()

  useEffect(() => {
    // Update activeMenu based on the current route
    switch (pathname) {
      case '/dashboard/riwayat':
        setActiveMenu('nav-riwayat');
        break;
      case '/dashboard/assesment/dokter':
        setActiveMenu('nav-assesment');
        break;
      case '/dashboard/assesment/perawat':
        setActiveMenu('nav-assesment');
        break;
      case '/dashboard/penunjang':
        setActiveMenu('nav-penunjang');
        break;
      case '/dashboard/diagnosa':
        setActiveMenu('nav-diagnosa');
        break;
      case '/dashboard/tindakan':
        setActiveMenu('nav-tindakan');
        break;
      case '/dashboard/resep':
        setActiveMenu('nav-resep');
        break;
      case '/dashboard/perencanaan':
        setActiveMenu('nav-perencanaan');
        break;
      case '/dashboard/selesai':
        setActiveMenu('nav-selesai');
        break;
      default:
        setActiveMenu('nav-riwayat');
    }
  }, [pathname]);

  return (
    <div>
      <div className='flex flex-row bg-sky-900 mt-2 text-white'>
        <Link
          href="/dashboard/riwayat"
          prefetch={false}
          className={
            `p-2 px-4 
            ${activeMenu === 'nav-riwayat' ?
              'bg-white text-black border border-b-0 border-t-sky-900 border-l-sky-900 border-r-sky-900'
              :
              ''}`
          }
          id='nav-riwayat'
          onClick={() => handleMenuClick('nav-riwayat')}
        >
          Riwayat
        </Link>
        <Link
          href="/dashboard/assesment/dokter"
          prefetch={false}
          className={
            `p-2 px-4 
            ${activeMenu === 'nav-assesment' ?
              'bg-white text-black border border-b-0 border-t-sky-900 border-l-sky-900 border-r-sky-900'
              :
              ''}`
          }
          id='nav-assesment'
          onClick={() => handleMenuClick('nav-assesment')}
        >
          Assesment
        </Link>
        <Link 
          href="/dashboard/penunjang"
          className={
            `p-2 px-4 
            ${activeMenu === 'nav-penunjang' ?
              'bg-white text-black border border-b-0 border-t-sky-900 border-l-sky-900 border-r-sky-900'
              :
              ''}`
          }
          id='nav-penunjang'
          onClick={() => handleMenuClick('nav-penunjang')}
        >
          Penunjang
        </Link>
        <Link 
          href="/dashboard/diagnosa"
          className={
            `p-2 px-4 
            ${activeMenu === 'nav-diagnosa' ?
              'bg-white text-black border border-b-0 border-t-sky-900 border-l-sky-900 border-r-sky-900'
              :
              ''}`
          }
          id='nav-diagnosa'
          onClick={() => handleMenuClick('nav-diagnosa')}
        >
          Diagnosa
        </Link>
        <Link 
          href="/dashboard/tindakan"
          className={
            `p-2 px-4 
            ${activeMenu === 'nav-tindakan' ?
              'bg-white text-black border border-b-0 border-t-sky-900 border-l-sky-900 border-r-sky-900'
              :
              ''}`
          }
          id='nav-tindakan'
          onClick={() => handleMenuClick('nav-tindakan')}
        >
          Tindakan
        </Link>
        <Link 
          href="/dashboard/resep"
          className={
            `p-2 px-4 
            ${activeMenu === 'nav-resep' ?
              'bg-white text-black border border-b-0 border-t-sky-900 border-l-sky-900 border-r-sky-900'
              :
              ''}`
          }
          id='nav-resep'
          onClick={() => handleMenuClick('nav-resep')}
        >
          Resep
        </Link>
        <Link 
          href="/dashboard/perencanaan"
          className={
            `p-2 px-4 
            ${activeMenu === 'nav-perencanaan' ?
              'bg-white text-black border border-b-0 border-t-sky-900 border-l-sky-900 border-r-sky-900'
              :
              ''}`
          }
          id='nav-perencanaan'
          onClick={() => handleMenuClick('nav-perencanaan')}
        >
          Perencanaan
        </Link>
        <Link 
          href="/dashboard/selesai"
          className={
            `p-2 px-4 
            ${activeMenu === 'nav-selesai' ?
              'bg-white text-black border border-b-0 border-t-sky-900 border-l-sky-900 border-r-sky-900'
              :
              ''}`
          }
          id='nav-selesai'
          onClick={() => handleMenuClick('nav-selesai')}
        >
          Selesai
        </Link>
      </div>
      <DataProvider>
        {children}
      </DataProvider>
    </div>
  )
}

