import TodoItemModel from './todoItemModel';
import LocalStore from '../helper/localStorage';
import { post, getTasksById } from '../helper/fetchApi';

export default class TodoListModel {
  constructor() {
    this.authen = new LocalStore('authen');
    // this.taskListModel = this.getTaskListModel();
    this.onUser = this.authen.getItemLocalStorage();
    this.todos = new LocalStore('todos');
    if (!this.onUser) {
      this.notes = this.todos.getItemLocalStorage() || this.todos.setItemLocalStorage([]);
    }
  }

  // Save data from localStorage or server into array
  async getTaskListModel() {
    const tasks = [];
    if (this.authen.getItemLocalStorage() !== null) {
      console.log('server');
      const todo = await getTasksById(this.onUser);
      tasks.push(todo);
    } else {
      console.log('local');
      const taskLocal = this.todos.getItemLocalStorage();
      taskLocal.forEach((task) => {
        const todo = new TodoItemModel(task);
        tasks.push(todo);
      });
    }
    return tasks;
  }

  // Count task active
  async countTaskActive() {
    const todos = await this.getTaskListModel();

    return todos.filter((task) => !task.isCompleted).length;
  }

  // Count task active
  async countTaskCompleted() {
    const todos = await this.getTaskListModel();

    return todos.filter((task) => task.isCompleted).length;
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
      this.taskListModel.push(task);
      this.taskListData.setItemLocalStorage(this.taskListModel);
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
  filterModeTodos(filter) {
    const listTodos = this.getTaskListModel();
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
