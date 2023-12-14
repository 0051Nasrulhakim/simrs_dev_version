"use client"
import React, { useState, useEffect } from 'react'
import { UseDataContext } from '../DataContext';

export default function page() {
    const { resep, assesmentDokter, diagnosa } = UseDataContext();
    const [mainDiagnosa, setDiagnosaUtama] = useState([]);
    const [skunderDiagnosa, setDiagnosaSkunder] = useState([]);
    const [valAreaObjective, setAreaObjective] = useState('');

    const [valAreaUtama, setAreaUtama] = useState('');
    const [valAreaSkunder, setAreaSkunder] = useState('');

    useEffect(() => {
        const mapDiagnosa = (data) => {
            if (Array.isArray(data)) {
                let mainResult = [];
                let skunderResult = [];

                data.forEach((item) => {
                    const diagnosaUmum = item.diagnosa_umum;

                    if (diagnosaUmum != '') {
                        mainResult.push({
                            diagnosa_umum: diagnosaUmum
                        });
                    }
                    const diagnosaSkunder = item.diagnosa_skunder || []; // Pastikan diagnosa_skunder selalu berupa array
                    skunderResult.push({
                        diagnosa_skunder: diagnosaSkunder
                    });
                });

                return { mainResult, skunderResult };
            } else {
                return { mainResult: [], skunderResult: [] };
            }
        };

        const { mainResult, skunderResult } = mapDiagnosa(diagnosa);
        setDiagnosaUtama(mainResult);
        setDiagnosaSkunder(skunderResult);

    }, [diagnosa]);

    useEffect(() => {
        // untuk membuat string pada text area asessment yang valuenya di ambil dari array diagnosa
        const stringifyDiagnosa = (diagnosaArray) => {
            return diagnosaArray.map((item) => {
                if (item.diagnosa_umum) {
                    return `- ${item.diagnosa_umum}`;
                } else if (item.diagnosa_skunder) {
                    if(item.diagnosa_skunder != ''){
                        return `- ${item.diagnosa_skunder}`;
                    }
                } else {
                    return ''; 
                }
            }).join(' \n');
        };

        if (mainDiagnosa.length > 0) {
            const diagnosaUtama = stringifyDiagnosa(mainDiagnosa);
            setAreaUtama(diagnosaUtama + '\n \n');
            const diagnosaSkunder = stringifyDiagnosa(skunderDiagnosa);
            if(diagnosaSkunder != ''){
                setAreaSkunder('Diagnosa Skunder / penyerta : \n' + diagnosaSkunder);
            }
        }

        // untuk mengisi text area objective
        const formattedObjective = () => {
            let result = '';
            if (assesmentDokter.kesadaran_umum) {
                result += `Kesadaran Umum: ${assesmentDokter.kesadaran_umum}\n`;
            }
            if (assesmentDokter.nadi) {
                result += `Jumlah Nadi: ${assesmentDokter.nadi}\n`;
            }
            if (assesmentDokter.tekanan_darah_atas && assesmentDokter.tekanan_darah_bawah) {
                result += `Tekanan Darah: ${assesmentDokter.tekanan_darah_atas}/${assesmentDokter.tekanan_darah_bawah}\n`;
            }
            if (assesmentDokter.suhu_tubuh) {
                result += `Suhu Tubuh: ${assesmentDokter.suhu_tubuh}\n`;
            }
            return result;
        };
        setAreaObjective(formattedObjective());

    }, [mainDiagnosa, skunderDiagnosa, assesmentDokter])

    

    return (
        <div className='border mt-[-0.6%] border-t-1 border-sky-900'>
            <div className='ml-4 mr-4 mt-3 mb-2'>
                <div className='flex mt-[2.5%] mb-[2%]'>
                    <div className='w-[24%] ml-[0.4%] mr-[1%]'>
                        <div className='flex justify-between px-2'>
                            <div>
                                SUBJECTIVE
                            </div>
                            <div>
                                SUBJECTIVE
                            </div>
                        </div>
                        <div>
                            <textarea
                                className='border w-full h-32 rounded-md border-0 py-1.5 pl-2 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 mt-1 mb-[-1.5%] h-[280px]'
                                id='subjective'
                                value={assesmentDokter.anamnesa}
                            />
                        </div>
                    </div>
                    <div className='w-[24%] mr-[1%]'>
                        <div className='flex justify-between px-2'>
                            <div>
                                OBJECTIVE
                            </div>
                            <div>
                                OBJECTIVE
                            </div>
                        </div>
                        <div>
                            <textarea
                                className='border w-full h-32 rounded-md border-0 py-1.5 pl-2 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 mt-1 mb-[-1.5%] h-[280px]'
                                id='objective'
                                value={valAreaObjective}
                            >
                            </textarea>
                        </div>
                    </div>
                    <div className='w-[24%] mr-[1%]'>
                        <div className='flex justify-between px-2'>
                            <div className=''>
                                ASESSMENT
                            </div>
                            <div className=''>
                                ASESSMENT
                            </div>
                        </div>
                        <div>
                            <textarea
                                className='border w-full h-32 rounded-md border-0 py-1.5 pl-2 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 mt-1 mb-[-1.5%] h-[280px]'
                                id='asessment'
                                defaultValue={valAreaUtama + valAreaSkunder}
                            >
                            </textarea>
                        </div>
                    </div>
                    <div className='w-[24%]'>
                        <div className='flex justify-between px-2'>
                            <div>
                                PLANNING
                            </div>
                            <div>
                                PLANNING
                            </div>
                        </div>
                        <div>
                            <textarea
                                className='border w-full h-32 rounded-md border-0 py-1.5 pl-2 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 mt-1 mb-[-1.5%] h-[280px]'
                                id='planning'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
