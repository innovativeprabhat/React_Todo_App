import React, { useState } from "react";
import "./App.css";
import Form from "./Components/Form";
import TodoList from "./Components/TodoList";

function App() {
  [inputText, setInputText] = useState("");

  return (
    <div className="App">
      <h1>Todo List {inputText}</h1>
      <Form setInputText={setInputText}></Form>
      <TodoList></TodoList>
    </div>
  );
}

export default App;
