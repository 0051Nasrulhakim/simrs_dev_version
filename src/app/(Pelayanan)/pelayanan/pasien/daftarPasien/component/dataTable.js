import React from 'react';

const DataTable = ({ data }) => {

  return (
    <>
      <table className='w-full rounded-md'>
        <thead>
          <tr className='mt-[5%]'>
            <td className='w-[4%] rounded-tl-lg p-3 text-center bg-[#43766C] font-medium text-white'>No</td>
            <td className='w-[16%] p-3 text-center bg-[#43766C] font-medium text-white'>Np Bpjs</td>
            <td className='w-[13%] p-3 text-center bg-[#43766C] font-medium text-white'>No RM</td>
            <td className='w-[25%] p-3 text-center bg-[#43766C] font-medium text-white'>Nama Pasien</td>
            <td className='w-[27%] p-3 text-center bg-[#43766C] font-medium text-white'>Alamat</td>
            <td className='w-[15%] rounded-tr-lg p-3 p-3 text-center bg-[#43766C] font-medium text-white'>Aksi</td>
          </tr>
        </thead>
        <tbody>
          {data.map( (item, index) => (
            <tr key= { index } >
              <td className='w-[4%] text-center p-1 border border-b-zinc-700'>{ index + 1 } </td>
              <td className='w-[16%] px-3 py-2 border border-b-zinc-700'> { item.noBpjs } </td>
              <td className='w-[13%] px-3 py-2 border border-b-zinc-700'> { item.noRm } </td>
              <td className='w-[25%] px-3 py-2 border border-b-zinc-700'> { item.namaPasien }</td>
              <td className='w-[27%] px-3 py-2 border border-b-zinc-700'> { item.alamat } </td>
              <td className='w-[15%] px-3 py-2 border border-b-zinc-700'>
                <div className='flex justify-evenly '>
                  <div className='bg-yellow-400 rounded-md px-3 py-1 font-medium'>
                    Ubah
                  </div>
                  <div className='bg-red-600 rounded-md px-3 py-1 text-white font-medium'>
                    Hapus
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default DataTable;
