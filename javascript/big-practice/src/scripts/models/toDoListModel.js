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

  // Add task todo
  addTodo(todoText) {
    const todoAdded = {
      id: this.todos.length > 0 ? this.todos[this.todos.length - 1].id + 1 : 1,
      taskName: todoText,
      isCompleted: false,
    };
    const task = new TodoItemModel(todoAdded);
    this.todos.push(task);
  }

  // Delete task
  deleteTodo(id) {
    const idNumber = Number(id);
    const index = this.todos.findIndex((task) => task.id === idNumber);
    this.todos.splice(index, 1);
  }

  // Done task
  toggleTodo(id) {
    const task = this.todos.find((todo) => todo.id === Number(id));
    const newTask = {
      ...task,
      isCompleted: true,
    };
    this.todos.splice(task.id, 1, newTask);
  }
}
