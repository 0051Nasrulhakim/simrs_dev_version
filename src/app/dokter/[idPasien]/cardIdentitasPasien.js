import React from 'react'

export default function CardIdentitasPasien() {
    return (
        <div className="data_pasien mt-1 bg-slate-300 p-2 w-3/5">
            <div className="text-2xl font-bold">
                Nasrul Hakim
            </div>
            <div className="flex flex-row">
                <div className="w-28 text-sm"> No. RM </div>
                <div className="w-28 text-sm">: 0018817</div>
            </div>
            <div className="flex flex-row">
                <div className="w-28 text-sm"> No. BPJS</div>
                <div className="w-28 text-sm">: 0018817</div>
            </div>
            <div className="flex flex-row">
                <div className="w-28 text-sm"> Jenis Kelamin</div>
                <div className="w-28 text-sm">: 0018817</div>
            </div>
            <div className="flex flex-row">
                <div className="w-28 text-sm"> Alamat</div>
                <div className="w-60 text-sm">: Wonoyoso gg. 5 Buaran pekalongan jawa tengah jajaj</div>
            </div>
        </div>
    )
}
