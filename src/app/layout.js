import Link from "next/link";
import './globals.css'


export default function RootLayout({ children }) {
  return (
    <html lang='en'>

      <body>
        <div className="navbar bg-blue-700 text-white">
          <div className="content flex flex-row space-x-0.5 ml-3 mr-3">
            <Link href={"/"}> <div className="flex justify-center items-center h-12 bg-sky-800 p-2">Logo</div></Link>
            <Link href={"/dashboard/riwayat"}><div className="flex justify-center items-center h-12 p-2">Dashboard</div></Link>
            <Link href={'/dokter'}><div className="flex justify-center items-center h-12 p-2">Dokter</div></Link>
            <Link href={"/"}><div className="flex justify-center items-center h-12 p-2">Rekam Medik</div></Link>
          </div>
        </div>
        
        <div className="warapper ml-3 mr-3">
          <div className="data_pasien mt-1 bg-slate-300 p-2 w-3/5">
            <div className="text-2xl font-bold"> 
              Nasrul Hakim
            </div>
            <div className="flex flex-row"> 
              <div className="w-28 text-sm"> No. RM </div>
              <div className="w-28 text-sm">: 0018817</div>
            </div>
            <div className="flex flex-row">
              <div className="w-28 text-sm"> No. BPJS</div>
              <div className="w-28 text-sm">: 0018817</div>
            </div>
            <div className="flex flex-row">
              <div className="w-28 text-sm"> Jenis Kelamin</div>
              <div className="w-28 text-sm">: 0018817</div>
            </div>
            <div className="flex flex-row">
              <div className="w-28 text-sm"> Alamat</div>
              <div className="w-60 text-sm">: Wonoyoso gg. 5 Buaran pekalongan jawa tengah jajaj</div>
            </div>
          </div>
          {children}
        </div>

      </body>
    </html>
  )
}