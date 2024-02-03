/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import React, { useState, useEffect } from 'react'
import ProvinsiSelect from '../component/provinsiSelect';
import KabupatenSelect from '../component/kabupatenSelect';
import KecamatanSelect from '../component/kecamatanSelect';
import RadioGender from '../component/radiogender';
import TextAreaAlamat from '../component/textAreaAlamat';

export default function page() {
  const [valueProvinsi, setProvinsi] = useState('');
  const [provinsiOptions, setOptionProvinsi] = useState([]);
  const [valueKabupaten, setKabupaten] = useState('')
  const [kabupatenOptions, setOptionKabupaten] = useState([])
  const [valueKecamatan, setKecamatan] = useState('')
  const [kecamatanOptions, setOptionKecamatan] = useState([])
  const [jenisKelamin, setJenisKelamin] = useState('');
  const [alamatValue, setAlamatValue] = useState('');

  const handleChange = (value) => {
    setProvinsi(value);
  };

  const handleKabupaten = (value) => {
    setKabupaten(value)
  }

  const handleKecamatan = (value) => {
    setKecamatan(value)
  }

  const handleJenisKelaminChange = (value) => {
    setJenisKelamin(value);
  };

  const handleInputProvinsi = (inputValue) => {
    if (inputValue.trim() !== '') {
      fetch(`https://jsonplaceholder.typicode.com/users?name_like=${inputValue}`)
        .then(response => response.json())
        .then(data => {
          const formattedOptions = data.map(user => ({
            value: user.id,
            label: user.name,
          }));
          setOptionProvinsi(formattedOptions);
        })
        .catch(error => console.error('Error fetching data:', error));
    } else {
      setOptionProvinsi([]);
    }
  };

  const handleInputKabupaten = (inputValue) => {
    if (inputValue.trim() !== '') {
      fetch(`https://jsonplaceholder.typicode.com/users?name_like=${inputValue}`)
        .then(response => response.json())
        .then(data => {
          const formattedOptions = data.map(user => ({
            value: user.id,
            label: user.name,
          }));
          setOptionKabupaten(formattedOptions);
        })
        .catch(error => console.error('Error fetching data:', error));
    } else {
      setOptionKabupaten([]);
    }
  };

  const handleInputKecamatan = (inputValue) => {
    if (inputValue.trim() !== '') {
      fetch(`https://jsonplaceholder.typicode.com/users?name_like=${inputValue}`)
        .then(response => response.json())
        .then(data => {
          const formattedOptions = data.map(user => ({
            value: user.id,
            label: user.name,
          }));
          setOptionKecamatan(formattedOptions);
        })
        .catch(error => console.error('Error fetching data:', error));
    } else {
      setOptionKecamatan([]);
    }
  };

  useEffect(() => {
    console.log(jenisKelamin);
  }, [
    jenisKelamin
  ]);

  return (
    <div>
      <div className='text-center border p-2 mb-4 text-white font-bold bg-green-500'>
        FORM INPUT PASIEN BARU
      </div>
      <div className='flex px-3 border pb-6'>
        <div className='w-[38%] mr-[4%]'>

          <div className='mt-4 text-center'>
            <RadioGender onChange={handleJenisKelaminChange} />
          </div>

          <div className='mt-4'>
            <label htmlFor='NamaPasien' className="block text-sm font-medium leading-6 text-gray-900">Nama Pasien</label>
            <div className="relative mt-1 rounded-md shadow-sm">
              <input type="text"
                name="NamaPasien" id="NamaPasien" className="block w-full rounded-md border-0 py-1.5 pl-2 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 read-only:bg-gray-100 h-[2.37rem]" placeholder="Nama pasien" />
            </div>
          </div>

          <div className='mt-4'>
            <label htmlFor='NoBpjs' className="block text-sm font-medium leading-6 text-gray-900">Nomor Bpjs</label>
            <div className="relative mt-1 rounded-md shadow-sm">
              <input type="text"
                name="NoBpjs" id="NoBpjs" className="block w-full rounded-md border-0 py-1.5 pl-2 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 read-only:bg-gray-100 h-[2.37rem]" placeholder="Nomor Bpjs" />
            </div>
          </div>

          <div className='mt-4'>
            <label htmlFor='TanggalLahir' className="block text-sm font-medium leading-6 text-gray-900">Tanggal Lahir</label>
            <div className="relative mt-1 rounded-md shadow-sm">
              <input
                type="date"
                name="TanggalLahir"
                id="TanggalLahir"
                className="block w-full rounded-md border-0 py-1.5 pl-2 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 read-only:bg-gray-100 h-[2.37rem]"
                placeholder="dd/mm/yyyy"
                required
              />
            </div>
          </div>

        </div>
        <div className='w-[58%] '>
          <div className='flex'>
            <ProvinsiSelect
              value={valueProvinsi}
              onChange={handleChange}
              onInputChange={handleInputProvinsi}
              options={provinsiOptions}
            />

            <KabupatenSelect
              value={valueKabupaten}
              onChange={handleKabupaten}
              onInputChange={handleInputKabupaten}
              options={kabupatenOptions}
            />

            <KecamatanSelect
              value={valueKecamatan}
              onChange={handleKecamatan}
              onInputChange={handleInputKecamatan}
              options={kecamatanOptions}
            />
          </div>

          <TextAreaAlamat value={alamatValue} onChange={setAlamatValue} />

          <div className='mt-11 text-right'>
            <button
              type="button"
              // onClick={onClick}
              className="px-4 py-2 bg-blue-500 text-white rounded-md focus:outline-none focus:ring focus:border-blue-300 active:bg-blue-600"
            >
              SIMPAN DATA
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}
