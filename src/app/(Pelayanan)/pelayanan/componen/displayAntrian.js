"use client"
import React from 'react'
import FontAwesomeIcon from '../../../fontawesome';
import { faLeftLong, faRightLong } from '@fortawesome/free-solid-svg-icons';

export default function DisplayAntrian() {
    const notReady = () => {
        alert('FITUR INI MASIH DALAM PROSES PENGEMBANGAN')
    }
    return (
        <>
            <div className='mx-2'>
                <button
                    className="bg-red-500 text-white py-1 px-2 rounded-md flex items-center justify-center hover:bg-red-700 transition duration-300 ease-in-out"
                    onClick={notReady}
                >
                    <div className=''>
                        <div>
                            <FontAwesomeIcon icon={faLeftLong} size='2xl'/>
                        </div>
                        <div className='font-bold'>
                            PREV
                        </div>
                    </div>
                </button>
            </div>
            <div className='mx-2'>
                <div className='text-center font-bold'>
                    ANTRIAN TERAKHIR
                </div>
                <div className='font-bold text-6xl text-center'>
                    P 1
                </div>
            </div>
            <div className='mx-2'>
                <button
                    className="bg-red-500 text-white py-1 px-2 rounded-md flex items-center justify-center hover:bg-red-700 transition duration-300 ease-in-out"
                    onClick={notReady}
                >
                    <div className=''>
                        <div>
                            <FontAwesomeIcon icon={faRightLong} size='2xl'/>
                        </div>
                        <div className='font-bold'>
                            NEXT
                        </div>
                    </div>
                </button>
            </div>
        </>
    )
}
