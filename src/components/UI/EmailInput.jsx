import React from 'react';

const EmailInput = ({onChange, error}) => {
    return (
        <>
            <input className="form-control" onChange={e => onChange(e.target.value)} id="email"
                   placeholder="name@example.com" type="email"/>
            <label htmlFor="email">Email</label>
            {error && <span className="text-danger">{error}</span>}
        </>
    );
};

export default EmailInput;