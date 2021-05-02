import React, { useEffect, useState } from "react";
import "./App.css";
import Form from "./Components/Form";
import TodoList from "./Components/TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodo] = useState([]);
  const [filteredState, setFilterState] = useState("all");
  const [filteredTodos, setFilterTodos] = useState([]);
  useEffect(() => {
    getToLocalStorage();
  }, []);
  useEffect(() => {
    filterHandler();
    saveToLocalStorage();
  }, [todos, filteredState]);
  const filterHandler = () => {
    switch (filteredState) {
      case "completed": {
        setFilterTodos(todos.filter((t) => t.completed == true));
        break;
      }
      case "uncompleted": {
        setFilterTodos(todos.filter((t) => t.completed == false));
        break;
      }
      default:
        setFilterTodos(todos);
    }
  };
  const saveToLocalStorage = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  const getToLocalStorage = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let savedTodos = JSON.parse(localStorage.getItem("todos"));
      setTodo(savedTodos);
    }
  };
  return (
    <div className="App">
      <h1>Todo List {inputText}</h1>
      <Form
        todos={todos}
        inputText={inputText}
        setTodo={setTodo}
        setInputText={setInputText}
        setFilterState={setFilterState}
      ></Form>
      <TodoList
        filteredTodos={filteredTodos}
        setTodo={setTodo}
        todos={todos}
      ></TodoList>
    </div>
  );
}

export default App;
