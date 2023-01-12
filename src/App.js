import TodoForm from "./components/todoForm/TodoForm";
import "./App.css";
import { useState } from "react";
import TodoList from "./components/todoList/TodoList";
import Button from "./components/UI/button/Button";

function App() {
  const [users, setUsers] = useState([]);

  const addUserHandler = (newUser) => {
    setUsers([...users, newUser]);
  };

  const handleSort = (e) => {
    e.preventDefault();

    setUsers(users.slice().sort((a, b) => b.age - a.age));
  };

  return (
    <div className="App">
      <TodoForm onSort={handleSort} onAddUsers={addUserHandler} />
      <TodoList user={users} />
    </div>
  );
}

export default App;
