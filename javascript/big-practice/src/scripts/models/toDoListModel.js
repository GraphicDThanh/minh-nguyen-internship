import TodoItemModel from './todoItemModel';
// import LocalStore from '../helper/localStorage';
import { get, create, update, remove } from '../helper/fetchApi';

export default class TodoListModel {
  constructor() {
    this.todos = [];
    // this.taskListData = new LocalStore('taskListData');
    // this.taskListModel = this.getTaskListModel();
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
    await create(task);
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
  async updateTodo(id, newEditTaskName) {
    const taskSelected = this.todos.find((todo) => todo.id === id);

    taskSelected.taskName = newEditTaskName || taskSelected.taskName;
    await update(id, taskSelected);
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

    this.todos.forEach(async (todo) => {
      await update(todo.id, todo);
    });
  }

  // Filter list todo type filter
  async filterModeTodos(filter) {
    const listTodos = await this.getTodo();

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
    const newTodos = this.todos.filter((task) => task.isCompleted);

    newTodos.forEach(async (todo) => {
      await remove(todo.id);
    });
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
