import React from "react";
import { useSelector } from 'react-redux';


const HeaderTodo = () => {
    const username = useSelector(state => state.todolist.user)
  return (
    <>
      <div className="item">
        <h1>Todo List</h1>
      </div>
      <div className="item item1">
        <i className="far fa-user"></i>
        <span style={{ marginLeft: ".1rem" }}> {username}</span>
      </div>
    </>
  );
};

export default HeaderTodo;
