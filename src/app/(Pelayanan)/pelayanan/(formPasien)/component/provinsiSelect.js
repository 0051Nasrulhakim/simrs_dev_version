/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import Select from 'react-select';

const ProvinsiSelect = ({ value, onChange, onInputChange, options }) => {
  return (
    <div className='mt-4 w-[30%] mr-[3%]'>
      <label htmlFor='provinsi' className="block text-sm font-medium leading-6 text-gray-900 text-center">Provinsi</label>
      <div className="relative mt-1 rounded-md shadow-sm">
        <Select
          className='block w-full'
          value={value}
          onChange={onChange}
          onInputChange={onInputChange}
          options={Array.isArray(options) ? options : []}
          instanceId="select-box"
          isSearchable
          placeholder="Provinsi"
          noOptionsMessage={() => "Masukkan Nama Provinsi Terlebih Dahulu"}
        />
      </div>
    </div>
  );
};

export default ProvinsiSelect;
