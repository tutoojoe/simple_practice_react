import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from '../Helpers/Wrapper';

const AddUser = (props) => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();

  /* const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredUserAge, setEnteredUserAge] = useState(""); */
  const [error, setError] = useState();
  const addUserHandler = (event) => {
      event.preventDefault();
      const userInputName = nameInputRef.current.value;
      const userInputAge = ageInputRef.current.value;
    
      /* we are adding conditional check here */
    if (
        userInputName.trim().length === 0 ||
        userInputAge.trim().length === 0
    ) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name and age. (non-empty values)",
      });
      return;
    }

    if (+userInputAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (>0).",
      });
      return;
    }
    /* console.log(enteredUsername, enteredUserAge); */
      props.onAddUser(userInputName, userInputAge);
      nameInputRef.current.value = '';
      ageInputRef.current.value = '';

    /* setEnteredUsername("");
    setEnteredUserAge(""); */
  };
/*
  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const userAgeChangeHandler = (event) => {
    setEnteredUserAge(event.target.value);
  };
*/
  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        ></ErrorModal>
      )}

      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            /* onChange={usernameChangeHandler}
                      value={enteredUsername} */
                      ref={nameInputRef}
          ></input>
          <label htmlFor="age">Age (Years)</label>
          <input
            type="number"
            id="age"
            /* onChange={userAgeChangeHandler}
                      value={enteredUserAge} */
                      ref={ageInputRef}
          ></input>
          <Button type="submit">Add User</Button>

          {/* <button type="submit">Add User</button> */}
        </form>
      </Card>
      </Wrapper>
  );
};

export default AddUser;
