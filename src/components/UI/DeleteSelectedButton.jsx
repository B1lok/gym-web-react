import React from 'react';

const DeleteSelectedButton = ({onClick, idArray, clearRows}) => {
    return (
        <div className="mx-2">
            <button className="btn btn-danger" id="delete" onClick={event =>{
                event.preventDefault()
                onClick(idArray)
                clearRows()
            }}>Delete selected</button>
        </div>
    );
};

export default DeleteSelectedButton;