import React from "react";
import { useRootStore } from "./RootStateContext";

export const NewTodoInput = () => {
  const [todo, setTodo] = React.useState("")
  const { todosStore } = useRootStore()

  const updateTodo = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(event.target.value)
  }

  const onAddTodoClick = () => {
    todosStore.addTodo(todo)
    setTodo('')
  }

  return (
    <div>
      <input
        type="text"
        value={todo}
        onChange={updateTodo}
        placeholder="Todos"
        name="todo"
      />
      <button onClick={onAddTodoClick}>Add Todo</button>
    </div>
  );
};
