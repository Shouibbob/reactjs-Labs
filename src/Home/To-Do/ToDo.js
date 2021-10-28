import React, { useState } from "react";
import ToDoForComponent from "./ToDoForm";
import "./ToDo.css";

function ToDoComponent(props) {
  const [isComplete, setComplete] = useState(false);

  const Complete = () => {
    setComplete(!isComplete);
  };

  return props.todos.map((todo, index) => (
    <div className="container M">
      <input
        type="button"
        className="btn btn-outline-primary"
        onClick={Complete}
        value={isComplete ? "Undo" : "Complete"}
      />
      <input
        type="button"
        className="btn btn-outline-danger"
        onClick={() => props.removeTodo(todo.id)}
        value="Delete"
      />
      <div
        className="L"
        key={todo.id}
        onClick={() => props.completeTodo(todo.id)}
        style={
          isComplete
            ? { textDecoration: "line-through" }
            : { textDecoration: "none" }
        }
      >
        {todo.text}
      </div>
    </div>
  ));
}

export default ToDoComponent;
