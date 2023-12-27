import React from 'react';
import './component/login-page.css'
import '../globals.css'
// import Image from 'next/image'

export default function RootLayout({ children }) {
  return (
    <div className='set-bg h-screen'>
      <div>
        {children}
      </div>
    </div>
  );
};

