import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Input } from "@nextui-org/react";
import { faPenToSquare, faSave } from "@fortawesome/free-solid-svg-icons";

export const TodoList = ({ todos, removeTodo, updateTodo }) => {
  return (
    <ul className={todos.completed ? "checked" : ""}>
      {todos.map((todo) => (
        <React.Fragment key={todo.id}>
          {!todo.isEditable ? (
            <ListItem todo={todo} updateTodo={updateTodo} />
          ) : (
            <InputItemList todo={todo} updateTodo={updateTodo} />
          )}
        </React.Fragment>
      ))}
    </ul>
  );
};

export const ListItem = ({ todo, updateTodo }) => {
  return (
    <>
      <li
        className={todo.completed ? "checked" : ""}
        onClick={() => updateTodo({ ...todo, completed: !todo.completed })}
      >
        {todo.text}
        {/* <span onClick={() => removeTodo(todo.id)}>x</span> */}
      </li>
      <FontAwesomeIcon
        icon={faPenToSquare}
        onClick={() => updateTodo({ ...todo, isEditable: !todo.isEditable })}
      />
    </>
  );
};

export const InputItemList = ({ todo, updateTodo }) => {
  const [text, setText] = useState(todo.text);

  <>
    <Input
      value={text}
      onChangeValue={(e) => console.log(setText(e.target.value))}
    />
    <FontAwesomeIcon
      icon={faSave}
      onClick={() => updateTodo({ ...todo, isEditable: !todo.isEditable })}
    />
  </>;
};
