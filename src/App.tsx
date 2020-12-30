import React from "react";
import { observer } from "mobx-react-lite";
import "./App.css";
import { NewTodoInput } from "./NewTodoInput";
import { useRootStore } from "./RootStateContext";

export default observer(() => {
  const { todosStore } = useRootStore();

  return (
    <>
      <NewTodoInput addTodo={todosStore.addTodo} />
      <hr />
      <ul>
        {todosStore.todos.map((todo) => (
          <li key={todo}>{todo}</li>
        ))}
      </ul>
    </>
  );
});
