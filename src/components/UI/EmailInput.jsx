import React from 'react';

const EmailInput = ({error, onChange}) => {
    return (
        <>
            <input className="form-control" onChange={e => onChange(e.target.value)} id="email" placeholder="name@example.com" type="email"/>
            <label htmlFor="email">Email</label>
            {error && <span className="text-danger" id="emailError">{error}</span>}
        </>
    );
};

export default EmailInput;