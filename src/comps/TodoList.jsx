import React from "react";
import Todo from "./Todo";
export default function TodoList({ filteredTodo, todos, setTodos }) {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodo.map((todo) => (
          <Todo
            setTodos={setTodos}
            text={todo.text}
            todos={todos}
            key={todo.id}
            todo={todo}
          />
        ))}
      </ul>
    </div>
  );
}
