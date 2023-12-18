'use state'
import React, { useState } from 'react'
import Select from 'react-select';

export default function SelectMedis() {
    const [daftarMedis, setDaftarMedis] = useState([])
    const [valParamedis, setValParamedis] = useState([])
    const [options, setOptions] = useState([])

    const handleInputChange = (inputValue) => {
        if (inputValue.trim() !== '') {
            fetch(`https://jsonplaceholder.typicode.com/users?name_like=${inputValue}`)
                .then(response => response.json())
                .then(data => {
                    const formattedOptions = data.map(user => ({
                        value: user.id,
                        label: user.name,
                    }));
                    setOptions(formattedOptions);
                })
                .catch(error => console.error('Error fetching data:', error));
        } else {
            setOptions([]);
        }
    };

    const addMedis = (element) => {
        let medis =
        {
            nama: element.label,
            id: element.value
        }
        const newMedis = [...daftarMedis, medis]
        setValParamedis('')
        setDaftarMedis(newMedis);
        setOptions([]); // Mereset options menjadi array kosong
    };

    const removeMedis = (id) => {
        // Tambahkan logika untuk menghapus medis dari daftarMedis
        const updatedDaftarMedis = daftarMedis.filter(medis => medis.id !== id);
        setDaftarMedis(updatedDaftarMedis);
    };

    return (
        <div>
            <Select
                className='block w-full'
                onInputChange={(input) => handleInputChange(input)}
                options={Array.isArray(options) ? options : []}
                instanceId="select-box"
                isSearchable
                value={valParamedis}
                placeholder="Cari Paramedis"
                onChange={(selectedOption) => {
                    addMedis(selectedOption, setValParamedis);
                    // Handle selected option, e.g., set state or perform other actions
                }}
                noOptionsMessage={() => "Input tindakan yang dilakukan"}
            />

            <table className='mt-3'>
                <tbody>
                    {daftarMedis.map((medis, index) => (
                        <tr key={index} className='border-b-2'>
                            <td className=" w-[8%] py-2">{index + 1}.</td>
                            <td className=" w-[80%] py-2">{medis.nama}</td>
                            <td className=" w-[12%] py-2">
                                <button onClick={() => removeMedis(medis.id)} className="bg-red-500 text-white px-2 py-1 rounded">Hapus</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
