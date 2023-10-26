import React from 'react';
import DeleteSingleRowButton from "./DeleteSingleRowButton";
import DuplicateSingleRowButton from "./DuplicateSingleRowButton";

const TableRow = ({user, selectedRows, handleCheckboxChange, singleDelete, singleDuplicate}) => {
    return (
        <tr>
            <td>
                <input
                    type="checkbox"
                    checked={selectedRows.includes(user.id)}
                    onChange={() => handleCheckboxChange(user.id)}
                />
                <DeleteSingleRowButton onClick={singleDelete} id={user.id}></DeleteSingleRowButton>
                <DuplicateSingleRowButton onClick={singleDuplicate} id={user.id}></DuplicateSingleRowButton>
            </td>
            <td>{user.name}</td>
            <td>{user.surname}</td>
            <td>{user.fathersName}</td>
            <td>{user.email}</td>
            <td>{user.password}</td>
            <td>{user.dateOfBirth}</td>
            <td>{user.group}</td>
            <td>{user.phoneNumber}</td>
            <td>{user.gender}</td>
        </tr>
    );
};

export default TableRow;