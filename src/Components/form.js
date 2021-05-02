import React from "react";

const Form = ({ setInputText }) => {
  const inputTextChangeHandler = (e) => {
    setInputText(e.tar.value);
    console.log(e.target.value);
  };

  return (
    <form>
      <input
        onChange={inputTextChangeHandler}
        type="text"
        className="todo-input"
      />
      <button className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
