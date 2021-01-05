import { action, makeAutoObservable, observable } from "mobx";

export class TodosStore {
  public todos: string[] = []

  constructor() {
    makeAutoObservable(this, {
      todos: observable,
      addTodo: action.bound
    })
  }

  public addTodo(todo: string) {
    this.todos.push(todo)
  }

}