import React from 'react'
import dynamic from 'next/dynamic'
// const TabelKeseluruhanPasien = dynamic(() => import('./tabel/keseluruhanPasien'))
const AntrianPoli = dynamic(() => import('./tabel/antrianPoli'))
const PasienTerpanggil = dynamic(() => import('./tabel/pasienTerpanggil'))

export default function Page({ params }) {
  return (
    <div className=''>

      <div className='text-right mt-2 mb-3 mr-3'>
        <div className="">
          Selamat Datang..
        </div>
        <div className='font-bold text-lg'>
          Dr. Nasrul Hakim. M.Kom, Phd
        </div>
      </div>

      <div className='bg-white border border-grey-400 mb-[5%] px-2 py-4 rounded-md shadow-lg'>
        <div className='text-center font-bold text-xl'>
          <div className='text-center'>
            DAFTAR ANTRIAN POLI TUMBUH KEMBANG
          </div>
          <div className='tex-center'>
            HARI SENIN 23 - DES - 2023
          </div>
        </div>
        <div className='flex mt-[1%]'>
          <div className='w-[60%] mr-[2%] border border-gray-300 rounded-t-md shadow-md'>
            <div className='text-center mb-2 mt-2'>
              DAFTAR TUNGGU
            </div>
            <AntrianPoli />
          </div>
          <div className='w-[38%] border border-gray-200 rounded-t-md shadow-md'>
            <div className='text-center mb-2 mt-2'>
              PASIEN TERPANGGIL
            </div>
            <PasienTerpanggil />
          </div>
        </div>
      </div>
      <div className='bg-white'>
        
      </div>
    </div>
  )
}
