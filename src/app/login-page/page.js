'use client'
import React, { useState } from 'react'
import dynamic from 'next/dynamic'
const Select = dynamic(() => import('./component/dropDownRole'))
import callLogin from './handling/callLogin'
import Alert from '../component/Alert'

export default function Page() {
  const [showAlert, setShowAlert] = useState(false);
  const [type, setType] = useState('')
  const [message, setMessage] = useState('')

  const [selectedRole, setSelectedRole] = useState(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRoleChange = (selectedRole) => {
    setSelectedRole(selectedRole);
  };

  const handleClose = (value) => {
    setShowAlert(value)
  };

  const handleSubmit = async (event) => {
    setShowAlert(true)
    setType('loading')
    event.preventDefault();
    
    setTimeout(async () => {
      try {
        const isLogin = await callLogin(username, password, selectedRole.value);

        if (isLogin.status_code === 200) {
          console.info(isLogin);
          setShowAlert(true);
          setMessage('Berhasil Melakukan Login')
          setType('success');
        }
        if (isLogin.status_code === 401) {
          setMessage(isLogin.message)
          setType('error');
        }
      } catch (error) {
        // Tangani kesalahan yang terjadi selama proses login
        console.error('Terjadi kesalahan selama login:', error);
        // Setel pesan kesalahan jika diperlukan
        setType('error');
      }
    }, 390); // Waktu penundaan dalam milidetik (1 detik)

  };

  return (
    <>
      {showAlert && <Alert message={ message } type={type} onClose={handleClose} />}

      <div className='flex border border-black h-screen justify-center items-center'>
        <div className='w-[40%] h-[58%] text-center rounded-xl p-3 bg-blur shadow-lg shadow-white'>
          <div className='font-bold text-slate-950 text-2xl'>
            FORM LOGIN SIMRS
          </div>
          <div className='mt-[5%] border border-black ml-[7%] mr-[7%] rounded-lg bg-blur-2'>
            <form onSubmit={handleSubmit}>
              <div className="mb-4 flex items-center ml-[5%] mt-[3%]">
                <label htmlFor="username" className="w-[20%] text-sm font-medium text-black text-left">
                  USERNAME
                </label>
                <input
                  type="text"
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                  id="username"
                  name="username"
                  className="w-[75%] p-2 border rounded-md focus:ring focus:border-blue-300"
                  placeholder="Masukkan Username"
                />
              </div>

              <div className="mb-4 flex items-center ml-[5%]">
                <label htmlFor="password" className="w-[20%] text-sm font-medium text-black text-left">
                  PASSWORD
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  id="password"
                  name="password"
                  className="w-[75%] p-2 border rounded-md focus:ring focus:border-blue-300"
                  placeholder="Masukkan Password"
                />
              </div>
              <div className="mb-4 flex items-center ml-[5%]">
                <label htmlFor="password" className="w-[20%] text-sm font-medium text-black text-left">
                  ROLE
                </label>
                <Select

                  onSelectRole={handleRoleChange}
                />
              </div>

              <div className="mb-[3%] flex items-center px-[5%]">
                <button
                  type="submit"
                  className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
                >
                  Login
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </>

  )
}
