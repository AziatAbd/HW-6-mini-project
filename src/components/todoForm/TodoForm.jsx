import { useState } from "react";
import { v4 } from "uuid";
import Button from "../UI/button/Button";
import Input from "../UI/input/Input";
import "./TodoForm.css";

const TodoForm = ({ onAddUsers, onSort }) => {
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
    <form className="todo-form">
      <div className="todo-form_container">
        <label>Username</label>
        <div className="todo-form_input">
          <Input
            onChange={nameChangeHandler}
            value={name}
            type="text"
            placeholder="Name"
          />
        </div>
        <label>Age (years)</label>
        <div className="todo-form_input">
          <Input
            onChange={ageChangeHandler}
            value={age}
            type="number"
            placeholder="Age"
          />
        </div>
        <Button onClick={addNewUser} disabled={!name || !age}>
          Add User
        </Button>
        <Button onClick={onSort} style={{marginLeft: "10px"}}>Sort</Button>
      </div>
    </form>
  );
};

export default TodoForm;
