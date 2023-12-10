"use client"
import React, { useState } from 'react'

const RadioGrup = ({ options, onChange }) => {
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (event) => {
        const value = event.target.value;
        setSelectedOption(value);
        onChange(value);
    };

    return (
        <div className="space-y-2">
            {options.map((option) => (
                <label key={option.value} className="inline-flex items-center">
                    <input
                        type="radio"
                        value={option.value}
                        checked={selectedOption === option.value}
                        onChange={handleOptionChange}
                    />
                    <span className="mr-5 ml-0.5">{option.label}</span>
                </label>
            ))}
        </div>
    )
}

export default RadioGrup