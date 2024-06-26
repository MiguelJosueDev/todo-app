import { useContext } from "react";
import { TodoContext } from "../context/context";

export const withTodos = (Component) => {
  function Func(props) {
    const { state, dispatch } = useContext(TodoContext);
    return <Component state={state} dispatch={dispatch} {...props} />;
  }

  return Func;
};
