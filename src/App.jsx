import React, { useState } from "react";
import { AddTodo } from "./components/AddTodo";
import { TodoList } from "./components/TodoList";
import "./App.css";
import { userSample } from "./db";
import { Header } from "./components/Header";
import { withTodos } from "./hoc/withTodos";

const _App = ({ state, dispatch }) => {
  const [user, setUser] = useState(userSample);

  const logout = () => {
    setUser(null);
  };

  return (
    <div className="container">
      <div className="todo-app">
        <Header user={user} logout={logout} />
        <div className="row">
          <AddTodo onAdd={dispatch} />
        </div>
        <TodoList
          onAdd={dispatch}
          todos={state}
          updateTodo={dispatch}
          removeTodo={dispatch}
        />
        <button
          className="all"
          onClick={() => dispatch({ type: "filter", filter: "all" })}
        >
          All
        </button>
        <button
          className="completed"
          onClick={() => dispatch({ type: "filter", filter: "completed" })}
        >
          Completed
        </button>
        <button
          className="incomplete"
          onClick={() => dispatch({ type: "filter", filter: "incomplete" })}
        >
          Incomplete
        </button>
      </div>
    </div>
  );
};

export const App = withTodos(_App);
