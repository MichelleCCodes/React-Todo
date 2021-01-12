import React from "react";
import { render } from "react-dom";
import "./Todo.css";

const Todo = props => {
  const handleClick = () => {
    props.handleTaskToggle(props.task.id); 
  }
  return (
    <div onClick={handleClick} className={`${props.task.completed ? ' completed' : ''}`}>
      <p>{props.task.task}</p>
    </div>
  )
}

export default Todo;

