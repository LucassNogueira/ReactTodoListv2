import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./comps/Form";
import TodoList from "./comps/TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [status, setStatus] = useState("all");
  const [todos, setTodos] = useState([]);
  const [filteredTodo, setFilteredTodo] = useState([]);
  // state ^^
  useEffect(() => {
    getLocalTodos();
  }, []);
  //UseEffectVV
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);
  // functions VV
  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodo(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodo(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodo(todos);
        break;
    }
  };

  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  };
  return (
    <div className="App">
      <header>
        <h1>Lucas' Todo List</h1>
      </header>
      <Form
        setStatus={setStatus}
        setInputText={setInputText}
        setTodos={setTodos}
        todos={todos}
        inputText={inputText}
      />
      <TodoList
        filteredTodo={filteredTodo}
        setTodos={setTodos}
        todos={todos}
        inputText={inputText}
      />
    </div>
  );
}

export default App;
