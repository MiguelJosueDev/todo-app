import React, { createContext, useReducer } from "react";
import todosReducer from "../services/todoReducer";
import { tasks } from "../db";

export const TodoContext = createContext({});

export function TodosProvider(props) {
  const [state, dispatch] = useReducer(todosReducer, tasks);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {props.children}
    </TodoContext.Provider>
  );
}
