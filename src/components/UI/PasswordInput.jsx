import React from 'react';

const PasswordInput = ({error, onChange}) => {
    return (
        <>
            <input className="form-control" id="password" placeholder="Password" required
                   type="password" onChange={e => onChange(e.target.value)}/>
            <label htmlFor="password">Password</label>
            {error && <span className="text-danger" id="passwordError">{error}</span>}
        </>
    );
};

export default PasswordInput;