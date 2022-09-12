import TodoItemModel from './todo';

export default class TodoListModel {
  constructor() {
    this.todos = [
      {
        id: 1,
        taskName: 'todo 1',
        isCompleted: true,
        status: 'Completed',
      },
      {
        id: 2,
        taskName: 'todo 2',
        isCompleted: false,
        status: 'Active',
      },
      {
        id: 3,
        taskName: 'todo 3',
        isCompleted: true,
        status: 'Completed',
      },
    ];
  }

  // add todo
  addTodo(todoText) {
    const todoAdded = {
      id: this.todos.length > 0 ? this.todos[this.todos.length - 1].id + 1 : 1,
      text: todoText,
      isCompleted: false,
    };
    const task = new TodoItemModel(todoAdded);
    this.todos.push(task);
  }
}
