'use client'
import React, { useState, useEffect } from 'react';
import Select from 'react-select';

export default function DropDownRole({ onSelectRole  }) {
    const [options, setOptions] = useState([]);

    useEffect(() => {
        const fetchedOptions = [
            { value: 'admin', label: 'Admin' },
            { value: 'paramedis', label: 'Paramedis' },
            { value: 'dokter', label: 'Dokter' },
        ];

        setOptions(fetchedOptions);
    }, []);

    const handleChange = (selectedOption) => {
        console.log('Selected Option:', selectedOption);
        onSelectRole(selectedOption);
    };

    return (
       
            <Select
                className="w-[75%] "
                instanceId="select-box"
                placeholder="Login sebagai"
                options={options}
                onChange={handleChange}
            />
    );
}
