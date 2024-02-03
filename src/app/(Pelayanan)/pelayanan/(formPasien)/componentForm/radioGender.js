// RadioGender.js
import React, { useState } from 'react';
import RadioGrup from '../componentForm/radioGrup'; // Sesuaikan path dengan struktur folder Anda

const RadioGender = ({ onChange }) => {
    const [jenisKelamin, setJenisKelamin] = useState('');

    const handleJenisKelaminChange = (value) => {
        setJenisKelamin(value);
        onChange(value);
    };

    const jenisKelaminOptions = [
        { value: 'Lk', label: 'Laki-laki' },
        { value: 'pr', label: 'Perempuan' },
    ];

    return (
        <div className='mt-4 text-center'>
            <label htmlFor='JenisKelamin' className="block text-sm font-medium leading-6 text-gray-900">Jenis Kelamin</label>
            <RadioGrup options={jenisKelaminOptions} onChange={handleJenisKelaminChange} />
        </div>
    );
};

export default RadioGender;

