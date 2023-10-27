import React from 'react';

const EmailInput = ({onChange, error, value}) => {
    return (
        <>
            <input className="form-control" value={value} onChange={e => onChange(e.target.value)} id="email"
                   placeholder="name@example.com" type="email"/>
            <label htmlFor="email">Email</label>
            {error && <span className="text-danger">{error}</span>}
        </>
    );
};

export default EmailInput;