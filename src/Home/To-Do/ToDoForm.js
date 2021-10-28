import React, { useState } from "react";
import "./ToDo.css";

function ToDoForComponent(props) {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
    setInput("");
  };

  return (
    <div className="container mt-5 rounded-3 prim">
      <form onSubmit={(e) => handleSubmit(e)} className="p-t">
        <h1 className="To">To-Do App!</h1>
        <div className="Do">Add new To-Do</div>
        <input
          type="text"
          className="form-control  m-L"
          placeholder="Add To-Do"
          value={input}
          name="text"
          onChange={(e) => handleChange(e)}
        />
        <button type="submit" class="btn btn-warning bu">
          Add
        </button>
      </form>
    </div>
  );
}

export default ToDoForComponent;
