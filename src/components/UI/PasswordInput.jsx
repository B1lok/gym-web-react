import React from 'react';

const PasswordInput = ({onChange, value, error}) => {
    return (
        <>
            <input className="form-control" id="password" placeholder="Password" required
                   type="password" value={value} onChange={e => onChange(e.target.value)}/>
            <label htmlFor="password">Password</label>
            {error && <span className="text-danger">{error}</span>}
        </>
    );
};

export default PasswordInput;