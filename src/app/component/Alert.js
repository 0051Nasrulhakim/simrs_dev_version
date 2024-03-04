"use client"
import React, { useState } from 'react';

const Alert = ({ message, type, onClose }) => {

    const [isOpen, setIsOpen] = useState(true)

    const close = () => {
        setIsOpen(false)
        onClose(false);
    }

    let title = '';
    let tunggu = ''

    if (type === 'loading') {
        message = "Silahkan Tunggu..."
        title = "LOADING"
    }

    if (type === 'success') {
        title = "BERHASIL"
        tunggu = "Proses Sinkron Tunggu Sebentar ..."
    }

    if (type === 'error') {
        title = "Gagal"
    }

    let bgColor, textColor, borderColor, animation, bgTitle;

    // Tentukan warna latar belakang, teks, dan border berdasarkan tipe alert
    switch (type) {
        case 'success':
            bgTitle = 'bg-[#65B741]'
            bgColor = 'bg-white';
            textColor = 'text-black';
            borderColor = 'border-[#61677A]';
            animation = 'tick';
            break;
        case 'error':
            bgTitle = 'bg-[#D04848]'
            bgColor = 'bg-white';
            textColor = 'text-black';
            borderColor = 'border-[#61677A]';
            break;
        case 'loading':
            bgTitle = 'bg-[#116D6E]'
            bgColor = 'bg-white';
            textColor = 'text-black';
            borderColor = 'border-[#61677A]';
            animation = 'w-28 h-28 rounded-full mx-auto spin'
            break;
        default:
            bgColor = 'bg-blue-100';
            textColor = 'text-blue-800';
            borderColor = 'border-blue-400';
    }

    return (
        isOpen && (
            <div className='absolute inset-0 m-auto w-[100%] z-40'>
                <div className='absolute inset-0 bg-black opacity-30'></div>
                <div className='absolute inset-0 m-auto w-[33%]'>
                    <div className={`relative ml-auto mr-auto mt-[25%] w-[98%] h-[50%] border ${bgColor} ${textColor} ${borderColor} rounded-xl p-2 text-center shadow-2xl`}>

                        <div className={`p-1 ${bgTitle}  text-white border text-lg font-extrabold`}>
                            {title}
                        </div>

                        <div className=' h-[62%] mt-[2%] mb-[2%] flex justify-center items-center'>
                            {/* <div className='w-28 h-28 border-t-4 border-gray-800 rounded-full animate-spin mx-auto'></div> */}

                            <div className={type === 'loading' ? `${animation}` : ''}></div>
                            <div className={type === 'success' ? 'checklist border shadow-2xl bg-[#9ADE7B]' : ''}>
                                <div className={type === 'success' ? 'checklist__check' : ''}></div>
                            </div>

                            <div className={type === 'error' ? 'error border shadow-2xl bg-[#D04848]' : ''}>
                                <div className={type === 'error' ? 'error_logo1' : ''}></div>
                                <div className={type === 'error' ? 'error_logo_b' : ''}></div>
                            </div>
                        </div>
                        
                        <div className='h-[18%]'>
                            <div>
                                {message}
                            </div>
                            <div>
                                {tunggu + ' '}
                                <button className='p-1 bg-red-700 text-white rounded-md' onClick={close}> Close </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    );

};

export default Alert;
