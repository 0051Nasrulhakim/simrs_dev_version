/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import Select from 'react-select';

const KabupatenSelect = ({ value, onChange, onInputChange, options }) => {
  return (
    <div className='mt-4 w-[34%] mr-[3%]'>
      <label htmlFor='Kabupaten' className="block text-sm font-medium leading-6 text-gray-900 text-center">Kabupaten</label>
      <div className="relative mt-1 rounded-md shadow-sm">
        <Select
          className='block w-full'
          value={value}
          onChange={onChange}
          onInputChange={onInputChange}
          options={Array.isArray(options) ? options : []}
          instanceId="select-box"
          isSearchable
          placeholder="Kabupaten"
          noOptionsMessage={() => "Masukkan Nama Kabupaten Terlebih Dahulu"}
        />
      </div>
    </div>
  );
};

export default KabupatenSelect;
