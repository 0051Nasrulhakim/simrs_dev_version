"use client"
import React from 'react'
import FontAwesomeIcon from '../../../fontawesome';
import { faPlus, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';

export default function AntrianPoli() {

    const notReady = () => {
        alert('FITUR INI MASIH DALAM PROSES PENGEMBANGAN')
    }

    return (
        <>
            <div className="overflow-y-auto">
                <table className="min-w-full whitespace-pre-line table-auto">
                    <colgroup>
                        <col className="w-[10%]" />
                        <col className="w-[30%]" />
                        <col className="w-[35%]" />
                        <col className="w-[15%]" />
                    </colgroup>
                    <thead>
                        <tr className="text-left text-white bg-green-700">
                            <th className="px-4 py-2 border-b border-gray-200 text-center">NO</th>
                            <th className="px-4 py-2 border-b border-gray-200 text-center">NAMA</th>
                            <th className="px-4 py-2 border-b border-gray-200 text-center">ALAMAT</th>
                            <th className="px-4 py-2 border-b border-gray-200 text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-600">
                        <tr className='hover:bg-gray-200'>
                            <td className='px-4 py-2 border-b border-gray-400 text-center'>A 250</td>
                            <td className='px-4 py-2 border-b border-gray-400'>M. Rizal Faisal Abidin nugroho</td>
                            <td className='px-4 py-2 border-b border-gray-400'>Jl. Nusakambangan No.5 Buaran Pekalongan</td>
                            <td className='px-4 py-2 border-b border-gray-400 text-center'>
                                <button
                                    className="bg-green-500 text-white py-1 px-2 rounded-md hover:bg-green-700 transition duration-300 ease-in-out"
                                    onClick={notReady}
                                >
                                    <div className='flex'>
                                        <div className='mr-2'>
                                            <FontAwesomeIcon icon={faPhoneVolume} />
                                        </div>
                                        <div>
                                            Panggil
                                        </div>
                                    </div>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </>
    )
}
