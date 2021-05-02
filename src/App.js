import logo from "./logo.svg";
import "./App.css";
import Form from "./Components/Form";
import TodoList from "./Components/TodoList";

function App() {
  return (
    <div className="App">
      <h1>Todo List</h1>
      <Form></Form>
      <TodoList></TodoList>
    </div>
  );
}

export default App;
