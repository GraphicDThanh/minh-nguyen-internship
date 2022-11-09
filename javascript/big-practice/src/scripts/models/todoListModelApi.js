/* eslint-disable class-methods-use-this */
import LocalStore from '../helper/localstorage';
import STORAGE_KEYS from '../constants/storageKeys';
import AuthService from '../helper/authService';
import { getTasksByUser, getTasksById, create, update, remove } from '../helper/fetchApi';

export default class TodoListModelApi {
  constructor() {
    this.taskListData = new LocalStore(STORAGE_KEYS.TASK_LIST_DATA);
  }

  /**
   * Get data form JSON server
   * @returns {object} data from server
   */
  async getTaskListModel() {
    const todos = await getTasksByUser(AuthService.getUser());
    return todos;
  }

  /**
   * Count task active
   * @returns {number} number of active tasks
   */
  async countTaskActive() {
    const listTodos = await this.getTaskListModel();

    return listTodos.filter((task) => !task.isCompleted).length;
  }

  /**
   * Count task active
   * @returns {number} number of completed tasks
   */
  async countTaskCompleted() {
    const listTodos = await this.getTaskListModel();

    return listTodos.filter((task) => task.isCompleted).length;
  }

  /**
   * Add new task
   * @param {*} todoText task name from input
   */
  async addTodo(todoText) {
    const todoAdded = {
      id: new Date().getTime().toString(),
      taskName: todoText,
      isCompleted: false,
      userID: AuthService.getUser(),
    };
    await create(todoAdded);
  }

  /**
   * Delete task
   * @param {*} id id of task selected
   */
  async deleteTodo(id) {
    const task = await getTasksById(id);

    if (task) {
      await remove(id);
    }
  }

  /**
   * Done task
   * @param {*} id id of task selected
   */
  async toggleTodo(id) {
    const task = await getTasksById(id);

    task.isCompleted = !task.isCompleted;
    await update(id, task);
  }

  /**
   * Edit task
   * @param {*} id id of task selected
   * @param {*} newEditTaskName new task name from input
   */
  async updateTodo(id, newEditTaskName) {
    const task = await getTasksById(id);

    task.taskName = newEditTaskName || task.taskName;
    await update(id, task);
  }

  /**
   * Toggle check all todos
   * @param {*} isToggleAll status of toggleAll button
   */
  async toggleCheckAll(isToggleAll) {
    const tasks = await this.getTaskListModel();

    tasks.forEach(async (task) => {
      const taskElement = task;
      if (isToggleAll) {
        taskElement.isCompleted = true;
      } else {
        taskElement.isCompleted = false;
      }
      await update(task.id, task);
    });
  }

  /**
   * Filter list todo type filter
   * @param {*} filter filter button
   * @returns {object} listlist filter
   */
  async filterModeTodos(filter) {
    const listTodos = await this.getTaskListModel();

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

  /**
   * Delete all completed task
   */
  async deleteCompletedTodos() {
    const tasks = await this.getTaskListModel();
    const tasksComplete = tasks.filter((task) => task.isCompleted);

    tasksComplete.forEach(async (task) => {
      await remove(task.id, task);
    });
  }
}
