import dynamic from 'next/dynamic'
const MainMenu = dynamic(() => import('./mainMenu')) 
import './globals.css'
import '@fortawesome/react-fontawesome'
import '@fortawesome/fontawesome-svg-core'
import '@fortawesome/free-brands-svg-icons'
import '@fortawesome/free-regular-svg-icons'
import '@fortawesome/free-solid-svg-icons'


export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <title>APLIKASI SIM RS</title>
      <body>
        <div className="navbar bg-blue-700 text-white">
          <MainMenu/>
        </div>
        
        <div className="warapper px-[1%]">
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
              <div className="text-sm">: Wonoyoso gg. 5 Buaran pekalongan jawa tengah jajaj</div>
            </div>
          </div>
          {children}
        </div>

      </body>
    </html>
  )
}