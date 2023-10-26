import React from 'react';

const SelectAllButton = ({checked, onChange}) => {
    return (
        <th><input aria-label="Check all" onChange={onChange} className="btn me-2" id="checkAll" checked={checked} type="checkbox"/>All</th>
    );
};

export default SelectAllButton;