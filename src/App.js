import React, { useState } from "react";
import "./App.css";
import Form from "./comps/Form";
import TodoList from "./comps/TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <header>
        <h1>Lucas' Todo List</h1>
      </header>
      <Form
        setInputText={setInputText}
        setTodos={setTodos}
        todos={todos}
        inputText={inputText}
      />
      <TodoList setTodos={setTodos} todos={todos} inputText={inputText} />
    </div>
  );
}

export default App;
