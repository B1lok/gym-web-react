import React from 'react';

const SelectInput = ({onChange, options, label, error}) => {
    return (
        <>
            <select
                aria-label={label}
                className="form-select"
                id={label.toLowerCase()}
                name={label.toLowerCase()}
                required={true}
                onChange={event => onChange(event.target.value)}
            >
                <option value="" >Select {label}</option>
                {options.map((option, index) => (
                    <option key={index} value={option.value}>{option.label}</option>
                ))}
            </select>
            {error && <span className="text-danger">{error}</span>}
        </>
    );
};

export default SelectInput;