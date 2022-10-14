/* eslint-disable no-param-reassign */
import TodoItemModel from './toDoItemModel';

export default class TodoListModel {
  constructor() {
    this.todos = [];
    this.filterType = 'all';
  }

  // Count task active
  countTaskActive() {
    return this.todos.filter((task) => !task.isCompleted).length;
  }

  // Count task active
  countTaskCompleted() {
    return this.todos.filter((task) => task.isCompleted).length;
  }

  // Add new task
  addTodo(todoText) {
    const todoAdded = {
      id: this.todos.length > 0 ? this.todos[this.todos.length - 1].id + 1 : 0,
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
    this.todos.forEach((task) => {
      if (task.id === Number(id)) {
        task.isCompleted = !task.isCompleted;
      }
    });
  }

  // Edit task
  updateTodo(id, newEditTaskName) {
    this.todos.forEach((task) => {
      if (task.id === Number(id)) {
        task.taskName = newEditTaskName || task.taskName;
      }
    });
  }

  // Toggle check all todos
  toggleCheckAll(isToggleAll) {
    this.todos.forEach((task) => {
      if (isToggleAll) {
        task.isCompleted = true;
      } else {
        task.isCompleted = false;
      }
    });
  }

  // Filter list todo type filter
  filterModeTodos(filter) {
    this.filterType = filter;
    if (filter === 'completed') {
      this.filterType = filter;
      const completedTask = this.todos.filter((task) => task.isCompleted);
      return completedTask;
    }
    if (filter === 'active') {
      this.filterType = filter;
      const activeTask = this.todos.filter((task) => !task.isCompleted);
      return activeTask;
    }
    return this.todos;
  }

  // Delete completed task
  deleteCompletedTodos() {
    const newTodos = this.todos.filter((task) => task.isCompleted !== true);
    this.todos = newTodos;
  }
}
