"use client"
import React, { useState, useEffect } from 'react'
import { UseDataContext } from '../DataContext';

export default function Page() {
    const { resep, assesmentDokter, diagnosa, perencanaan } = UseDataContext();
    const [mainDiagnosa, setDiagnosaUtama] = useState([]);
    const [skunderDiagnosa, setDiagnosaSkunder] = useState([]);
    const [valAreaObjective, setAreaObjective] = useState('');
    const [valAreaSubjective, setAreaSubjective] = useState('');
    const [valAreaAsessment, setAreaAsessment] = useState('');

    const [valResep, setResep] = useState();
    const [valPlanning, setPlanning] = useState();
    const [valPlanningResep, setPlanningResep] = useState();
    const [valPlanningKunjungan, setPlanningKunjungan] = useState();

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
        let newPlaning = '';
        
        const stringifyResep = (resepArray) => {
            return resepArray.map((item, index)=>{
                return `${index + 1}. ${item.nama_obat} ${item.aturan_minum}`
            }).join('\n')
        }

        if(resep.length > 0){
            const newresep = stringifyResep(resep);
            setResep(newresep);
        }


        if(valResep) {
            let templatenewResep = ''
            let formatresep = `Pemberian Obat : \n${valResep} \n\n`
            
            if(valPlanningKunjungan){
                templatenewResep = formatresep+valPlanningKunjungan
                setPlanningResep(formatresep);
            }else{
                templatenewResep = formatresep
                setPlanningResep(formatresep);
            }
            setPlanning(formatresep);
        }

        if(perencanaan.is_kunjungan_ulang == true){
            const jadwal_kunjungan_ulang = `Dijadwalkan Kunjungan Ulang pada : \n${perencanaan.hari_kunjungan_ulang} ${perencanaan.tanggal_Kunjungan_ulang}`
           
            if(valPlanningResep){
                newPlaning = valPlanningResep+jadwal_kunjungan_ulang
                setPlanningKunjungan(jadwal_kunjungan_ulang)
            }else{
                newPlaning = jadwal_kunjungan_ulang
                setPlanningKunjungan(newPlaning)
            }

            setPlanning(newPlaning);
        }

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
                result += `Kesadaran Umum       : ${assesmentDokter.kesadaran_umum}\n`;
            }
            if (assesmentDokter.nadi) {
                result += `Jumlah Nadi               : ${assesmentDokter.nadi}\n`;
            }
            if (assesmentDokter.tekanan_darah_atas && assesmentDokter.tekanan_darah_bawah) {
                result += `Tekanan Darah          : ${assesmentDokter.tekanan_darah_atas}/${assesmentDokter.tekanan_darah_bawah}\n`;
            }
            if (assesmentDokter.suhu_tubuh) {
                result += `Suhu Tubuh               : ${assesmentDokter.suhu_tubuh}\n`;
            }
            return result;
        };

        setAreaObjective(formattedObjective());
        setAreaSubjective(assesmentDokter.anamnesa)
        let utamaSkunder = valAreaUtama + valAreaSkunder
        setAreaAsessment(utamaSkunder)

    }, [
        mainDiagnosa, 
        skunderDiagnosa, 
        assesmentDokter, 
        valAreaUtama, 
        valAreaSkunder, 
        resep,
        valResep,
        perencanaan,
        valPlanning,
        valPlanningResep,
        valPlanningKunjungan
    ])

    const changeSubjective = (event) => {
        const newValue = event.target.value;
        setAreaSubjective(newValue);
        // DataAssesmentDokter((prevData) => ({
        //     ...prevData,
        //     tinggi_badan: newValue,
        // }));
    };
    const changeObjective = (event) => {
        const newValue = event.target.value;
        setAreaObjective(newValue);
        // DataAssesmentDokter((prevData) => ({
        //     ...prevData,
        //     tinggi_badan: newValue,
        // }));
    };
    const changeAsessment = (event) => {
        const newValue = event.target.value;
        setAreaAsessment(newValue);
        // DataAssesmentDokter((prevData) => ({
        //     ...prevData,
        //     tinggi_badan: newValue,
        // }));
    };

    const changePlanning = (event) => {
        const newValue = event.target.value;
        setPlanning(newValue);
    }

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
                                value={valAreaSubjective}
                                onChange={
                                    changeSubjective
                                }
                            >
                                
                            </textarea>
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
                                onChange={
                                    changeObjective
                                }
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
                                value={valAreaAsessment}
                                // defaultValue={valAreaUtama + valAreaSkunder}
                                onChange={
                                    changeAsessment
                                }
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
                                value={
                                    valPlanning
                                }
                                onChange={
                                    changePlanning
                                }
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
