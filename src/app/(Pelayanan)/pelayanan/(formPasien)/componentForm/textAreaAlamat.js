import React from 'react';

const TextAreaAlamat = ({ value, onChange }) => {
  return (
    <div className='mt-4'>
      <label htmlFor='Alamat' className="block text-sm font-medium leading-6 text-gray-900">Alamat Lengkap</label>
      <div className="relative mt-1 rounded-md shadow-sm">
        <textarea
          id="Alamat"
          name="Alamat"
          rows="4"
          className="block w-full rounded-md border-0 py-1.5 pl-2 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 read-only:bg-gray-100"
          placeholder="Masukkan alamat lengkap"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        ></textarea>
      </div>
    </div>
  );
};

export default TextAreaAlamat;
