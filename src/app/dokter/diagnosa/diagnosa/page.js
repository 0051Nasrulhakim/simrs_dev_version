"use client"
import React, { useState } from 'react';
import Select from 'react-select';
import { UseDataContext } from '../../DataContext';
import FontAwesomeIcon from '../../../fontawesome';
import { faPlus, faTrashCan } from '@fortawesome/free-solid-svg-icons';

export default function Page() {
  const { diagnosa, DataDiagnosa } = UseDataContext();

  const [valueDiagnosaUmum, setDiagnosaUmum] = useState(null);
  const [diagnosaUmum, setOptionDiagnosaUmum] = useState([]);
  const [valKasusDiagnosaUmum, setJenisKasusDiagnosaUmum] = useState([]);
  const [valueInputDiagnosaUmum, setInputDiagnosaUmum] = useState('');
  const [textareaDiagnosaValue, setTextareaDiagnosaValue] = useState('');

  const [valueDiagnosaSkunder, setDiagnosaSkunder] = useState(null);
  const [diagnosaSkunder, setOptionDiagnosaSkunder] = useState([]);
  const [valKasusDiagnosaSkunder, setJenisKasusDiagnosaSkunder] = useState([]);
  const [valueInputDiagnosaSkunder, setInputDiagnosaSkunder] = useState('');
  const [textareaDiagnosaSkunderValue, setTextareaDiagnosaSkunderValue] = useState('');

  const optionJenisKasus = [
    { value: 'Kasus Baru', label: 'Kasus Baru' },
    { value: 'Kasus Lama', label: 'Kasus Lama' },
  ];

  const handleInputChange = (inputValue, setOption, setInput, setTextarea) => {

    setInput(inputValue);
    if (inputValue.trim() !== '') {
      fetch(`https://jsonplaceholder.typicode.com/users?name_like=${inputValue}`)
        .then(response => response.json())
        .then(data => {
          const formattedOptions = data.map(user => ({
            value: user.id,
            label: user.name,
          }));
          setOption(formattedOptions);
        })
        .catch(error => console.error('Error fetching data:', error));
    } else {
      setOption([]);
    }
  };

  const handleChange = (value, setOption, setTextarea) => {
    setOption(value);
    setTextarea(value ? value.label : '');
    setOption([]);
  };

  const saveDiagnosa = (e) => {

    e.preventDefault()
    let storeData = {
      diagnosa_umum: textareaDiagnosaValue,
      jenis_kasus_diagnosa_umum: valKasusDiagnosaUmum ? valKasusDiagnosaUmum.value : '',
      diagnosa_skunder: textareaDiagnosaSkunderValue,
      jenis_kasus_diagnosa_skunder: valKasusDiagnosaSkunder ? valKasusDiagnosaSkunder.value : ''
    }

    const newDiagnosa = [
      ...diagnosa, storeData
    ]

    DataDiagnosa(newDiagnosa);
    setOptionDiagnosaSkunder('')
    setJenisKasusDiagnosaSkunder('')
    setJenisKasusDiagnosaUmum('')
    setOptionDiagnosaUmum('')
    setTextareaDiagnosaSkunderValue('')
    setTextareaDiagnosaValue('')

  }

  const handleDeleteItem = (index) => {
    const isConfirmed = window.confirm("Apakah Anda yakin ingin menghapus item ini?");
    if (isConfirmed) {
      const updateDiagnosa = [...diagnosa];
      updateDiagnosa.splice(index, 1);
      DataDiagnosa(updateDiagnosa);
    }
  }

  return (
    <div className='mt-[-0.6%] border-t-1 border-sky-900 mb-[8%]'>
      <form onSubmit={saveDiagnosa}>
        <div className='ml-4 mr-4 mt-3 mb-2 flex'>
          <div className='w-[48%] mr-[3%]'>
            <div className='mt-3'>
              <label htmlFor="diagnosa_utama" className="block text-sm text-center font-medium leading-6 text-gray-900">DIAGNOSIS UTAMA</label>
              <div
                className="mt-1 block w-full rounded-md border-0 p-2 mr-[50%] text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 border border-black"
              >
                <Select
                  className='block w-full'
                  value={valueDiagnosaUmum}
                  onChange={(value) => handleChange(value, setDiagnosaUmum, setTextareaDiagnosaValue)}
                  onInputChange={(input) => handleInputChange(input, setOptionDiagnosaUmum, setInputDiagnosaUmum, setTextareaDiagnosaValue)}
                  options={Array.isArray(diagnosaUmum) ? diagnosaUmum : []}
                  instanceId="select-box"
                  isSearchable
                  placeholder="Masukkan Kode ICD-X"
                  noOptionsMessage={() => "Masukkan Kode ICD-X Terlebih Dahulu"}
                />
                <textarea
                  value={textareaDiagnosaValue}
                  onChange={(e) => setTextareaDiagnosaValue(e.target.value)}
                  className='border w-full h-32 rounded-md border-0 py-1.5 pl-2 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 mt-1 mb-[-1.5%]'
                  placeholder='Input Diagnosa Umum Tanpa Menggunakan ICD-X'
                />

                <label htmlFor="diagnosa_utama" className="block text-sm mt-2 font-medium leading-6 text-gray-900">JENIS KASUS</label>
                <Select
                  className='block w-full'
                  value={valKasusDiagnosaUmum}
                  onChange={(value) => setJenisKasusDiagnosaUmum(value)}
                  options={optionJenisKasus}
                  instanceId="select-box"
                  placeholder="Pilih Jenis Kasus"
                  noOptionsMessage={() => "Masukkan Kode ICD-X Terlebih Dahulu"}
                />
              </div>
            </div>
          </div>

          <div className='w-[49%]'>
            <div className='mt-3'>
              <label htmlFor="diagnosa_skunder" className="block text-sm text-center font-medium leading-6 text-gray-900">DIAGNOSIS SKUNDER</label>
              <div
                className="mt-1 block w-full rounded-md border-0 p-2 mr-[50%] text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 border border-black"
              >
                <Select
                  className='block w-full'
                  value={valueDiagnosaSkunder}
                  onChange={(value) => handleChange(value, setDiagnosaSkunder, setTextareaDiagnosaSkunderValue)}
                  onInputChange={(input) => handleInputChange(input, setOptionDiagnosaSkunder, setInputDiagnosaSkunder, setTextareaDiagnosaSkunderValue)}
                  options={Array.isArray(diagnosaSkunder) ? diagnosaSkunder : []}
                  isSearchable
                  instanceId="select-box3"
                  placeholder="Masukkan Kode ICD-X"
                  noOptionsMessage={() => "Masukkan Kode ICD-X Terlebih Dahulu"}
                />
                <textarea
                  value={textareaDiagnosaSkunderValue}
                  onChange={(e) => setTextareaDiagnosaSkunderValue(e.target.value)}
                  className='border w-full h-32 rounded-md border-0 py-1.5 pl-2 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 mt-1 mb-[-1.5%]'
                  placeholder='Input Diagnosa Umum Tanpa Menggunakan ICD-X'
                />

                <label htmlFor="diagnosa_utama" className="block text-sm mt-2 font-medium leading-6 text-gray-900">JENIS KASUS</label>
                <Select
                  className='block w-full'
                  value={valKasusDiagnosaSkunder}
                  onChange={(value) => setJenisKasusDiagnosaSkunder(value)}
                  options={optionJenisKasus}
                  placeholder="Pilih Jenis Kasus"
                  instanceId="select-box"
                  noOptionsMessage={() => "Masukkan Kode ICD-X Terlebih Dahulu"}
                />
              </div>
            </div>
          </div>

        </div>

        <div className="ml-4 mt-3 mr-4 flex justify-end">
          <button
            onClick={saveDiagnosa}
            type="button"
            className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded">
            <FontAwesomeIcon icon={faPlus} className='mr-1'/>Tambahkan
          </button>
        </div>
      </form>

      <div className="ml-4 mr-4 mt-9">
        <h4 className="text-2xl font-bold mb-4 text-gray-800">Preview Diagnosa</h4>

        <table className="min-w-full bg-white shadow-lg rounded-lg overflow-hidden">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="py-1 px-9 text-center border-r-2 border-white" colSpan={2}>Diagnosa Utama</th>
              <th className="py-1 px-9 text-center border-r-2 border-white" colSpan={2}>Diagnosa Skunder</th>
              <th className="py-1 px-2 text-center" rowSpan={2}>Action</th>
            </tr>
            <tr>
              <th className="py-1 px-10 text-center border-r-2 border-t-2 border-white">Diagnosa</th>
              <th className="py-1 text-center border-r-2 border-t-2 border-white">Jenis Kasus</th>
              <th className="py-1 px-10 text-center border-r-2 border-t-2 border-white">Diagnosa</th>
              <th className="py-1 text-center border-r-2 border-t-2 border-white">Jenis Kasus</th>
            </tr>
          </thead>
          <tbody id="diagnosaTableBody">
            {diagnosa.length > 0 ? (
              diagnosa.map((item, index) => (
                <tr key={index}>
                  <td className='p-2 border-r-2 border-gray-800'>{item.diagnosa_umum}</td>
                  <td className='p-2 border-r-2 border-gray-800'>{item.jenis_kasus_diagnosa_umum}</td>
                  <td className='p-2 border-r-2 border-gray-800'>{item.diagnosa_skunder}</td>
                  <td className='p-2 border-r-2 border-gray-800'>{item.jenis_kasus_diagnosa_skunder}</td>
                  <td className='p-2 flex items-center justify-center'>
                    <button
                      className="bg-red-500 text-white py-1 px-2 h-10 w-10 rounded-full flex items-center justify-center hover:bg-red-700 transition duration-300 ease-in-out"
                      onClick={() => handleDeleteItem(index)} // Panggil fungsi dengan indeks sebagai parameter
                    >
                      <FontAwesomeIcon icon={faTrashCan} />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="py-3 px-3 border max-w-xs overflow-x-auto text-center">
                  Anda Belum Membuat Diagnosa Pasien. <br></br> Silahkan lakukan diagnosa pasien terlebih dahulu
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
