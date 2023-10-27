import React from 'react';

const SubmitButton = ({onClick, value, error}) => {
    return (
        <>
            <button className="w-100 btn btn-outline-light btn-lg" id="sign-up" type="submit"
                    onClick={e => {
                        e.preventDefault()
                        onClick()
                    }}>{value}</button>
            {error && <span className="text-danger">{error}</span>}
        </>
    );
};

export default SubmitButton;