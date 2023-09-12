import React, { useState } from "react";
// import "./Form.scss";

export default function Form(props) {
  const [name, setName] = useState('');

  function handleChange(e) {
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.addTask(name);
    setName("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
          Every Task Counts – Begin Your Day's List!
        </label>
      </h2>
      <div className="input-container">
        <input
          type="text"
          id="new-todo-input"
          className="input input__lg"
          name="text"
          autoComplete="off"
          value={name}
          onChange={handleChange}
          placeholder="Type your task here..."
        />
        <button type="submit" className="btn btn__primary btn__lg">
          Add
        </button>
      </div>
    </form>
  )
}