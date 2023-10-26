import React, {useState} from 'react';
import DeleteSelectedButton from "./UI/DeleteSelectedButton";
import DuplicateSelectedButton from "./UI/DuplicateSelectedButton";
import TableRow from "./UI/TableRow";

const LoginTable = ({users, onClickDelete, onClickDuplicate, singleDuplicate, singleDelete}) => {

    const columnNames = ["Actions:", "Name:", "Surname:", "Father's name:", "Email:", "Password:", "Date of birth:", "Group:", "Phone number:", "Gender:"];

    const columns = columnNames.map((column, index) => (
        <th key={index}>{column}</th>
    ))

    const [selectedRows, setSelectedRows] = useState([])
    const handleCheckboxChange = (id) => {
        if (selectedRows.includes(id)) {
            setSelectedRows(selectedRows.filter((item) => item !== id));
        } else {
            setSelectedRows([...selectedRows, id]);
        }
    };

    const clearSelectedRows = () => setSelectedRows([])

    return (
        <div className="flex-grow-1 table-responsive tg-table">
            <h2 className="text-center">USERS</h2>
            <div className="d-flex justify-content-center m-3">
                <DeleteSelectedButton onClick={onClickDelete} clearRows={clearSelectedRows} idArray={selectedRows}></DeleteSelectedButton>
                <DuplicateSelectedButton onClick={onClickDuplicate} clearRows={clearSelectedRows} idArray={selectedRows}></DuplicateSelectedButton>
            </div>
            {users.length === 0 ? (<h2 className="text-center">Add new users!</h2>) : (
            <table className="table table-striped">
                <thead>
                <tr>
                    {columns}
                </tr>
                </thead>
                <tbody id="table-body">
                {users.map((user, index) => (
                    <TableRow key={user.id}
                              singleDelete={singleDelete}
                              singleDuplicate={singleDuplicate}
                              selectedRows={selectedRows}
                              user={user}
                              handleCheckboxChange={handleCheckboxChange}></TableRow>
                ))}
                </tbody>
            </table>
            )}
        </div>
    );
};

export default LoginTable;