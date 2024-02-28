// RadioGender.js
// "use client"
import React, { useState, useEffect } from 'react';
import RadioGrup from '../componentForm/radioGrup'; 

const RadioGender = ({ onChange, value }) => {
    const [jenisKelamin, setJenisKelamin] = useState(value);

    const handleJenisKelaminChange = (value) => {
        setJenisKelamin(value);
        onChange(value);
    };

    const jenisKelaminOptions = [
        { value: 'Lk', label: 'Laki-laki' },
        { value: 'Pr', label: 'Perempuan' },
    ];

    useEffect(() => {
        console.log('ini value' + value)
        setJenisKelamin(value);
    }, [value]);

    return (
        <div className='mt-4 text-center'>
            <label htmlFor='JenisKelamin' className="block text-sm font-medium leading-6 text-gray-900">Jenis Kelamin</label>
            <RadioGrup options={ jenisKelaminOptions } onChange={ handleJenisKelaminChange } value= { jenisKelamin }/>
        </div>
    );
};

export default RadioGender;

