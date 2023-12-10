// Contoh penggunaan di dalam komponen Page.js
"use client"
import React from 'react';
import { UseDataContext } from '../DataContext';

const Page = () => {
  // Menggunakan UseDataContext untuk mengakses data dari konteks
  const { resep, assesmentDokter } = UseDataContext();

  // Tampilkan data resep dan assessmentDokter
  return (
    <div>
      <h2>Data Resep</h2>
      <ul>
        {resep.map((item, index) => (
          <li key={index}>
            <p>Nama Obat: {item.nama_obat}</p>
            <p>Aturan Minum: {item.aturan_minum}</p>
            <p>Jumlah: {item.jumlah}</p>
            <p>Instruksi Apt: {item.instruksi_apt}</p>
          </li>
        ))}
      </ul>

      <h2>Data Assessment Dokter</h2>
      <ul>
        <li>
          Anamnesa :
          {assesmentDokter.anamnesa}
        </li>
        <li>
          Kesadaran :
          {assesmentDokter.kesadaran}
        </li>
        <li>
          tinggi badan :
          {assesmentDokter.tinggi_badan}
        </li>
        <li>
          Nadi :
          {assesmentDokter.nadi}
        </li>
        <li>
          Suhu Tubuh :
          {assesmentDokter.suhu_tubuh}
        </li>
      </ul>
    </div>
  );
};

export default Page;
