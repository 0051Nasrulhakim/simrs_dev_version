// RadioGrup.js
import React, { useState, useEffect } from 'react';

const RadioGrup = ({ options, onChange, value }) => {
    const [selectedOption, setSelectedOption] = useState(value);

    const handleOptionChange = (event) => {
        const value = event.target.value;
        setSelectedOption(value);
        onChange(value);
    };

    useEffect(() => {
        setSelectedOption(value);
    }, [value]);

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
    );
};

export default RadioGrup;
