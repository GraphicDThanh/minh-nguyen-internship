import TodoItemModel from './todoItemModel';
import LocalStore from '../helper/localStorage';
// import { get, create, update, remove } from '../helper/fetchApi';

export default class TodoListModel {
  constructor() {
    // this.todos = [];
    this.taskListData = new LocalStore('taskListData');
    this.taskListModel = this.getTaskListModel();
    this.onUser = null;
  }

  // Save data from localStorage into array
  getTaskListModel(tasks) {
    const todos = [];
    if (tasks) {
      tasks.forEach((task) => {
        const todo = new TodoItemModel(task);
        todos.push(todo);
      });
    } else if (this.taskListData.getItemLocalStorage()) {
      let tasks = this.taskListData.getItemLocalStorage();
      tasks.forEach((task) => {
        const todo = new TodoItemModel(task);
        todos.push(todo);
      });
    }
    return todos;
  }

  // Count task active
  countTaskActive() {
    // const todos = await this.getTodo();

    return this.taskListModel.filter((task) => !task.isCompleted).length;
  }

  // Count task active
  countTaskCompleted() {
    // const todos = await this.getTodo();

    return this.taskListModel.filter((task) => task.isCompleted).length;
  }

  // Add new task
  addTodo(todoText) {
    const todoAdded = {
      id: new Date().getTime().toString(),
      taskName: todoText,
      isCompleted: false,
    };
    const task = new TodoItemModel(todoAdded);
    this.taskListModel.push(task);
    // await create(task);
  }

  // Delete task
  deleteTodo(id) {
    const index = this.taskListModel.findIndex((task) => task.id === id);

    this.taskListModel.splice(index, 1);
    // await remove(id);
  }

  // Done task
  toggleTodo(id) {
    const taskSelected = this.taskListModel.find((todo) => todo.id === id);

    taskSelected.isCompleted = !taskSelected.isCompleted;
    // await update(id, taskSelected);
  }

  // Edit task
  updateTodo(id, newEditTaskName) {
    const taskSelected = this.taskListModel.find((todo) => todo.id === id);

    taskSelected.taskName = newEditTaskName || taskSelected.taskName;
    // await update(id, taskSelected);
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

    // this.todos.forEach(async (todo) => {
    //   await update(todo.id, todo);
    // });
  }

  // Filter list todo type filter
  filterModeTodos(filter) {
    // const listTodos = await this.getTodo();

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
    // const listTodosCompleted = this.taskListModel.filter((task) => task.isCompleted);
    const listTodosActive = this.taskListModel.filter((task) => !task.isCompleted);

    this.taskListModel = listTodosActive;
    return this.taskListModel;
    // listTodosCompleted.forEach(async (todo) => {
    //   await remove(todo.id);
    // });
  }

  /**
   * Use API url from fetch import in read data
   * @returns {array} todos.
   */
  // async getTodo() {
  //   const listTodos = await get();

  //   this.todos = listTodos;
  //   return listTodos;
  // }
}
