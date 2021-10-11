import React, { useState } from "react";
import Form from "./Form";
import "./App.css";

export default () => {
  const [todos, setTodos] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  const reset = () => {
    if (window.confirm("Are you sure you want to reset your list?") == true) {
      setTodos([]);
    }
  }

  const toggleComplete = (i) =>
    setTodos(
      todos.map((todo, k) =>
        k === i
          ? {
              ...todo,
              complete: !todo.complete,
            }
          : todo
      )
    );

  return (
      <div className={darkMode ? 'dark-mode' : 'light-mode'}>
        <div className="App">
          <div className="heading">
            <h1>To-Do List</h1>
            <div className="Switch-and-Reset">
              <div className="DarkModeSwitch">
                <span style={{color: darkMode ? "grey" : "#A65B00"}}>🌣</span>
                <div className="switch-checkbox">
                  <label className="switch">
                    <input type="checkbox" onChange={() => setDarkMode(!darkMode)} />
                    <span className="slider round"> </span>
                  </label>
                </div>
                <span style={{color: darkMode ? '#c96dfd' : 'grey'}}>☽</span>
              </div>
              <button onClick={reset}><span>Reset List</span></button>
            </div>
            </div>
            <Form   
              onSubmit={(text) => setTodos([{ text, complete: false }, ...todos])}
            />
          <div>
            {todos.map(({ text, complete }, i) => (
              <div
                key={text}
                onClick={() => toggleComplete(i)}
                style={{
                  textDecoration: complete ? "line-through" : "",
                  fontFamily: 'Poppins',
                  fontSize: '1.7em',
                  margin: '10px 0',
                  cursor: 'pointer',
                }}
              >
                {text}
              </div>
            ))}
          </div>
        </div>
      </div>
  );
};
