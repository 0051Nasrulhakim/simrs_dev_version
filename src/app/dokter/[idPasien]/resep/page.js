"use client";
// import React from 'react'
import React, { useState } from 'react'
import { dropBerapaKali, dropWaktuMinum, dropKondisi, dropJenisObat } from './Handling'
import { UseDataContext } from '../DataContext';
import FontAwesomeIcon from '../../../fontawesome';
import { faPlus, faTrashCan } from '@fortawesome/free-solid-svg-icons';

export default function Page() {

  let [valueJenisObat, setJenisObat] = useState('');
  const [valueKomposisi, setKomposisi] = useState('');
  const [valueNamaObat, setNamaObat] = useState('');
  const [valueBerapaKali, setBerapaKali] = useState('');
  const [valueWaktuMinum, setWaktuMinum] = useState('');
  const [valueKondisi, setKondisi] = useState('');
  const [valueKeteranganTambahan, setKeteranganTambahan] = useState('');
  const [valueInstruksiApt, setInstruksiApt] = useState('');
  const [valueJumlah, setJumlah] = useState('');
  let aturanPakai = valueWaktuMinum
    ? `${valueBerapaKali} ( ${valueWaktuMinum} ) `
    : valueBerapaKali;

  if (valueKondisi) {
    aturanPakai += `- ${valueKondisi}`;
  }
  if (valueKeteranganTambahan) {
    // Append keterangan tambahan to the existing string
    aturanPakai += ` || ${valueKeteranganTambahan}`;
  }
  let namaObat = valueNamaObat
  if (namaObat == '') {
    namaObat = valueKomposisi
  }
  let instruksiApt = valueInstruksiApt
  if (instruksiApt == '') {
    instruksiApt = '-'
  }

  const { resep, DataResep } = UseDataContext();
  const inputResep = (e) => {

    if (!namaObat || !aturanPakai || !valueJumlah || !instruksiApt) {
      alert("Harap lengkapi semua kolom sebelum menambahkan resep.");
      return; // Menghentikan eksekusi jika validasi tidak terpenuhi
    }

    e.preventDefault();
    let dataEntry = {
      nama_obat: namaObat,
      aturan_minum: aturanPakai,
      jumlah: valueJumlah,
      instruksi_apt: instruksiApt
    }

    const newResep = [
      ...resep, dataEntry
    ];

    DataResep(newResep);
    setJenisObat('Obat Jadi')
    setJumlah('');
    setKomposisi('')
    setNamaObat('')
    setBerapaKali('');
    setWaktuMinum('');
    setKondisi('');
    setKeteranganTambahan('');
    setInstruksiApt('');
  };

  const handleDeleteItem = (index) => {
    const isConfirmed = window.confirm("Apakah Anda yakin ingin menghapus item ini?");

    if (isConfirmed) {
      // Buat salinan array resep dan hapus item berdasarkan indeks
      const updatedResep = [...resep];
      updatedResep.splice(index, 1);

      // Perbarui konteks dengan data yang baru
      DataResep(updatedResep);
    }
  }

  return (
    <div className='border mt-[-0.6%] border-t-1 border-sky-900 mb-[20%]'>
      <div className='flex justify-between ml-4 mr-4 mt-3 mb-5'>
        <div className='w-2/5 mr-5'>
          <form onSubmit={inputResep}>
            <div className='mt-4'>
              <label htmlFor="jenis_obat" className="block text-sm font-medium leading-6 text-gray-900">NAMA OBAT</label>
              <div className="relative mt-1 rounded-md shadow-sm">
                <div className="absolute inset-y-0 Left-0 flex items-center">
                  <label htmlFor="jenis_obat" className="sr-only">jenis obat</label>
                  <select id="jenis_obat" name="jenisobat" className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-2 text-gray-500 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                    // value={valueJenisObat}
                    onChange={
                      (event) => dropJenisObat(event, setJenisObat)
                    }
                  >
                    <option value="Obat Jadi">Obat Jadi</option>
                    <option value="Racikan">Racikan</option>
                  </select>
                </div>
                <input type="text" name="namaobat" id="nama_obat" className="block w-full rounded-md border-0 py-1.5 pl-28 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 read-only:bg-gray-100" placeholder="Masukkan Nama Obat" readOnly={false} value={valueNamaObat}
                  onChange={
                    (event) => setNamaObat(event.target.value)
                  }
                />
              </div>
            </div>

            <div className='mt-4' id="labelKomposisi" hidden={true}>
              <label htmlFor="komposisi" className="block text-sm font-medium leading-6 text-gray-900">KOMPOSISI OBAT</label>
              <textarea className='border w-full h-32 rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300'
                hidden={true}
                id="komposisi"
                value={valueKomposisi}
                onChange={
                  (event) => setKomposisi(event.target.value)
                }
              ></textarea>
            </div>

            <div className='mt-3'>
              <label htmlFor="jumlah" className="block text-sm font-medium leading-6 text-gray-900">JUMLAH</label>
              <div className="relative mt-1 rounded-md shadow-sm">
                <input type="number" name="jumlah" id="jumlah" className="block w-full rounded-md border-0 py-1.5 pl-2 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Masukkan Jumlah Obat"
                  value={valueJumlah}
                  onChange={
                    (event) => setJumlah(event.target.value)
                  }
                />
              </div>
            </div>

            <div className='mt-3'>
              <label htmlFor="aturan_minum" className="block text-sm font-medium leading-6 text-gray-900 text-center mb-1">ATURAN MINUM</label>
              <div className='flex justify-between'>
                <select className='border rounded-md border-0 ring-1 ring-inset ring-gray-300 w-34 py-1.5 focus:ring-indigo-600 pl-2'
                  value={valueBerapaKali}
                  id="aturan_minum"
                  onChange={
                    (event) => dropBerapaKali(event, setBerapaKali)
                  }
                >
                  <option value={''}>Berapa Kali</option>
                  <option>1/2 X 1</option>
                  <option>1 X 1</option>
                  <option>2 X 1</option>
                  <option>3 X 1</option>
                  <option>4 X 1</option>
                  <option>5 X 1</option>
                </select>
                <select className='border rounded-md border-0 ring-1 ring-inset ring-gray-300 w-48 py-1.5 focus:ring-indigo-600 pl-2'
                  id='waktu_minum'
                  value={valueWaktuMinum}
                  onChange={
                    (event) => dropWaktuMinum(event, setWaktuMinum)
                  }
                >
                  <option value="">Waktu Minum</option>
                  <option>Pagi, Siang, Malam</option>
                  <option>Pagi, Malam</option>
                  <option>Pagi</option>
                  <option>Malam</option>
                  <option>Siang</option>
                  <option>Bebas</option>
                </select>
                <select className='border rounded-md border-0 ring-1 ring-inset ring-gray-300 w-48 py-1.5 focus:ring-indigo-600 pl-2'
                  value={valueKondisi}
                  id="kondisi"
                  onChange={
                    (event) => dropKondisi(event, setKondisi)
                  }
                >
                  <option value="">Kondisi</option>
                  <option>Sesudah Makan</option>
                  <option>Sebelum Makan</option>
                  <option>Bebas</option>
                </select>
              </div>
            </div>
            <div className='mt-3'>
              <input type="text" name="keterangan_tambahan" id="keterangan_tambahan" className="block w-full rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Keterangan Tambahan"
                value={valueKeteranganTambahan}
                onChange={
                  (event) => setKeteranganTambahan(event.target.value)
                }
                readOnly={true}
              />
            </div>

            <div className='mt-3'>
              <label htmlFor="preview_AturanMinum" className="block text-sm font-medium leading-6 text-gray-900 mb-1">PREVIEW ATURAN MINUM</label>
              <input type="text"
                name="previewAturanMinum"
                id="preview_AturanMinum"
                className="read-only:bg-gray-100 block w-full rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                readOnly={true}
                value={aturanPakai}
                placeholder="Akan Terisi Otomatis" />
            </div>

            <div className='mt-3'>
              <label htmlFor="instruksi_tambah" className="block text-sm font-medium leading-6 text-gray-900 mb-1">INSTRUKSI TAMBAHAN UNTUK APOTEKER</label>
              <input type="text"
                name="instruksi_apt" id="instruksi_tambah"
                className="block w-full rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Tulis Instruksi Untuk Apoteker"
                value={valueInstruksiApt}
                onChange={
                  (event) => setInstruksiApt(event.target.value)
                }
              />
            </div>

            <div className='mt-3 text-right'>
              <button type='button'
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1.5 px-2.5 text-sm font-bold rounded-md"
                onClick={inputResep}
              >
                <FontAwesomeIcon icon={faPlus}/> Tambahkan
              </button>
            </div>
          </form>
        </div>

        <div className='border rounded-md w-[55%] mt-6 p-1'>
          <div className="overflow-x-auto max-w-full">
            <table className="min-w-full bg-white border border-gray-300 rounded-md overflow-hidden">
              <thead className="bg-indigo-600 text-white">
                <tr>
                  <th className="py-1 w-[25%] text-center">Nama Obat</th>
                  <th className="py-1 w-[5%] text-center">JML</th>
                  <th className="py-1 w-[25%] text-center">Aturan</th>
                  <th className="py-1 w-auto text-center">Instruksi APT.</th>
                  <th className="py-1 w-auto text-center">#</th>
                </tr>
              </thead>
              <tbody>

                {resep.length > 0 ? (
                  resep.map((item, index) => (
                    <tr className="bg-gray-100" key={index}>
                      <td className="py-3 px-3 border max-w-xs overflow-x-auto">{item.nama_obat}</td>
                      <td className="py-3 px-3 border max-w-xs overflow-x-auto">{item.jumlah}</td>
                      <td className="py-3 px-3 border max-w-xs overflow-x-auto">{item.aturan_minum}</td>
                      <td className="py-3 px-3 border max-w-xs overflow-x-auto">{item.instruksi_apt}</td>
                      <td className="py-3 px-3 border max-w-xs overflow-x-auto">
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
                      Anda Belum Membuat Resep. <br></br> Jika Pasien Tidak diberi obat silahkan lewati halaman ini
                    </td>
                  </tr>
                )}

              </tbody>
            </table>
          </div>


        </div>

      </div>
    </div>
  )
}
