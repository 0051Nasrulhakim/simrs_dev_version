"use client"
import React from 'react'
import FontAwesomeIcon from '../../../fontawesome';
import { faUserPen, faUserPlus, faMagnifyingGlass, faBedPulse, faRightLeft} from '@fortawesome/free-solid-svg-icons';

export default function MenuDashboard() {
    return (
        <>
            <div className='w-[15.43%] bg-green-600 rounded-md text-center text-wrap p-3 m-2 hover:bg-green-800	'>
                <div className='text-white'>
                    <FontAwesomeIcon icon={faUserPlus} size='xl' />
                </div>
                <div className='font-bold text-white'>
                    Input Pasien Baru
                </div>
            </div>
            <div className='w-[15.43%] bg-yellow-600 hover:bg-yellow-800 rounded-md text-center text-wrap p-3 m-2 '>
                <div className='text-white'>
                    <FontAwesomeIcon icon={faUserPen} size='xl' />
                </div>
                <div className='font-bold text-white'>
                    Registrasi Antrian Poli
                </div>
            </div>
            <div className='w-[15.43%] bg-lime-600 hover:bg-lime-800 rounded-md text-center text-wrap p-3 m-2 '>
                <div className='text-white'>
                    <FontAwesomeIcon icon={faMagnifyingGlass} size='xl' />
                </div>
                <div className='font-bold text-white'>
                    Cari Data Pasien
                </div>
            </div>
            <div className='w-[15.43%] bg-emerald-600	hover:bg-emerald-800 rounded-md text-center text-wrap p-3 m-2 '>
                <div className='text-white'>
                    <FontAwesomeIcon icon={faRightLeft} size='xl' />
                </div>
                <div className='font-bold text-white'>
                    Buat Rujukan Kembali
                </div>
            </div>
            <div className='w-[15.43%] bg-teal-600 hover:bg-teal-800 rounded-md text-center text-wrap p-3 m-2 '>
                <div className='text-white'>
                    <FontAwesomeIcon icon={faBedPulse} size="xl" />
                </div>
                <div className='font-bold text-white'>
                    Rawat Inap
                </div>
            </div>
            <div className='w-[15.43%] bg-fuchsia-600	hover:bg-fuchsia-800 rounded-md text-center text-wrap p-3 m-2 '>
                <div>
                    LOGO
                </div>
                <div className='font-bold text-white'>
                    Rawat Inap
                </div>
            </div>
        </>
    )
}
