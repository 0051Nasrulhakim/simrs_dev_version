"use client"
import React, { useEffect, useState } from 'react';
import Alert  from '../../../../component/Alert';

export default function Page() {
    const [showAlert, setShowAlert] = useState(false);
    const [type, setType] = useState('')
    

    const alert = (value) =>{
        setShowAlert(true)
        setType(value)
    }

    const handleClose = (value) => {
        setShowAlert(value)
    };
    

    return (
        <>
            <button
                className='border p-2 bg-blue-700 rounded-md text-white'
                onClick={ ()=> alert('success') }>
                alert success
            </button>
            <button
                className='border p-2 bg-blue-700 rounded-md text-white'
                onClick={ ()=> alert('loading') }>
                alert loading
            </button>
            <button
                className='border p-2 bg-blue-700 rounded-md text-white'
                onClick={ ()=> alert('error') }>
                alert ERROR
            </button>

            <div>page</div>
            asalsaslm
            { showAlert && <Alert message="Berhasil Menyimpan Data" type={ type } onClose={handleClose} /> }
        </>
    );
}
