import { action, observable } from "mobx";

export class TodosStore {
  @observable todos: string[]
  constructor() {
    this.todos = ['a', 'b']
  }

  @action.bound
  addTodo(todo: string) {
    this.todos.push(todo)
  }
}