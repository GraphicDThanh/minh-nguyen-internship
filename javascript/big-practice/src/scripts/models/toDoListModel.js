import TodoItemModel from './todoItemModel';
import LocalStore from '../helper/localStorage';
import { get, post, update, remove } from '../helper/fetchApi';

export default class TodoListModel {
  constructor() {
    this.todos = [];
    this.taskListData = new LocalStore('taskListData');
    // this.taskListModel = this.getTaskListModel();
    this.filterType = 'all';
  }

  // Save data from localStorage into array
  // getTaskListModel(tasks) {
  //   const todos = [];
  //   if (tasks) {
  //     tasks.forEach((task) => {
  //       const taskInstance = new TodoItemModel(task);
  //       todos.push(taskInstance);
  //     });
  //   } else if (this.taskListData.getItemLocalStorage()) {
  //     const tasks = this.taskListData.getItemLocalStorage();
  //     tasks.forEach((task) => {
  //       const todo = new TodoItemModel(task);
  //       todos.push(todo);
  //     });
  //   }
  //   return todos;
  // }

  // Count task active
  async countTaskActive() {
    const todos = await this.getTodo();
    return todos.filter((task) => !task.isCompleted).length;
  }

  // Count task active
  async countTaskCompleted() {
    const todos = await this.getTodo();
    return todos.filter((task) => task.isCompleted).length;
  }

  // Add new task
  async addTodo(todoText) {
    const todoAdded = {
      id: new Date().getTime().toString(),
      taskName: todoText,
      isCompleted: false,
    };
    const task = new TodoItemModel(todoAdded);
    await post(task);
  }

  // Delete task
  async deleteTodo(id) {
    const idNumber = id;
    const index = this.todos.findIndex((task) => task.id === idNumber);
    this.todos.splice(index, 1);

    await remove(id);
  }

  // Done task
  async toggleTodo(id) {
    const taskSelected = this.todos.find((todo) => todo.id === id);

    taskSelected.isCompleted = !taskSelected.isCompleted;
    await update(id, taskSelected);
  }

  // Edit task
  updateTodo(id, newEditTaskName) {
    this.taskListModel.forEach((task) => {
      if (task.id === id) {
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

  /**
   * Use API url from fetch import in read data
   * @returns {array} todos.
   */
  async getTodo() {
    const listTodos = await get();
    this.todos = listTodos;
    return listTodos;
  }
}
