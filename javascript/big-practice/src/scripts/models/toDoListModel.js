/* eslint-disable no-param-reassign */
import TodoItemModel from './toDoItemModel';
import LocalStore from '../helper/localstorage';

export default class TodoListModel {
  constructor() {
    this.taskListData = new LocalStore('taskListData');
    this.taskListModel = this.getTaskListModel();
    this.filterType = 'all';
  }

  // Save data from localStorage into array
  getTaskListModel(tasks) {
    const todos = [];
    if (this.taskListData.getItemLocalStorage()) {
      tasks = this.taskListData.getItemLocalStorage();
      tasks.forEach((task) => {
        const todo = new TodoItemModel(task);
        todos.push(todo);
      });
    }
    return todos;
  }

  // Count task active
  countTaskActive() {
    return this.taskListModel.filter((task) => !task.isCompleted).length;
  }

  // Count task active
  countTaskCompleted() {
    return this.taskListModel.filter((task) => task.isCompleted).length;
  }

  // Add new task
  addTodo(todoText) {
    const todoAdded = {
      id:
        this.taskListModel.length > 0
          ? this.taskListModel[this.taskListModel.length - 1].id + 1
          : 0,
      taskName: todoText,
      isCompleted: false,
    };
    const task = new TodoItemModel(todoAdded);
    this.taskListModel.push(task);
  }

  // Delete task
  deleteTodo(id) {
    const idNumber = Number(id);
    const index = this.taskListModel.findIndex((task) => task.id === idNumber);
    this.taskListModel.splice(index, 1);
  }

  // Done task
  toggleTodo(id) {
    this.taskListModel.forEach((task) => {
      if (task.id === Number(id)) {
        task.isCompleted = !task.isCompleted;
      }
    });
  }

  // Edit task
  updateTodo(id, newEditTaskName) {
    this.taskListModel.forEach((task) => {
      if (task.id === Number(id)) {
        task.taskName = newEditTaskName || task.taskName;
      }
    });
  }

  // Toggle check all todos
  toggleCheckAll(isToggleAll) {
    this.taskListModel.forEach((task) => {
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
      const completedTask = this.taskListModel.filter((task) => task.isCompleted);
      return completedTask;
    }
    if (filter === 'active') {
      this.filterType = filter;
      const activeTask = this.taskListModel.filter((task) => !task.isCompleted);
      return activeTask;
    }
    return this.taskListModel;
  }

  // Delete completed task
  deleteCompletedTodos() {
    const newTodos = this.taskListModel.filter((task) => task.isCompleted !== true);
    this.taskListModel = newTodos;
  }
}
