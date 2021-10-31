import React, { useState } from "react";
import ToDoForComponent from "./ToDoForm";
import ToDoComponent from "./ToDo";
import "./ToDo.css";

function ToDoListComponent() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
  };

  const removeTodo = (id) => {
    const removeArr = [...todos].filter((todo) => todo.id !== id);

    setTodos(removeArr);
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }

      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div className="container">
      <h1 className="h">Whats the Plan for Today?</h1>
      <ToDoForComponent onSubmit={addTodo} />
      <ToDoComponent
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
      />
    </div>
  );
}

export default ToDoListComponent;
