import React from 'react';

const TextInput = ({onChange, id, htmlFor, value, placeholder, children, error}) => {
    return (
        <>
            <input className="form-control" id={id} value={value} placeholder={placeholder} onChange={e => onChange(e.target.value)} type="text" required/>
            <label htmlFor={htmlFor}>{children}</label>
            {error && <span className="text-danger">{error}</span>}
        </>
    );
};

export default TextInput;