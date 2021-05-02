import React from "react";
const Todo = ({ text, todoList, todo, setTodo }) => {
  const todoDeleteHandler = () => {
    setTodo(todoList.filter((t) => t.id != todo.id));
  };

  const todoCompleteHandler = () => {
    setTodo(
      todoList.map((t) => {
        if (t.id == todo.id) {
          return { ...t, completed: !t.completed };
        }
        return t;
      })
    );
  };

  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        {text}
      </li>
      <button onClick={todoCompleteHandler} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={todoDeleteHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;
