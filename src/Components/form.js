import React from "react";

const Form = ({ setInputText, setTodo, inputText, todos, setFilterState }) => {
  const inputTextChangeHandler = (e) => {
    setInputText(e.target.value);
    //console.log(e.target.value);
  };
  const addTodoHandler = (e) => {
    e.preventDefault();
    setTodo([
      ...todos,
      {
        text: inputText,
        completed: false,
        id: Math.random() * 1000,
      },
    ]);
    setInputText("");
  };
  const setStateHandler = (e) => {
    setFilterState(e.target.value);
  };
  return (
    <form onSubmit={addTodoHandler}>
      <input
        value={inputText}
        onChange={inputTextChangeHandler}
        type="text"
        className="todo-input"
      />
      <button className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={setStateHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
