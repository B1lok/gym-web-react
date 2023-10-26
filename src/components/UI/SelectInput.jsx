import React from 'react';

const SelectInput = ({onChange, options, label}) => {
    return (
        <>
            <select
                aria-label={label}
                className="form-select"
                id={label.toLowerCase()}
                name={label.toLowerCase()}
                required
                onChange={onChange}
            >
                <option value="">Select {label}</option>
                {options.map((option, index) => (
                    <option key={index} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
            <span className="text-danger" id="groupError"></span>
        </>
    );
};

export default SelectInput;