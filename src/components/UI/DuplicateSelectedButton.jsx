import React from 'react';

const DuplicateSelectedButton = ({onClick, idArray, clearRows}) => {
    return (
        <div className="mx-2">
            <button className="btn btn-dark" id="duplicate" onClick={event => {
                event.preventDefault()
                onClick(idArray)
                clearRows()
            }}>Duplicate selected</button>
        </div>
    );
};

export default DuplicateSelectedButton;