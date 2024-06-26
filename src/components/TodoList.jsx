import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Input } from "@nextui-org/react";
import {
  faPenToSquare,
  faSave,
  faSquareMinus,
} from "@fortawesome/free-solid-svg-icons";

export const TodoList = ({ todos, removeTodo, updateTodo }) => {
  return (
    <ul className={todos?.completed ? "checked" : ""}>
      {todos?.map((todo) => (
        <React.Fragment key={todo.id}>
          {!todo.isEditable ? (
            <ListItem
              todo={todo}
              updateTodo={updateTodo}
              removeTodo={removeTodo}
            />
          ) : (
            <InputItemList todo={todo} updateTodo={updateTodo} />
          )}
        </React.Fragment>
      ))}
    </ul>
  );
};

export const ListItem = ({ todo, updateTodo, removeTodo }) => {
  return (
    <>
      <li
        className={todo?.completed ? "checked" : ""}
        onClick={() =>
          updateTodo({
            type: "update",
            item: {
              ...todo,
              completed: !todo.completed,
            },
          })
        }
      >
        {todo?.text}
      </li>
      <FontAwesomeIcon
        icon={faSquareMinus}
        onClick={() => removeTodo({ type: "remove", id: todo.id })}
      />
      <FontAwesomeIcon
        icon={faPenToSquare}
        onClick={() =>
          updateTodo({
            type: "update",
            item: {
              ...todo,
              isEditable: !todo.isEditable,
            },
          })
        }
      />
    </>
  );
};

export const InputItemList = ({ todo, updateTodo }) => {
  const [text, setText] = useState(todo.text);

  const handleUpdate = () => {
    updateTodo({
      type: "update",
      item: {
        ...todo,
        text,
        isEditable: !todo.isEditable,
      },
    });
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleUpdate();
    }
  };

  return (
    <>
      <Input
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <FontAwesomeIcon icon={faSave} onClick={handleUpdate} />
    </>
  );
};
