import React from 'react';

const SubmitButton = ({value, onClick, error}) => {
    return (
        <>
            <button className="w-100 btn btn-outline-light btn-lg" id="sign-up" type="submit"
                onClick={e => {
                    e.preventDefault()
                    onClick()
                }}>{value}</button>
            {error && <span className="text-danger" id="submitError">{error}</span>}
        </>
    );
};

export default SubmitButton;