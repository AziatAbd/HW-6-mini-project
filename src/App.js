import TodoForm from "./components/todoForm/TodoForm";
import { useState } from "react";
import TodoList from "./components/todoList/TodoList";

import "./App.css";

function App() {
  const [users, setUsers] = useState([]);

  const addUserHandler = (newUser) => {
    setUsers([...users, newUser].slice().sort((a, b) => b.age - a.age));
  };

  return (
    <div className="App">
      <TodoForm onAddUsers={addUserHandler} />
      <TodoList user={users} />
    </div>
  );
}

export default App;
