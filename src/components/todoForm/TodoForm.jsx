import { useState } from "react";
import { v4 } from "uuid";
import { Button, TextField } from "@mui/material";
import classes from "./TodoForm.module.css";

const TodoForm = ({ onAddUsers }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };
  const ageChangeHandler = (e) => {
    setAge(e.target.value);
  };

  const addNewUser = (e) => {
    e.preventDefault();

    const newUser = {
      id: v4(),
      name,
      age,
    };
    onAddUsers(newUser);
    setName("");
    setAge("");
  };


  return (
    <form className={classes.todoForm}>
      <div className={classes.todoForm_container}>
        <label>Username</label>
        <div className={classes.todoForm_input}>
          <TextField
            fullWidth
            variant="outlined"
            label="Name"
            onChange={nameChangeHandler}
            value={name}
            type="text"
          />
        </div>
        <label>Age (years)</label>
        <div className={classes.todoForm_input}>
          <TextField
            fullWidth
            variant="outlined"
            label="Age"
            onChange={ageChangeHandler}
            value={age}
            type="number"
          />
        </div>
        <Button
          variant="contained"
          color="secondary"
          onClick={addNewUser}
          disabled={!name || !age}
        >
          Add User
        </Button>
      </div>
    </form>
  );
};

export default TodoForm;
