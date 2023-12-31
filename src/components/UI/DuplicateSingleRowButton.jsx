import React from 'react';

const DuplicateSingleRowButton = ({onClick, id}) => {
    return (
        <button className="btn" onClick={event => {
            event.preventDefault()
            onClick(id)
        }}>
            <svg height="1em" style={{fill: "#005eff"}} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M288 448H64V224h64V160H64c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H288c35.3 0 64-28.7 64-64V384H288v64zm-64-96H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H224c-35.3 0-64 28.7-64 64V288c0 35.3 28.7 64 64 64z"/></svg>
        </button>
    );
};

export default DuplicateSingleRowButton;