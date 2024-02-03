'use client'
import React, { useState, useEffect } from 'react'
import FontAwesomeIcon from '../../../../fontawesome';
import { faCheck, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { UseDataContext } from '../DataContext';

export default function Page() {
  const getDayOfWeek = (dateString) => {
    const daysOfWeek = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
    const date = new Date(dateString);
    const dayOfWeek = date.getDay();
    return daysOfWeek[dayOfWeek];
  };

  const [kunjunganUlang, setKunjunganUlang] = useState(false);
  const [operasi, setOprasi] = useState(false);

  const [hariKunjunganUlang, setHariKunjunganUlang] = useState();
  const [tanggalKunjunganUlang, setTanggalKunjunganUlang] = useState();

  const [sectionKunjungan, setSectionKunjungan] = useState(false);
  const { perencanaan, DataPerencanaan } = UseDataContext();

  const checkKunjunganUlang = () => {
    setKunjunganUlang(!kunjunganUlang);
    setSectionKunjungan(!sectionKunjungan);

    if (kunjunganUlang == false) {
      setHariKunjunganUlang('')
      setTanggalKunjunganUlang('')

      DataPerencanaan((prevData) => ({
        ...prevData,
        is_kunjungan_ulang: false,
        tanggal_Kunjungan_ulang: '',
        hari_kunjungan_ulang: ''
      }));
    }

  };

  const checkOprasi = () => {
    setOprasi(!operasi);
  };
  const handleHariKunjunganUlang = (event) => {
    
    const tanggal_kunjungan_ulg = event.target.value
    setTanggalKunjunganUlang(tanggal_kunjungan_ulg);

    if(kunjunganUlang == true){
      const hari_kunjungan_ulg = getDayOfWeek(tanggal_kunjungan_ulg)
      setHariKunjunganUlang(hari_kunjungan_ulg);
      DataPerencanaan((prevData) => ({
        ...prevData,
        is_kunjungan_ulang: kunjunganUlang,
        tanggal_Kunjungan_ulang: tanggal_kunjungan_ulg,
        hari_kunjungan_ulang: hari_kunjungan_ulg
      }));
    }

  };

  useEffect(() => {
    if(perencanaan.is_kunjungan_ulang == true){
      setKunjunganUlang(true);
      setSectionKunjungan(true);
      setTanggalKunjunganUlang(perencanaan.tanggal_Kunjungan_ulang)
      setHariKunjunganUlang(perencanaan.hari_kunjungan_ulang)
    }
    
  }, [tanggalKunjunganUlang, perencanaan])

  return (
    <div className='border mt-[-0.6%] border-t-1 border-sky-900'>
      <div className='ml-4 mr-4 mt-3 mb-2'>
        Page Perencanaan
        <div className="flex items-center p-2">
          <input
            type="checkbox"
            id="kunjungan"
            checked={kunjunganUlang}
            onChange={checkKunjunganUlang}
            className="hidden"
          />

          <label htmlFor="kunjungan" className="cursor-pointer flex items-center">
            <div className={`w-6 h-6 border border-gray-300 rounded-md flex items-center justify-center mr-2 ${kunjunganUlang ? 'bg-green-500 border-green-500' : 'bg-white'}`}>
              {kunjunganUlang && (
                <FontAwesomeIcon icon={faCheck} className="text-white" />
              )}
            </div>
            <span>Jadwalkan Kunjungan Ulang</span>
          </label>

        </div>

        {sectionKunjungan && (
          <div className='w-[30%] pl-[3%]'>
            <label htmlFor='appointmentDate' className='block text-sm font-medium leading-6 text-gray-900'>Tanggal</label>
            <input
              type="date"
              value={tanggalKunjunganUlang}
              onChange={handleHariKunjunganUlang}
              id="appointmentDate"
              name="appointmentDate"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
            <label htmlFor='hariKunjungan' className='block text-sm font-medium leading-6 text-gray-900'>Hari</label>
            <input
              id='hariKunjungan'
              value={hariKunjunganUlang}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 read-only:bg-gray-100"
              readOnly={true}
              placeholder='Silahkan Pilih Tanggal'
            />
          </div>
        )}


        <div className="flex items-center p-2">
          <input
            type="checkbox"
            id="operasi"
            checked={operasi}
            onChange={checkOprasi}
            className="hidden"
          />

          <label htmlFor="operasi" className="cursor-pointer flex items-center">
            <div className={`w-6 h-6 border border-gray-300 rounded-md flex items-center justify-center mr-2 ${operasi ? 'bg-green-500 border-green-500' : 'bg-white'}`}>
              {operasi && (
                <FontAwesomeIcon icon={faCheck} className="text-white" />
              )}
            </div>
            <span>Jadwalkan Operasi</span>
          </label>
        </div>

      </div>
    </div>
  )
}
