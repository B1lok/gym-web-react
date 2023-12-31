import React from 'react';

const DateInput = ({onChange, label, value, placeholder, max, error}) => {
    return (
        <>
            <input aria-label={label} className="form-control" onChange={e => onChange(e.target.value)}
                   placeholder={placeholder} max={max} value={value} required type="date"/>
            {error && <span className="text-danger">{error}</span>}
        </>
    );
};

export default DateInput;