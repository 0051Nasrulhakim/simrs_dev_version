/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import React from 'react'
import DataTable from './component/dataTable'

export default function page() {

    const data = [
        { 
            noBpjs: '000000671667266', 
            noRm: '0009730', 
            namaPasien: 'Muhammad Ariza juniardi', 
            alamat: 'Kajen kab. Pekalongan Jawa Tengah' 
        },
        { 
            noBpjs: '000000671667266', 
            noRm: '0009730', 
            namaPasien: 'Muhammad Ariza juniardi', 
            alamat: 'Kajen kab. Pekalongan Jawa Tengah' 
        },
    ];

    return (
        <div>
            <div className='text-center border p-2 mb-4 text-white font-bold bg-green-500'>
                DAFTAR DATA PASIEN
            </div>

            <div className='mb-5'>
                <div className='w-[35%] mb-1 ml-1'>
                    Cari Pasien Berdasarkan
                </div>
                <div className='flex'>
                    <div className='bg-[#365486] p-[0.6] rounded-md w-[10%] mr-[0.5%]'>
                        <select id="by" className="h-full w-full rounded-md border-0 bg-transparent py-1 pl-2 pr-3 sm:text-sm text-white"
                        >
                            <option value="noBpjs" className='text-black'>Nomor BPJS</option>
                            <option value="noRm" className='text-black'>Nomor RM</option>
                            <option value="namaPasien" className='text-black'>Nama Pasien</option>
                        </select>
                    </div>
                    <div className='w-[25%]'>
                        <input type="text"
                            name="Cari" id="Cari" className="block w-full rounded-md border-0 py-1.5 pl-2 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 read-only:bg-gray-100 h-[2.37rem]" placeholder="Cari Data Pasien" />
                    </div>
                </div>
            </div>

            <div className='tablePasien' id='tablePasien'>
                <DataTable data={data} />
            </div>
        </div>


    )
}
