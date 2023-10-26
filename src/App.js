import React, {useState} from "react";
import LoginForm from "./components/LoginForm";
import LoginTable from "./components/LoginTable";

function App() {

    const [userId, setUserId] = useState(1)
    const [users, setUsers] = useState([])

    const handleFormSubmit = (user) => {
        setUsers((prevUsers) => [...prevUsers, {...user, id: userId}])
        setUserId(tempId => tempId + 1)
    }

    const handleDeleteSelected = (idArray) => {
        setUsers(users => users.filter(user => !idArray.includes(user.id)))
    }

    const handleDuplicateSelected = (idArray) => {
        let maxId = Math.max(...users.map(user => user.id));

        const duplicatedUsers = users
            .filter(user => idArray.includes(user.id))
            .map(user => {
                const newId = maxId + 1;
                maxId += 1;
                return { ...user, id: newId };
            });

        setUsers((prevUsers) => [...prevUsers, ...duplicatedUsers]);
        setUserId(tempId => maxId + 1);
    }

    const handleSingleDelete = (id) => {
        setUsers(users => users.filter(user => user.id !== id))
    }

    const handleSingleDuplicate = (id) => {
        users.filter(user => user.id === id)
            .map(user => {
                setUsers((prevUsers) => [...prevUsers, {...user, id: userId}])
                setUserId(tempId => tempId + 1)
            })
    }

    return (
        <div className="App h-100">
            <LoginForm onSubmit={handleFormSubmit}></LoginForm>
            <LoginTable users={users}
                        singleDelete={handleSingleDelete}
                        singleDuplicate={handleSingleDuplicate}
                        onClickDelete={handleDeleteSelected}
                        onClickDuplicate={handleDuplicateSelected}>
            </LoginTable>
        </div>
    );
}

export default App;
