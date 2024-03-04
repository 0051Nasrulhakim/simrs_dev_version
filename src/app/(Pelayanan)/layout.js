import dynamic from 'next/dynamic'
const MainMenu = dynamic(() => import('./mainMenu',))
import '../globals.css'
import '@fortawesome/react-fontawesome'
import '@fortawesome/fontawesome-svg-core'
import '@fortawesome/free-brands-svg-icons'
import '@fortawesome/free-regular-svg-icons'
import '@fortawesome/free-solid-svg-icons'


export default function RootLayout({ children }) {
  return (
    <>
      <div className="navbar bg-blue-700 text-white">
        <MainMenu />
      </div>

      <div>
        <div className='text-right mt-2 mb-3 mr-3'>
          <div className="">
            Login Sebagai : <b>Staff Pelayanan</b>
          </div>
          <div className='font-bold text-lg'>
            Dr. Nasrul Hakim. M.Kom, Phd
          </div>
        </div>
      </div>

      <div className="warapper px-[1%]">
        {children}
      </div>
    </>
  )
}