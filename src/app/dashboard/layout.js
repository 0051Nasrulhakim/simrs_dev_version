"use client"
import React, { useEffect } from 'react'
import Link from "next/link";
import { DataProvider } from './resep/DataCOntext'

export default function layout({ children }) {
  return (
    <div>
      <div className='flex flex-row bg-sky-900 mt-2 text-white'>
        <Link href="/dashboard/riwayat" className='p-2 px-4'>Riwayat</Link>
        <Link href="/dashboard/assesment/dokter" className='p-2 px-4'>Assesment</Link>
        <Link href="/dashboard/penunjang" className='p-2 px-4'>Penunjang</Link>
        <Link href="/dashboard/diagnosa" className='p-2 px-4'>Diagnosa</Link>
        <Link href="/dashboard/tindakan" className='p-2 px-4'>Tindakan</Link>
        <Link href="/dashboard/resep" className='p-2 px-4'>Resep</Link>
        <Link href="/dashboard/perencanaan" className='p-2 px-4'>Perencanaan</Link>
        <Link href="/dashboard/selesai" className='p-2 px-4'>Selesai</Link>
      </div>
      <DataProvider>
        {children}
      </DataProvider>
    </div>
  )
}

