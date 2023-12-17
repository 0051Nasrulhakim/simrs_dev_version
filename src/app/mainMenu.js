import React from 'react'
import Link from 'next/link'

export default function MainMenu() {
    return (
        <div className="content flex flex-row space-x-0.5 ml-3 mr-3">
            <Link href={"/"}> <div className="flex justify-center items-center h-12 bg-sky-800 p-2">Logo</div></Link>
            <Link href={"/dashboard"}><div className="flex justify-center items-center h-12 p-2">Dashboard</div></Link>
            <Link href={'/dokter/riwayat'}><div className="flex justify-center items-center h-12 p-2">Dokter</div></Link>
            <Link href={"/"}><div className="flex justify-center items-center h-12 p-2">Rekam Medik</div></Link>
        </div>
    )
}
