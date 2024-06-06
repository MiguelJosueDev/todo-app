import React from "react";

export const TodoList = ({ todos, onToggle, removeTodo }) => {
  return (
    <ul className={todos.completed ? "checked" : ""}>
      {todos.map((todo) => (
        <div key={todo.id}>
          <li
            className={todo.completed ? "checked" : ""}
            onClick={() => onToggle(todo.id)}
          >
            {todo.text}
            {/* <span onClick={() => removeTodo(todo.id)}>x</span> */}
          </li>
        </div>
      ))}
    </ul>
  );
};
