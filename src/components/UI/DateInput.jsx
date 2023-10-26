import React from 'react';

const DateInput = ({label, placeholder, error, max, onChange}) => {
    return (
        <>
            <input aria-label={label} className="form-control" onChange={e => onChange(e.target.value)} placeholder={placeholder} max={max} required
                   type="date"/>
            {error && <span className="text-danger" id="dateError">{error}</span>}
        </>
    );
};

export default DateInput;