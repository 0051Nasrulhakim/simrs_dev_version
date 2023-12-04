import React from 'react'

export default function page() {
    return (
        <div className='my-3'>
            <div className='ml-[1.5%] mr-[1.5%]'>
                <label htmlFor="" className="block text-sm font-medium leading-6 text-gray-900 text-center">ANAMNESA DOKTER</label>
                <textarea
                    className='border w-full h-32 rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300'
                    id=""
                ></textarea>
            </div>

            <div className="flex">
                <div className='w-[46.5%] ml-[1.5%] mr-[3%]'>

                    <div className='mt-4'>
                        <label htmlFor="" className="block text-sm font-medium leading-6 text-gray-900">Tinggi Badan</label>
                        <div className="relative mt-1 rounded-md shadow-sm">
                            <div className="absolute inset-y-0 right-0 flex items-center">
                                <label htmlFor="" className="sr-only">Tinggi Badan</label>
                                <select id="" className="h-full rounded-br-md rounded-tr-md border-0 bg-transparent py-0 pl-3 pr-2 text-white bg-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                                    disabled={true}
                                    style={{
                                        appearance: 'none',
                                        MozAppearance: 'none',
                                        WebkitAppearance: 'none',
                                        textIndent: '1px',
                                        textOverflow: '',
                                        paddingRight: '1rem',
                                        border: '1px solid #ccc',
                                    }}
                                >
                                    <option value="CM">CM</option>
                                </select>
                            </div>

                            <input type="number" name="tinggiBadan" id="tinggi_badan" className="block w-full rounded-md border-0 py-1.5 pl-2 pr-14 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 read-only:bg-gray-100" placeholder="Masukkan Tinggi Badan"
                            />
                        </div>
                    </div>

                    <div className='mt-3'>
                        <label htmlFor="" className="block text-sm font-medium leading-6 text-gray-900">Nadi</label>
                        <div className="relative mt-1 rounded-md shadow-sm">
                            <div className="absolute inset-y-0 right-0 flex items-center">
                                <label htmlFor="" className="sr-only">Nadi</label>
                                <select id="" className="h-full rounded-br-md rounded-tr-md border-0 bg-transparent py-0 pl-3 pr-2 text-white bg-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                                    disabled={true}
                                    style={{
                                        appearance: 'none',
                                        MozAppearance: 'none',
                                        WebkitAppearance: 'none',
                                        textIndent: '1px',
                                        textOverflow: '',
                                        paddingRight: '1rem',
                                        border: '1px solid #ccc',
                                    }}
                                >
                                    <option value="">BPM</option>
                                </select>
                            </div>

                            <input type="number" name="nadi" id="nadi" className="block w-full rounded-md border-0 py-1.5 pl-2 pr-16 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 read-only:bg-gray-100" placeholder="Jumlah Nadi per Menit"
                            />
                        </div>
                    </div>

                    <div className='mt-3'>
                        <label htmlFor="" className="block text-sm font-medium leading-6 text-gray-900">Suhu Tubuh</label>
                        <div className="relative mt-1 rounded-md shadow-sm">
                            <div className="absolute inset-y-0 right-0 flex items-center">
                                <label htmlFor="" className="sr-only">Suhu Tubuh</label>
                                <select id="" className="h-full rounded-br-md rounded-tr-md border-0 bg-transparent py-0 pl-3 pr-2 text-white bg-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                                    disabled={true}
                                    style={{
                                        appearance: 'none',
                                        MozAppearance: 'none',
                                        WebkitAppearance: 'none',
                                        textIndent: '1px',
                                        textOverflow: '',
                                        paddingRight: '1rem',
                                        border: '1px solid #ccc',
                                    }}
                                >
                                    <option value="">°C</option>
                                </select>
                            </div>

                            <input type="number" name="suhuTubuh" id="suhu_tubuh" className="block w-full rounded-md border-0 py-1.5 pl-2 pr-12 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 read-only:bg-gray-100" placeholder="Masukkan Suhu Tubuh Pasien"
                            />
                        </div>
                    </div>
                </div>

                <div className='w-[46.5%]'>
                    <div className='mt-4'>
                        <label htmlFor="" className="block text-sm font-medium leading-6 text-gray-900">Berat Badan</label>
                        <div className="relative mt-1 rounded-md shadow-sm">
                            <div className="absolute inset-y-0 right-0 flex items-center">
                                <label htmlFor="" className="sr-only">Berat Badan</label>
                                <select id="" className="h-full rounded-br-md rounded-tr-md border-0 bg-transparent py-0 pl-3 pr-2 text-white bg-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                                    disabled={true}
                                    style={{
                                        appearance: 'none',
                                        MozAppearance: 'none',
                                        WebkitAppearance: 'none',
                                        textIndent: '1px',
                                        textOverflow: '',
                                        paddingRight: '1rem',
                                        border: '1px solid #ccc',
                                    }}
                                >
                                    <option value="">Kg</option>
                                </select>
                            </div>

                            <input type="number" name="beratBadan" id="berat_badan" className="block w-full rounded-md border-0 py-1.5 pl-2 pr-12 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 read-only:bg-gray-100" placeholder="Masukkan Suhu Tubuh Pasien"
                            />
                        </div>
                    </div>

                    <div className='mt-3'>
                        <label htmlFor="" className="block text-sm font-medium leading-6 text-gray-900">Tekanan Darah</label>
                        <div className='flex'>
                            <div className="relative mt-1 w-[50%] rounded-md shadow-sm">
                                <div className="absolute inset-y-0 right-0 flex items-center">
                                    <select id="" className="h-full border-0 bg-transparent py-0 pl-3 pr-2 text-white bg-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm "
                                        disabled={true}
                                        style={{
                                            appearance: 'none',
                                            MozAppearance: 'none',
                                            WebkitAppearance: 'none',
                                            textIndent: '1px',
                                            textOverflow: '',
                                            paddingRight: '1rem',
                                            border: '1px solid #ccc',
                                        }}
                                    >
                                        <option value="">/</option>
                                    </select>
                                </div>

                                <input type="number" name="tekananDarahAtas" id="tekanan_darah_atas" className="block w-full rounded-tl-md rounded-bl-md border-0 py-1.5 pl-2 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 read-only:bg-gray-100" placeholder="00.00"
                                />
                            </div>
                            <div className="relative mt-1 w-[50%] rounded-md shadow-sm">
                                <div className="absolute inset-y-0 right-0 flex items-center">
                                    <select id="" className="h-full rounded-br-md rounded-tr-md border-0 bg-transparent py-0 pl-3 pr-2 text-white bg-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                                        disabled={true}
                                        style={{
                                            appearance: 'none',
                                            MozAppearance: 'none',
                                            WebkitAppearance: 'none',
                                            textIndent: '1px',
                                            textOverflow: '',
                                            paddingRight: '1rem',
                                            border: '1px solid #ccc',
                                        }}
                                    >
                                        <option value="">/</option>
                                    </select>
                                </div>
                                <input type="number" name="tekananDarahBawah" id="tekanan_darah_bawah" className="block w-full border-0 py-1.5 pl-2 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 read-only:bg-gray-100 rounded-tr-md rounded-br-md" placeholder="00.00"
                                />
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}
