"use client"
import React from 'react'
import FontAwesomeIcon from '../../../fontawesome';
import { faFolderOpen, faXmark } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link'

export default function PasienTerpanggil() {
  
  const notReady = ()=>{
    alert('FITUR INI MASIH DALAM PROSES PENGEMBANGAN')
  }

  return (
    <>
      <div className="overflow-y-auto">
        <table className="min-w-full whitespace-pre-line table-auto">
          <colgroup>
            <col className="w-[15%]" />
            <col className="w-[60%]" />
            <col className="w-[15%]" />
          </colgroup>
          <thead>
            <tr className="text-left text-white bg-fuchsia-800">
              <th className="px-4 py-2 border-b border-gray-200 text-center">NO</th>
              <th className="px-4 py-2 border-b border-gray-200 text-center">NAMA</th>
              <th className="px-4 py-2 border-b border-gray-200 text-center">Action</th>
            </tr>
          </thead>
          <tbody className="text-gray-600">
            <tr className='hover:bg-gray-200'>
              <td className='px-4 py-2 border-b border-gray-400 text-center'>A 250</td>
              <td className='px-4 py-2 border-b border-gray-400'>M. Rizal Faisal Abidin nugroho</td>
              <td className='px-4 py-2 border-b border-gray-400 text-center'>

                <div>
                  <div className='px-1 py-1'>
                    <Link
                      href='/dokter/12/riwayat'
                    >
                      <button
                        className="bg-green-700 text-white py-1 px-2 rounded-md hover:bg-emerald-900
                      transition duration-300 ease-in-out"
                      >
                        <div className='flex'>
                          <div className='mr-2'>
                            <FontAwesomeIcon icon={faFolderOpen} />
                          </div>
                          <div>
                            Buka
                          </div>
                        </div>
                      </button>
                    </Link>
                  </div>
                  <div className='px-1 py-1'>
                    <button
                      className="bg-red-700 text-white py-1 px-2 rounded-md hover:bg-red-700 
                  transition duration-300 ease-in-out"
                      onClick={notReady}
                    >
                      <div className='flex'>
                        <div className='mr-2'>
                          <FontAwesomeIcon icon={faXmark} />
                        </div>
                        <div>
                          Batal
                        </div>
                      </div>
                    </button>
                  </div>
                </div>

              </td>
            </tr>
          </tbody>
        </table>
      </div>

    </>
  )
}
