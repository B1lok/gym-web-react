import React, {useEffect, useState} from 'react';
import DeleteSelectedButton from "./UI/DeleteSelectedButton";
import DuplicateSelectedButton from "./UI/DuplicateSelectedButton";
import TableRow from "./UI/TableRow";
import SelectAllButton from "./UI/SelectAllButton";

const LoginTable = ({users, onClickDelete, onClickDuplicate, singleDuplicate, singleDelete}) => {

    const columnNames = [
        "All:",
        "Name:",
        "Surname:",
        "Father's name:",
        "Gender:",
        "Date of birth:",
        "Email:",
        "Password:",
        "Phone number:",
        "Group:"
    ];

    const [selectedRows, setSelectedRows] = useState([])
    const [selectAllChecked, setSelectAll] = useState(false)

    useEffect(() => {
        setSelectAll(selectedRows.length === users.length);
    }, [selectedRows, users]);

    const handleSelectAllCheckboxChange = () =>{
        if (selectAllChecked) {
            setSelectAll(false)
            setSelectedRows([])
        } else {
            setSelectAll(true)
            setSelectedRows(users.map(user => user.id))
        }
    }

    const handleCheckboxChange = (id) => {
        if (selectedRows.includes(id)) {
            setSelectedRows(selectedRows.filter((item) => item !== id));
        } else {
            setSelectedRows([...selectedRows, id]);
        }
    };

    const columns = columnNames.map((column, index) => (
        column === "All:" ? <SelectAllButton key={index} onChange={handleSelectAllCheckboxChange} checked={selectAllChecked} /> : <th key={index}>{column}</th>
    ))

    const clearSelectedRows = () => setSelectedRows([])

    return (
        <div className="flex-grow-1 table-responsive tg-table">
            <h2 className="text-center">USERS</h2>
            <div className="d-flex justify-content-center m-3">
                <DeleteSelectedButton onClick={onClickDelete} clearRows={clearSelectedRows} idArray={selectedRows}/>
                <DuplicateSelectedButton onClick={onClickDuplicate} clearRows={clearSelectedRows}
                                         idArray={selectedRows}/>
            </div>
            {users.length === 0 ? (<h2 className="text-center">Add new users!</h2>) : (
                <table className="table table-striped">
                    <thead>
                    <tr>
                        {columns}
                    </tr>
                    </thead>
                    <tbody id="table-body">
                    {users.map((user) => (
                        <TableRow
                            key={user.id}
                            singleDelete={singleDelete}
                            singleDuplicate={singleDuplicate}
                            selectedRows={selectedRows}
                            user={user}
                            handleCheckboxChange={handleCheckboxChange}>
                        </TableRow>
                    ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default LoginTable;