import TodoItemModel from './toDoItemModel';

export default class TodoListModel {
  constructor() {
    this.todos = [
      {
        id: 0,
        taskName: 'todo 1',
        isCompleted: false,
      },
      {
        id: 1,
        taskName: 'todo 2',
        isCompleted: false,
      },
      {
        id: 2,
        taskName: 'todo 3',
        isCompleted: false,
      },
    ];
  }

  // add task todo
  addTodo(todoText) {
    const todoAdded = {
      id: this.todos.length > 0 ? this.todos[this.todos.length - 1].id + 1 : 1,
      taskName: todoText,
      isCompleted: false,
    };
    const task = new TodoItemModel(todoAdded);
    this.todos.push(task);
  }

  // delete task
  deleteTodo(id) {
    const idNumber = Number(id);
    const index = this.todos.findIndex((task) => task.id === idNumber);
    this.todos.splice(index, 1);
  }
}
