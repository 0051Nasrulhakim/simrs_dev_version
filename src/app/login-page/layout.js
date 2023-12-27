/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './component/login-page.css'
import '../globals.css'
import Image from 'next/image'

export default function RootLayout({ children }) {
  return (
    <div className=' h-screen'>
      <Image 
        src="/images/bg-login-type-a.jpg"
        fill={true}
        priority={true}
        
      />
      <div>
        {children}
      </div>
    </div>
  );
};

