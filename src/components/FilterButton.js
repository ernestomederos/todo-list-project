import React from "react";
// import "./FilterButton.scss";

export default function FilterButton(props) {

  return (
    <button
      type="button"
      className="btn toggle-btn"
      aria-pressed={props.isPressed}
      onClick={() => props.setFilter(props.name)}>
      <span>{props.name}</span>
    </button>
  )

}