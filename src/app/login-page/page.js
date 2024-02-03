'use client'
import React, { useState } from 'react'
import dynamic from 'next/dynamic'
const Select = dynamic(() => import('./component/dropDownRole'))

export default function Page() {
  const [selectedRole, setSelectedRole] = useState(null);

  const handleRoleChange = (selectedRole) => {
    setSelectedRole(selectedRole);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted with role:', selectedRole);
    alert("HALAMAN INI MASIH DALAM TAHAP PENGEMBANGAN")
  };

  return (
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
  )
}
