"use client"
import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import SelectMedis from './selectMedis'
import FontAwesomeIcon from '../../../../fontawesome';
import { UseDataContext } from '../DataContext';
import { faPlus, faTrashCan } from '@fortawesome/free-solid-svg-icons';

export default function Page() {

  const { tindakan, DataTindakan } = UseDataContext();
  const [daftarMedis, setDaftarMedis] = useState([])

  const [hargaTindakan, setHargaTindakan] = useState('');
  const [namaTindakan, setNamaTindakan] = useState('');

  const [resTindakan, setResTindakan] = useState(null);
  const [resDokter, setResDokter] = useState(null);

  const [tindakanOptions, setTindakanOptions] = useState([]);
  const [dokterOptions, setDokterOptions] = useState([]);

  const [dokter, setDokter] = useState('');
  const [kodeDokter, setKodeDokter] = useState('');

  const [totalBiaya, setTotalBiaya] = useState(0);

  const handleTambahkan = () => {
    // Buat objek baru untuk tindakan yang akan ditambahkan
    const dataTindakan = {
      nama_tindakan: namaTindakan,
      harga: hargaTindakan,
      dokter: dokter,
      kodeDokter: kodeDokter,
      paramedis: daftarMedis,
    };

    const newTindakan = [
      ...tindakan, dataTindakan
    ]

    DataTindakan(newTindakan);

    // Reset state setelah tambahkan
    setNamaTindakan('');
    setHargaTindakan('');
    setDokter('');
    setKodeDokter('');
    setDaftarMedis([]);
    setDokterOptions([]);
    setTindakanOptions([]);
    setResTindakan(null)
    setResDokter(null)
  };  

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
    console.log(resTindakan);
    
  };

  const handleDokter = (element) => {
    setDokter(element.label);
    setKodeDokter(element.value);
  };

  const DeleteItem = (index) => {
    const isConfirmed = window.confirm("Apakah Anda yakin ingin menghapus item ini?");
    if (isConfirmed) {
      const updateTindakan = [...tindakan];
      updateTindakan.splice(index, 1);
      DataTindakan(updateTindakan);
    }
  }

  useEffect(() => {
    const newTotalBiaya = tindakan.reduce((total, item) => {
      const harga = parseFloat(item.harga);
      return isNaN(harga) ? total : total + harga;
    }, 0);

    setTotalBiaya(newTotalBiaya);
  }, [tindakan])
  

  return (
    <div className='border mt-[-0.6%] border-t-1 border-sky-900 mb-4'>
      <div className='ml-4 mr-4 mt-3 mb-[8%]'>

        <div className='p-2 border mt-[3%] flex bg-gray-100 rounded-md'>
          <div className='border w-[72%] rounded-md p-3 bg-white'>
            <div className='flex'>
              <div className='border rounded-md p-2 w-[49%] mr-[3%] shadow-md'>
                <div className='w-full text-center'>
                  Tindakan
                </div>
                <div className=''>
                  <Select
                    className='block w-full'
                    onInputChange={(input) => handleInputChange(input)}
                    options={Array.isArray(tindakanOptions) ? tindakanOptions : []}
                    instanceId="select-box"
                    isSearchable
                    value={resTindakan}
                    placeholder="Cari tindakan"
                    onChange={
                      (value) => {
                        handleTindakan(value) 
                        setResTindakan(value)
                      } 
                      // Handle selected option, e.g., set state or perform other actions
                    }
                    noOptionsMessage={() => "Input tindakan yang dilakukan"}
                  />
                </div>
                <div className='mt-3'>
                  Dokter
                  <Select
                    className='block w-full'
                    value={resDokter}
                    onInputChange={(input) => handleInputDokter(input)}
                    options={Array.isArray(dokterOptions) ? dokterOptions : []}
                    instanceId="select-box"
                    isSearchable
                    placeholder="Cari dokter"
                    onChange={
                      (selectedOption) => {
                      handleDokter(selectedOption);
                      setResDokter(selectedOption)
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
              <div className='border rounded-md p-2 w-[48%]  shadow-md'>
                <div className='w-full text-center mb-3'>
                  Paramedis
                </div>
                <SelectMedis daftarMedis={daftarMedis} setDaftarMedis={setDaftarMedis} />
              </div>
            </div>

            <div className='text-right mt-2'>
              <button
                type="button"
                onClick={handleTambahkan}
                className="bg-blue-500  hover:bg-blue-700 text-white py-1 px-2 rounded ">
                <FontAwesomeIcon icon={faPlus} className='mr-1' />Tambahkan
              </button>
            </div>
          </div>
          <div className='h-36 ml-4 w-[26.4%] rounded-md p-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'>
            <div className='text-center font-bold text-2xl pb-1 border-b-2 border-white'>
              TOTAL BIAYA
            </div>
            <div className='font-bold text-lg mt-5 ml-3'>
              Rp. {totalBiaya.toLocaleString()}
            </div>
          </div>

        </div>

        <div className='mt-7 mb-5'>
          <div className='text-center font-bold text-xl mb-2 mt-2'>
            DAFTAR TINDAKAN
          </div>
          <div className="">
            <table className="min-w-full bg-white shadow-lg rounded-lg overflow-hidden">
              <thead className="bg-gray-800 text-white">
                <tr>
                  <th className="py-1 px-9 text-center border-r-2 border-white" colSpan={2}>Tindakan </th>
                  <th className="py-1 px-9 text-center border-r-2 border-white" rowSpan={2}>Paramedis</th>
                  <th className="py-1 px-9 text-center border-r-2 border-white" rowSpan={2}>harga</th>
                  <th className="py-1 px-2 text-center" rowSpan={2}>Action</th>
                </tr>
                <tr>
                  <th className="py-1 w-[30%] text-center border-r-2 border-t-2 border-white">Jenis Tindakan</th>
                  <th className="py-1 w-[30%] text-center border-r-2 border-t-2 border-white">Dokter</th>
                </tr>
              </thead>
              <tbody id="diagnosaTableBody">
                {tindakan.map((item, index) => (
                  <tr key={index}>
                    <td className='p-2 border-r-2 border-gray-800'>{item.nama_tindakan}</td>
                    <td className='p-2 border-r-2 border-gray-800'>{item.dokter}</td>
                    <td className='p-2 border-r-2 border-gray-800'>{item.paramedis.map(paramedis => paramedis.nama).join(', ')}</td>
                    <td className='p-2 border-r-2 border-gray-800'>{item.harga}</td>
                    <td className='p-2 flex items-center justify-center'>
                      <button
                        className="bg-red-500 text-white py-1 px-2 h-10 w-10 rounded-full flex items-center justify-center hover:bg-red-700 transition duration-300 ease-in-out"
                        onClick={() => DeleteItem(index)}
                      >
                        <FontAwesomeIcon icon={faTrashCan} />
                      </button>
                    </td>
                  </tr>
                ))}
                {tindakan.length === 0 && (
                  <tr>
                    <td colSpan="4" className="py-3 px-3 border max-w-xs overflow-x-auto text-center">
                      Anda Belum Menambahkan Tindakan. <br></br> Silahkan Tambahkan Tindakan dan Paramedis Pada form diatas
                    </td>
                  </tr>
                )}

              </tbody>
            </table>
          </div>
        </div>
      </div>

    </div>
  );
}

