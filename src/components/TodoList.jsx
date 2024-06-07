import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Input } from "@nextui-org/react";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons"; // Import the faPenToSquare icon
import React, { useState } from "react";

export const TodoList = ({ todos, onToggle, removeTodo, onAdd }) => {
  const [text, setText] = useState(todos.text);

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <ul className={todos.completed ? "checked" : ""}>
        {todos.map((todo) => (
          <React.Fragment key={todo.id}>
            {!todo.isEditable ? (
              <>
                <li
                  className={todo.completed ? "checked" : ""}
                  onClick={() => onToggle(todo.id)}
                >
                  {todo.text}
                  {/* <span onClick={() => removeTodo(todo.id)}>x</span> */}
                </li>
                <FontAwesomeIcon icon={faPenToSquare} />
              </>
            ) : (
              <Input value={text} onChange={(e) => setText(e.target.value)} />
            )}
          </React.Fragment>
        ))}
      </ul>
    </form>
  );
};
