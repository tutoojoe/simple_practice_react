import React, { useState } from "react";
import AddUser from "./Components/Users/AddUser";
import UsersList from "./Components/Users/UsersList";

function App() {
  const [userList, setUserList] = useState([]);
  const addUserHandler = (userName, userAge) => {
    setUserList((preuUsersList) => {
      return (
        [...preuUsersList, { id:Math.random().toString(),name:userName, age:userAge}]
      )
    } );
  };
  return (
    <>
      <AddUser onAddUser={ addUserHandler}/>
      <UsersList users={userList} />
    </>
  );
}

export default App;
