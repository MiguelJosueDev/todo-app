import React, { useState, useEffect, useCallback } from "react";
import { AddTodo } from "./components/AddTodo";
import { Navbar } from "./components/Navbar";
import { TodoList } from "./components/TodoList";
import { UserProfile } from "./components/UserProfile";
import './App.css';

const userSample = {
  name: "Mike Tyson",
  email: "mike.tyson@protonmail.me",
};

const tasks = [
  { id: 1, text: "Learn React", completed: false },
  { id: 2, text: "Build a Todo App", completed: true },
  { id: 3, text: "Read JavaScript Documentation", completed: false },
  { id: 4, text: "Implement a Redux Store", completed: false },
  { id: 5, text: "Write Unit Tests", completed: true },
];

const App = () => {
  const [user, setUser] = useState(userSample);
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    setTimeout(() => {
      setTodos(tasks);
    }, 1000);
  }, []);

  const addTodo = useCallback(
    (text) => {
      console.log("me ejectue addTodo");
      setTodos([...todos, { id: Date.now(), text, completed: false }]);
    },
    [todos]
  );

  const removeTodo = useCallback(
    (id) => {
      console.log("me ejectue removeTodo");
      const newArray = todos.filter((todo) => todo.id !== id);
      setTodos(newArray);
      console.log(newArray);
    },
    [todos]
  );

  const editTodo = useCallback();

  const toggleTodo = useCallback(
    (id) => {
      console.log("me ejectue toggleTodo");
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )
      );
    },
    [todos]
  );

  const logout = () => {
    setUser(null);
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "all") return true;
    if (filter === "completed") return todo.completed;
    if (filter === "incomplete") return !todo.completed;
    return true;
  });

  return (
    <div className="container">
      <div className="todo-app">
        <div className="app-title">
          {user && <Navbar user={user} onLogout={logout} />}
          {user && <UserProfile user={user} />}
        </div>
        <div class="row">
          <AddTodo onAdd={addTodo} />
        </div>
        <TodoList
          todos={filteredTodos}
          onToggle={toggleTodo}
          removeTodo={removeTodo}
        />
        <button className="all" onClick={() => setFilter("all")}>
          All
        </button>
        <button className="completed" onClick={() => setFilter("completed")}>
          Completed
        </button>
        <button className="imcomplete" onClick={() => setFilter("incomplete")}>
          Incomplete
        </button>
      </div>
    </div>
  );
};

export default App;
