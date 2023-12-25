"use client"
import React from 'react'
import FontAwesomeIcon from '../../fontawesome';
import { faPlus, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';


export default function TabelDaftarAntrian() {
    const notReady = () => {
        alert('FITUR INI MASIH DALAM PROSES PENGEMBANGAN')
    }
    return (
        <>
            <div className='text-center mb-2 mt-2 font-bold'>Tabel Daftar Antrian</div>
            <table>
                <thead>
                    <tr className="text-left text-white bg-yellow-400">
                        <th className="px-4 py-2 border-b border-gray-200 text-center">Nomor Antrian</th>
                        <th className="px-4 py-2 border-b border-gray-200 text-center">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='hover:bg-gray-200'>
                        <td className='px-4 py-2 border-b border-gray-400 text-center'>A 250</td>
                        <td className='px-4 py-2 border-b border-gray-400 text-center'>
                            <button
                                className="bg-green-700 text-white py-1 px-2 rounded-md hover:bg-green-800 transition duration-300 ease-in-out"
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
                    <tr className='hover:bg-gray-200'>
                        <td className='px-4 py-2 border-b border-gray-400 text-center'>A 251</td>
                        <td className='px-4 py-2 border-b border-gray-400 text-center'>
                            <button
                                className="bg-green-700 text-white py-1 px-2 rounded-md hover:bg-green-800 transition duration-300 ease-in-out"
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
                    <tr className='hover:bg-gray-200'>
                        <td className='px-4 py-2 border-b border-gray-400 text-center'>A 251</td>
                        <td className='px-4 py-2 border-b border-gray-400 text-center'>
                            <button
                                className="bg-green-700 text-white py-1 px-2 rounded-md hover:bg-green-800 transition duration-300 ease-in-out"
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
        </>
    )
}
