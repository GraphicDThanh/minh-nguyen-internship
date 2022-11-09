import TodoItemModel from './todoItemModel';
import LocalStore from '../helper/localstorage';
import STORAGE_KEYS from '../constants/storageKeys';

export default class TodoListModelLocal {
  constructor() {
    this.taskListData = new LocalStore(STORAGE_KEYS.TASK_LIST_DATA);
    this.tasks = this.taskListData.getItemLocalStorage() || [];
    this.taskListData.setItemLocalStorage(this.tasks);
  }

  /**
   * Count task active
   * @returns {number} number of active tasks
   */
  countTaskActive() {
    return this.tasks.filter((task) => !task.isCompleted).length;
  }

  /**
   * Count task active
   * @returns {number} number of completed tasks
   */
  countTaskCompleted() {
    return this.tasks.filter((task) => task.isCompleted).length;
  }

  /**
   * Add new task
   * @param {*} todoText task name from input
   */
  addTodo(todoText) {
    const todoAdded = {
      id: new Date().getTime().toString(),
      taskName: todoText,
      isCompleted: false,
    };
    const task = new TodoItemModel(todoAdded);

    this.tasks.push(task);
    this.taskListData.setItemLocalStorage(this.tasks);
  }

  /**
   * Delete task
   * @param {*} id id of task selected
   */
  deleteTodo(id) {
    const index = this.tasks.findIndex((task) => task.id === id);

    this.tasks.splice(index, 1);
    this.taskListData.setItemLocalStorage(this.tasks);
  }

  /**
   * Done task
   * @param {*} id id of task selected
   */
  toggleTodo(id) {
    const taskSelected = this.tasks.find((todo) => todo.id === id);

    taskSelected.isCompleted = !taskSelected.isCompleted;
    this.taskListData.setItemLocalStorage(this.tasks);
  }

  /**
   * Edit task
   * @param {*} id id of task selected
   * @param {*} newEditTaskName new task name from input
   */
  updateTodo(id, newEditTaskName) {
    const taskSelected = this.tasks.find((task) => task.id === id);

    taskSelected.taskName = newEditTaskName || taskSelected.taskName;
    this.taskListData.setItemLocalStorage(this.tasks);
  }

  /**
   * Toggle check all todos
   * @param {*} isToggleAll status of toggleAll button
   */
  toggleCheckAll(isToggleAll) {
    this.tasks.forEach((task) => {
      const taskElement = task;
      if (isToggleAll) {
        taskElement.isCompleted = true;
      } else {
        taskElement.isCompleted = false;
      }
    });
    this.taskListData.setItemLocalStorage(this.tasks);
  }

  /**
   * Filter list todo type filter
   * @param {*} filter filter button
   * @returns {object} listlist filter
   */
  filterModeTodos(filter) {
    if (filter === 'completed') {
      this.filterType = filter;
      const completedTask = this.tasks.filter((task) => task.isCompleted);

      return completedTask;
    }
    if (filter === 'active') {
      this.filterType = filter;
      const activeTask = this.tasks.filter((task) => !task.isCompleted);

      return activeTask;
    }
    return this.tasks;
  }

  /**
   * Delete all completed task
   */
  deleteCompletedTodos() {
    const listActive = this.tasks.filter((task) => !task.isCompleted);
    this.tasks = listActive;

    this.taskListData.setItemLocalStorage(this.tasks);
  }
}
