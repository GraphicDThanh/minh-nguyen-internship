import TodoItemModel from './todoItemModel';
import LocalStore from '../helper/localstorage';
import { getTasksById, post } from '../helper/fetchApi';

export default class TodoListModel {
  constructor() {
    this.taskListData = new LocalStore('taskListData');
    // this.onUser = null;
    this.authen = new LocalStore('authen');
    this.onUser = this.authen.getItemLocalStorage();
    // this.todos = new LocalStore('todos');
    if (!this.authen.getItemLocalStorage()) {
      this.notes =
        this.taskListData.getItemLocalStorage() || this.taskListData.setItemLocalStorage([]);
    }
    this.taskListModel = this.getTaskListModel();
  }

  // Save data from localStorage into array
  // getTaskListModel(tasks) {
  //   const todos = [];
  //   if (this.onUser) {
  //     tasks.forEach((task) => {
  //       const todo = new TodoItemModel(task);
  //       todos.push(todo);
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
  async getTaskListModel() {
    if (this.authen.getItemLocalStorage() !== null) {
      const todos = await getTasksById(this.onUser);
      console.log('get task', todos);
      return todos;
    }
    return this.notes;
  }

  // Count task active
  async countTaskActive() {
    const listTodos = await this.getTaskListModel();

    return listTodos.filter((task) => !task.isCompleted).length;
  }

  // Count task active
  async countTaskCompleted() {
    const listTodos = await this.getTaskListModel();

    return listTodos.filter((task) => task.isCompleted).length;
  }

  // Add new task
  addTodo(todoText) {
    if (this.onUser !== null) {
      const todoAdded = {
        id: new Date().getTime().toString(),
        taskName: todoText,
        isCompleted: false,
        userID: this.onUser,
      };
      // const task = new TodoItemModel(todoAdded);
      // this.taskListModel.push(todoAdded);
      post(todoAdded);
    } else {
      const todoAdded = {
        id: new Date().getTime().toString(),
        taskName: todoText,
        isCompleted: false,
      };
      const task = new TodoItemModel(todoAdded);
      this.notes.push(task);
      this.taskListData.setItemLocalStorage(this.notes);
    }
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
  async filterModeTodos(filter) {
    const listTodos = await this.getTaskListModel();
    console.log('model', listTodos);

    if (filter === 'completed') {
      this.filterType = filter;
      const completedTask = listTodos.filter((task) => task.isCompleted);

      return completedTask;
    }
    if (filter === 'active') {
      this.filterType = filter;
      const activeTask = listTodos.filter((task) => !task.isCompleted);

      return activeTask;
    }
    return listTodos;
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
