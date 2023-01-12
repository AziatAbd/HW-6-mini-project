import "./TodoList.css";

const TodoList = ({ user }) => {
  return (
    <div className="todo-list">
      <ul className="todo-list_container">
        {user.map((item) => (
          <li className="todo-list_item" key={item.id}>
            <span>{item.name} </span>
            <span> ({item.age} years old)</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
