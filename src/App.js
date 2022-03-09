import React from "react";
import "./App.css";
import Form from "./comps/Form";
import TodoList from "./comps/TodoList";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Lucas' Todo List</h1>
      </header>
      <Form />
      <TodoList />
    </div>
  );
}

export default App;
