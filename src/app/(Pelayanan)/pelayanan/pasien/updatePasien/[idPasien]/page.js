"use client"
import React, { useEffect, useState } from 'react'
import RadioGender from '../../componentForm/radioGender'
import ProvinsiSelect from '../../componentForm/provinsiSelect'
import KabupatenSelect from '../../componentForm/kabupatenSelect';
import KecamatanSelect from '../../componentForm/kecamatanSelect';
import TextAreaAlamat from '../../componentForm/textAreaAlamat';
import { useParams } from 'next/navigation'
import { findByRm } from '../../Api/callApiPasien'

export default function Page() {


    const params = useParams()

    const [alamat, setAlamat] = useState('')
    const [jenisKelamin, setJenisKelamin] = useState('')
    const [provinsi, setProvinsi] = useState('')
    const [kabupaten, setKabupaten] = useState('')
    const [kecamatan, setKecamatan] = useState('')
    const [namaPasien, setNamaPasien] = useState('')
    const [nomorBpjs, setNomorBpjs] = useState('')
    const [nomorRm, setNomorRm] = useState('')
    const [statusPernikahan, setStatusPernikahan] = useState('')

    const handleJenisKelaminChange = (value) => {
        setJenisKelamin(value);
    };

    const handleChange = (value) => {
        setProvinsi(value);
    };

    const handleKabupaten = (value) => {
        setKabupaten(value)
    }

    const handleKecamatan = (value) => {
        setKecamatan(value)
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await findByRm(params.idPasien);
                if (response.status_code === 200) {
                    const dataArray = response.data

                    if (dataArray.length > 0) {
                        const data = dataArray[0]
                        console.log(data)
                        setAlamat(data.alamat)
                        setJenisKelamin(data.jenis_kelamin)
                        setProvinsi(data.provinsi)
                        setKabupaten(data.kabupaten)
                        setKecamatan(data.kecamatam)
                        setNamaPasien(data.nama_pasien)
                        setNomorBpjs(data.nomor_bpjs)
                        setNomorRm(data.nomor_rm)
                        setStatusPernikahan(data.status_pernikahan)
                    }

                } else {
                    console.log(response)
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <div>
                <div className='text-center border p-2 mb-4 text-white font-bold bg-[#40679E]'>
                    FORM UPDATE PASIEN
                </div>

                <div className='flex px-3 border pb-6'>
                    <div className='w-[38%] mr-[4%]'>
                        <div className='mt-4 text-center'>
                            <RadioGender onChange={handleJenisKelaminChange} value= { jenisKelamin }/>
                        </div>

                        <div className='mt-4'>
                            <label htmlFor='NamaPasien' className="block text-sm font-medium leading-6 text-gray-900">Nama Pasien</label>
                            <div className="relative mt-1 rounded-md shadow-sm">
                                <input type="text"
                                    name="NamaPasien"
                                    id="NamaPasien"
                                    className="block w-full rounded-md border-0 py-1.5 pl-2 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 read-only:bg-gray-100 h-[2.37rem]" placeholder="Nama pasien"
                                    value={namaPasien}
                                />
                            </div>
                        </div>

                        <div className='mt-4'>
                            <label htmlFor='NoBpjs' className="block text-sm font-medium leading-6 text-gray-900">Nomor Bpjs</label>
                            <div className="relative mt-1 rounded-md shadow-sm">
                                <input type="text"
                                    name="NoBpjs"
                                    id="NoBpjs"
                                    className="block w-full rounded-md border-0 py-1.5 pl-2 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 read-only:bg-gray-100 h-[2.37rem]"
                                    placeholder="Nomor Bpjs"
                                    value={nomorBpjs}
                                />
                            </div>
                        </div>

                        <div className='mt-4'>
                            <label htmlFor='TanggalLahir' className="block text-sm font-medium leading-6 text-gray-900">Tanggal Lahir</label>
                            <div className="relative mt-1 rounded-md shadow-sm">
                                <input
                                    type="date"
                                    name="TanggalLahir"
                                    id="TanggalLahir"
                                    className="block w-full rounded-md border-0 py-1.5 pl-2 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 read-only:bg-gray-100 h-[2.37rem]"
                                    placeholder="dd/mm/yyyy"
                                    required
                                />
                            </div>
                        </div>

                    </div>
                    <div className='w-[58%] '>

                        <div className='flex'>
                            <ProvinsiSelect
                                value={provinsi}
                                onChange={handleChange}
                            // onInputChange={handleInputProvinsi}
                            // options={provinsiOptions}
                            />

                            <KabupatenSelect
                                value={kabupaten}
                                onChange={handleKabupaten}
                            // onInputChange={handleInputKabupaten}
                            // options={kabupatenOptions}
                            />

                            <KecamatanSelect
                                value={kecamatan}
                                onChange={handleKecamatan}
                            // onInputChange={handleInputKecamatan}
                            // options={kecamatanOptions}
                            />
                        </div>

                        <TextAreaAlamat value={alamat} onChange={setAlamat} />

                        <div className='mt-11 text-right'>
                            <button
                                type="button"
                                // onClick={onClick}
                                className="px-4 py-2 bg-blue-500 text-white rounded-md focus:outline-none focus:ring focus:border-blue-300 active:bg-blue-600"
                            >
                                SIMPAN DATA
                            </button>
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}
