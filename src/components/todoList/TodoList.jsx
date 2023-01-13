import classes from "./TodoList.module.css";

const TodoList = ({ user }) => {
  return (
    <div className={classes.todoList}>
      <ul className={classes.todoList_container}>
        {user.map((item) => (
          <li className={classes.todoList_item} key={item.id}>
            <span>{item.name} </span>
            <span> ({item.age} years old)</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
