import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, setTodo, filteredTodos }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map((t) => (
          <Todo
            setTodo={setTodo}
            todo={t}
            todoList={todos}
            key={t.id}
            text={t.text}
          ></Todo>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
