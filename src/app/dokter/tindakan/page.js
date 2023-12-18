"use client"
import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import SelectMedis from './selectMedis'

export default function Page() {
  const [hargaTindakan, setHargaTindakan] = useState('');
  const [namaTindakan, setNamaTindakan] = useState('');

  const [tindakanOptions, setTindakanOptions] = useState([]);
  const [dokterOptions, setDokterOptions] = useState([]);


  const [dokter, setDokter] = useState('');
  const [kodeDokter, setKodeDokter] = useState('');

  const handleInputChange = (inputValue) => {
    if (inputValue.trim() !== '') {
      fetch(`https://jsonplaceholder.typicode.com/users?name_like=${inputValue}`)
        .then(response => response.json())
        .then(data => {
          const formattedOptions = data.map(user => ({
            value: user.id,
            label: user.name,
          }));
          setTindakanOptions(formattedOptions);
        })
        .catch(error => console.error('Error fetching data:', error));
    } else {
      setTindakanOptions([]);
    }
  };

  const handleInputDokter = (inputValue) => {
    if (inputValue.trim() !== '') {
      fetch(`https://jsonplaceholder.typicode.com/users?name_like=${inputValue}`)
        .then(response => response.json())
        .then(data => {
          const formattedOptions = data.map(user => ({
            value: user.id,
            label: user.name,
          }));
          setDokterOptions(formattedOptions);
        })
        .catch(error => console.error('Error fetching data:', error));
    } else {
      setDokterOptions([]);
    }
  };

  const handleTindakan = (element) => {
    setNamaTindakan(element.label);
    setHargaTindakan(element.value);
  };

  const handleDokter = (element) => {
    setDokter(element.label);
    setKodeDokter(element.value);
  };


  return (
    <div className='border mt-[-0.6%] border-t-1 border-sky-900'>
      <div className='ml-4 mr-4 mt-3 mb-2'>
        
        <div className='flex mt-[3%]'>
          <div className='border rounded-md p-2 w-[37%] mr-[3%]'>
            <div className='w-full text-center'>
              Tindakan
            </div>
            <div className='mt-2'>
              Jenis Tindakan
              <Select
                className='block w-full'
                onInputChange={(input) => handleInputChange(input)}
                options={Array.isArray(tindakanOptions) ? tindakanOptions : []}
                instanceId="select-box"
                isSearchable
                placeholder="Cari tindakan"
                onChange={(selectedOption) => {
                  handleTindakan(selectedOption);
                  // Handle selected option, e.g., set state or perform other actions
                }}
                noOptionsMessage={() => "Input tindakan yang dilakukan"}
              />
            </div>
            <div className='mt-3'>
              Dokter
              <Select
                className='block w-full'
                onInputChange={(input) => handleInputDokter(input)}
                options={Array.isArray(dokterOptions) ? dokterOptions : []}
                instanceId="select-box"
                isSearchable
                placeholder="Cari dokter"
                onChange={(selectedOption) => {
                  handleDokter(selectedOption);
                  // Handle selected option, e.g., set state or perform other actions
                }}
                noOptionsMessage={() => "Input dokter yang dicari"}
              />
            </div>
            <div className='mt-3'>
              Tarif Tindakan
              <input
                type="text"
                name="tarifTindakan"
                id="tarif_tindakan"
                value={hargaTindakan}
                className="read-only:bg-gray-100 block w-full rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                readOnly={true}
                placeholder="0"
              />
            </div>
          </div>
          <div className='border rounded-md p-2 w-[37%] mr-2'>
            <div className='w-full text-center mb-3'>
              Paramedis
            </div>
            <SelectMedis/>
          </div>
        </div>
      </div>
    </div>
  );
}

