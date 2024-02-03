import React from 'react'
import dynamic from 'next/dynamic'
const MenuDashboard = dynamic(() => import('./componen/menuDashboard'))
const TabelDaftarAntrian = dynamic(() => import('./componen/tabelDaftarAntrian'))
const TabelNomorTerpanggil = dynamic(() => import('./componen/tabelNomorTerpanggil'))
const TabelNomorTertunda = dynamic(() => import('./componen/tabelNomorTerrtunda'))
const DisplayAntrian = dynamic(() => import('./componen/displayAntrian'))

export default function Page() {
  return (
    <div className='mb-[2%]'>
      
      <div>
        <div className='flex p-2 border border-grey-400 shadow-lg bg-white flex-wrap rounded-sm'>
          <MenuDashboard />
        </div>

        <div className='mt-[2%] flex justify-center'>
          <div className='border border-stone-300 rounded-md flex justify-between items-center w-[30%] py-2 bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg'>
            <DisplayAntrian />
          </div>
        </div>

        <div className='mt-[2%] border border-grey-700 rounded-md shadow-lg p-2 flex justify-center'>
          <div className='border border-gray-300 rounded-md shadow-md mx-4 my-1'>
            <TabelDaftarAntrian />
          </div>
          <div className='border border-gray-300 rounded-md shadow-md mx-4 my-1'>
            <TabelNomorTerpanggil />
          </div>
          <div className='border border-gray-300 rounded-md shadow-md mx-4 my-1'>
            <TabelNomorTertunda />
          </div>
        </div>

      </div>
    </div>
  )
}