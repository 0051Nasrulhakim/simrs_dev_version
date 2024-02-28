import React from 'react'
import Link from 'next/link'

export default function page() {
  return (
    <div>
      <h1>HALAMAN INI MASIH TAHAP PENGEMBANGAN SILAHKAN LANGSUNG MENUJU :</h1>
      <h3 className='mt-[4%]'>Halaman Dashboard :
        <Link href='./pelayanan'> KLIK disini </Link>
      </h3>

      <h3>Halaman Dokter :
        <Link href='./dokter'> KLIK disini </Link>
      </h3>
      <h3>Halaman Login :
        <Link href='./login-page'> KLIK disini </Link>
      </h3>
    </div>
  )
}
