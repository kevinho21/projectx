import React from 'react';

const Selection = ({ options, selectedOption, onSelectOption }) => {
    return (
        <select
            className="selection"
            value={selectedOption}
            onChange={(e) => onSelectOption(e.target.value)}
        >
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
};

export default Selection;