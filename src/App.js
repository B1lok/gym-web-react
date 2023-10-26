import React, {useEffect, useState} from "react";
import LoginForm from "./components/LoginForm";
import LoginTable from "./components/LoginTable";

function App() {

    const [userId, setUserId] = useState(1)
    const [users, setUsers] = useState([])

    const handleFormSubmit = (user) => {
        setUsers((prevUsers) => [...prevUsers, { ...user, id: userId }])
        setUserId(tempId => tempId + 1)
        console.log(users)
    }

    const handleDeleteSelected = (idArray) => {
        setUsers(users => users.filter(user => !idArray.includes(user.id)))
    }
    const handleDuplicateSelected = (idArray) => {
        users.filter(user => idArray.includes(user.id))
            .map(user => {
                setUsers((prevUsers) => [...prevUsers, {...user, id: userId}])
                setUserId(tempId => tempId + 1)
            })
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
    <div className="App">
      <LoginForm onSubmit={handleFormSubmit}></LoginForm>
        <LoginTable users={users}
                    singleDelete={handleSingleDelete}
                    singleDuplicate={handleSingleDuplicate}
                    onClickDelete={handleDeleteSelected}
                    onClickDuplicate={handleDuplicateSelected}></LoginTable>
    </div>
  );
}

export default App;
