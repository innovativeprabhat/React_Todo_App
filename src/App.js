import logo from './logo.svg';
import './App.css';
import Form from './Components/form'
import to from './Components/todolist'
import todolist from './Components/todolist';

function App() {
  return (
    <div className="App">
      <h1>Todo List</h1>
      <Form></Form>
      <todolist></todolist>
    </div>
  );
}

export default App;
