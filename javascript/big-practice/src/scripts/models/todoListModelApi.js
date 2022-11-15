/* eslint-disable class-methods-use-this */
import STORAGE_KEYS from '../constants/storageKeys';
import LocalStorage from '../helper/localStorage';
import { authService } from '../helper/authService';
import { getTasksByUser, getTasksById, create, update, remove } from '../helper/fetchApi';

export default class TodoListModelApi {
  constructor() {
    this.taskListData = new LocalStorage(STORAGE_KEYS.TASK_LIST_DATA);
  }

  /**
   * Function get data form JSON server
   * @returns {object} data from server
   */
  async getTaskListModel() {
    return getTasksByUser(authService.getUser());
  }

  /**
   * Function count task active
   * @returns {number} number of active tasks
   */
  async countTaskActive() {
    const listTodos = await this.getTaskListModel();

    return listTodos.filter((task) => !task.isCompleted).length;
  }

  /**
   * Function count task active
   * @returns {number} number of completed tasks
   */
  async countTaskCompleted() {
    const listTodos = await this.getTaskListModel();

    return listTodos.filter((task) => task.isCompleted).length;
  }

  /**
   * Function add new task
   * @param {*} todoText task name from input
   */
  async addTodo(todoText) {
    const todoAdded = {
      taskName: todoText,
      isCompleted: false,
      userID: authService.getUser(),
    };

    await create(todoAdded);
  }

  /**
   * Function delete task
   * @param {*} id id of task selected
   */
  async deleteTodo(id) {
    const task = await getTasksById(id);

    if (task) {
      await remove(id);
    }
  }

  /**
   * Function done task
   * @param {*} id id of task selected
   */
  async toggleTodo(id) {
    const task = await getTasksById(id);

    task.isCompleted = !task.isCompleted;
    await update(id, task);
  }

  /**
   * Function edit task
   * @param {*} id id of task selected
   * @param {*} newEditTaskName new task name from input
   */
  async updateTodo(id, newEditTaskName) {
    const task = await getTasksById(id);

    task.taskName = newEditTaskName || task.taskName;
    await update(id, task);
  }

  /**
   * Function toggle check all todos
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
   * Function filter list todo type filter
   * @param {*} filter filter button
   *
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
   * Function delete all completed task
   */
  async deleteCompletedTodos() {
    const tasks = await this.getTaskListModel();
    const tasksComplete = tasks.filter((task) => task.isCompleted);

    tasksComplete.forEach(async (task) => {
      await remove(task.id, task);
    });
  }
}
