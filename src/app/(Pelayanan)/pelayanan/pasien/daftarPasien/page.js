/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import React, { useEffect, useState } from 'react'
import DataTable from './component/dataTable'
import { callApi, findByRm, findByBpjs } from '../Api/callApiPasien'

export default function page() {

    const [searchval, setSeacrhVal] = useState('');
    const [typeSearcVal, setTypeSeacrh] = useState('noBpjs');
    const [dataPasien, setDataPasien] = useState([]);

    const tampilkan = () => {
        if (typeSearcVal === 'noRm') {
            const fetchDataRm = async (searchval) => {
                try {

                    const response = await findByRm(searchval);
                    
                    if (response.status_code === 200) {
                        const dataArray = Object.values(response.data);
                        if (dataArray.length > 0) {
                            setDataPasien(dataArray);
                        }
                        else {
                            setDataPasien(null)
                        }
                    } else {
                        setDataPasien(response)
                    }

                } catch (e) {
                    console.error('Error fetching data:', e);
                }
            }
            fetchDataRm(searchval);
        }

        if ( typeSearcVal === 'noBpjs'){

            const fetchDataRm = async (searchval) => {
                try {

                    const response = await findByBpjs(searchval);
                    console.log(response);
                    if (response.status_code === 200) {
                        const dataArray = Object.values(response.data);
                        if (dataArray.length > 0) {
                            setDataPasien(dataArray);
                        }
                        else {
                            setDataPasien(null)
                        }
                    } else {
                        setDataPasien(response)
                    }

                } catch (e) {
                    console.error('Error fetching data:', e);
                }
            }
            fetchDataRm(searchval);

        }

        if ( typeSearcVal === 'namaPasien'){
            alert('FITUR DALAM PENGEMBANGAN')
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (searchval === '') { // Tambahkan pengecekan searchval di sini

                    const response = await callApi();

                    if (response.status_code === 200) {
                        const dataArray = Object.values(response.data); // Mengubah objek menjadi array
                        setDataPasien(dataArray);
                    } else {
                        setDataPasien(response)
                    }
                }
            } catch (error) {
                setDataPasien(undefined)
            }
        };

        fetchData();
    }, [searchval]); // Tambahkan searchval ke dalam dependensi useEffect

    return (
        <div>
            <div className='text-center border p-2 mb-4 text-white font-bold bg-green-500'>
                DAFTAR DATA PASIEN
            </div>

            <div className='mb-5'>
                <div className='w-[35%] mb-1 ml-1'>
                    Cari Pasien Berdasarkan
                </div>
                <div className='flex'>
                    <div className='bg-[#365486] p-[0.6] rounded-md w-[10%] mr-[0.5%]'>
                        <select id="by" className="h-full w-full rounded-md border-0 bg-transparent py-1 pl-2 pr-3 sm:text-sm text-white"
                            onChange={
                                (event) => setTypeSeacrh(event.target.value)
                            }
                        >
                            <option value="noBpjs" className='text-black'>Nomor BPJS</option>
                            <option value="noRm" className='text-black'>Nomor RM</option>
                            <option value="namaPasien" className='text-black'>Nama Pasien</option>
                        </select>
                    </div>
                    <div className='w-[25%]'>
                        <input type="text"
                            value={searchval}
                            onChange={
                                (event) => setSeacrhVal(event.target.value)
                            }
                            name="Cari" id="Cari" className="block w-full rounded-md border-0 py-1.5 pl-2 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 read-only:bg-gray-100 h-[2.37rem]" placeholder="Cari Data Pasien" />
                    </div>
                    <div className='py-2 px-2 ml-2 rounded-md text-white bg-blue-500 '>
                        <button onClick={tampilkan}>
                            Tampilkan
                        </button>
                    </div>
                </div>
            </div>

            <div className='overflow-x-auto'>
                <div className='tablePasien' id='tablePasien'>
                    <DataTable data={dataPasien} />
                </div>
            </div>

            <div className='mt-6 mb-1 flex justify-center'>
                <div className='w-auto py-1 px-2 mr-[0.8%] text-center border border-slate-600 rounded-sm bg-slate-600 text-white'>PREV</div>
                <div className='w-[3.7%] py-1 ml-[0.1%] mr-[0.1%] text-center border border-slate-600 rounded-sm bg-slate-600 text-white'>1</div>
                <div className='w-[3.7%] py-1 ml-[0.1%] mr-[0.1%] text-center border bg-slate-300 rounded-sm text-black'>2</div>
                <div className='w-[3.7%] py-1 ml-[0.1%] mr-[0.1%] text-center border border-slate-600 rounded-sm bg-slate-600 text-white'>3</div>
                <div className='w-[3.7%] py-1 ml-[0.1%] mr-[0.1%] text-center border border-slate-600 rounded-sm bg-slate-600 text-white'>40</div>
                <div className='w-auto py-1 px-2 ml-[0.8%] text-center border border-slate-600 rounded-sm bg-slate-600 text-white'>NEXT</div>
            </div>
        </div>

    )
}
