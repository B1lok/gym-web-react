import React from 'react';

const TextInput = ({onChange, id, error, htmlFor, placeholder, children}) => {
    return (
        <>
            <input className="form-control" id={id} placeholder={placeholder} onChange={e => onChange(e.target.value)} type="text" required/>
            <label htmlFor={htmlFor}>{children}</label>
            {error && <span className="text-danger">{error}</span>}
        </>
    );
};

export default TextInput;