import React from "react";
import { TodosStore } from "./TodosStore";

type NewTodoInputProps = {
  addTodo: TodosStore["addTodo"];
};

export const NewTodoInput: React.FC<NewTodoInputProps> = ({ addTodo }) => {
  const [todo, setTodo] = React.useState("");

  const updateTodo = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(event.target.value)
  }

  const onAddTodoClick = () => {
    addTodo(todo)
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
