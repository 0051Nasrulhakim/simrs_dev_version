import React from 'react';
import Link from 'next/link'

const DataTable = ({ data }) => {

  return (
    <>
      <table className='w-[1270px] rounded-md'>
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
          {
            data !== 401 ? (
              data !== undefined ? (
                data !== null ? (
                  data.length > 0 ? (
                    data.map((item, index) => (
                      <tr key={index}>
                        <td className='w-[4%] text-center p-1 border border-b-zinc-700'>{index + 1} </td>
                        <td className='w-[16%] px-3 py-2 border border-b-zinc-700'> {item.nomor_bpjs} </td>
                        <td className='w-[13%] px-3 py-2 border border-b-zinc-700'> {item.nomor_rm} </td>
                        <td className='w-[25%] px-3 py-2 border border-b-zinc-700'> {item.nama_pasien}</td>
                        <td className='w-[27%] px-3 py-2 border border-b-zinc-700'> {item.alamat} </td>
                        <td className='w-[15%] px-3 py-2 border border-b-zinc-700'>
                          <div className='flex justify-center '>
                            <div className='bg-yellow-400 mr-[3%] rounded-md px-2 py-1 font-medium'>
                              <Link href= { `/pelayanan/pasien/updatePasien/${item.nomor_rm}` }>
                                <button>
                                  Ubah
                                </button>
                              </Link>
                            </div>
                            <div className='bg-red-600 rounded-md px-2 py-1 text-white font-medium'>
                              <button>
                                Hapus
                              </button>
                            </div>
                          </div>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="6" className='text-center px-3 py-2 border border-b-zinc-700'>
                        Loading Data ...
                      </td>
                    </tr>
                  )
                ) : (
                  <tr>
                    <td colSpan="6" className='text-center px-3 py-2 border border-b-zinc-700'>
                      Data Pasien Tidak Ditemukan
                    </td>
                  </tr>
                )
              ) : (
                <tr>
                  <td colSpan="6" className='text-center px-3 py-2 border border-b-zinc-700'>
                    Menunggu server untuk merespon
                  </td>
                </tr>
              )
            ) : (
              <tr>
                <td colSpan="6" className='text-center px-3 py-2 border border-b-zinc-700'>
                  Anda Belum Melakukan Login !! <br /> Silahkan Login <Link href='/login-page'> KLIK disini </Link>
                </td>
              </tr>
            )
          }

        </tbody>
      </table>
    </>
  );
};

export default DataTable;
