import React from 'react';

const RadioInput = ({options, onChange, name, errorId}) => {
    return (
        <>
            <div className="btn-group w-100" role="group">
                {options.map((option) => (
                    <React.Fragment key={option.value}>
                        <input
                            autoComplete="off"
                            className="btn-check"
                            id={option.id}
                            name={name}
                            required
                            type="radio"
                            value={option.value}
                            onChange={() => onChange(option.value)}
                        />
                        <label className="btn btn-outline-light" htmlFor={option.id}>
                            {option.label}
                        </label>
                    </React.Fragment>
                ))}
            </div>
        </>
    );
};

export default RadioInput;