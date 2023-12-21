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
          {children}
        </div>

      </body>
    </html>
  )
}