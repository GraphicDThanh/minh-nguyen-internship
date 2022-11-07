import TodoItemModel from './todoItemModel';
import LocalStore from '../helper/localStorage';
import STORAGE_KEYS from '../constants/storageKeys';
import { getTasksByUser, getTasksById, create, update, remove } from '../helper/fetchApi';

export default class TodoListModel {
  constructor() {
    this.taskListData = new LocalStore(STORAGE_KEYS.TASK_LIST_DATA);
    this.userId = new LocalStore(STORAGE_KEYS.USER_ID);
    this.onUser = this.userId.getItemLocalStorage();
    if (!this.userId.getItemLocalStorage()) {
      this.notes =
        this.taskListData.getItemLocalStorage() || this.taskListData.setItemLocalStorage([]);
    }
    this.taskListModel = this.getTaskListModel();
  }

  // Get data form JSON server or localStorage
  async getTaskListModel() {
    if (this.onUser) {
      const todos = await getTasksByUser(this.onUser);
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
  async addTodo(todoText) {
    if (this.onUser !== null) {
      const todoAdded = {
        id: new Date().getTime().toString(),
        taskName: todoText,
        isCompleted: false,
        userID: this.onUser,
      };
      await create(todoAdded);
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
  }

  // Delete task
  async deleteTodo(id) {
    if (this.onUser !== null) {
      const task = await getTasksById(id);

      if (task) {
        await remove(id);
      }
    } else {
      const index = this.notes.findIndex((task) => task.id === id);

      this.notes.splice(index, 1);
      this.taskListData.setItemLocalStorage(this.notes);
    }
  }

  // Done task
  async toggleTodo(id) {
    if (this.onUser !== null) {
      const task = await getTasksById(id);

      task.isCompleted = !task.isCompleted;
      await update(id, task);
    } else {
      const taskSelected = this.notes.find((todo) => todo.id === id);

      taskSelected.isCompleted = !taskSelected.isCompleted;
      this.taskListData.setItemLocalStorage(this.notes);
    }
  }

  // Edit task
  async updateTodo(id, newEditTaskName) {
    if (this.onUser !== null) {
      const task = await getTasksById(id);

      task.taskName = newEditTaskName || task.taskName;
      await update(id, task);
    } else {
      const taskSelected = this.notes.find((todo) => todo.id === id);

      taskSelected.taskName = newEditTaskName || taskSelected.taskName;
      this.taskListData.setItemLocalStorage(this.notes);
    }
  }

  // Toggle check all todos
  async toggleCheckAll(isToggleAll) {
    if (this.onUser !== null) {
      const tasks = await this.getTaskListModel();

      tasks.forEach(async (task) => {
        // task.isCompleted = isToggleAll;
        if (isToggleAll) {
          task.isCompleted = true;
        } else {
          task.isCompleted = false;
        }
        await update(task.id, task);
      });
    } else {
      this.notes.forEach((note) => {
        if (isToggleAll) {
          note.isCompleted = true;
        } else {
          note.isCompleted = false;
        }
      });
      this.taskListData.setItemLocalStorage(this.notes);
    }
  }

  // Filter list todo type filter
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

  // Delete completed task
  async deleteCompletedTodos() {
    if (this.onUser !== null) {
      const tasks = await this.getTaskListModel();
      const tasksComplete = tasks.filter((task) => task.isCompleted);

      tasksComplete.forEach(async (task) => {
        await remove(task.id, task);
      });
    } else {
      const listActive = this.notes.filter((note) => !note.isCompleted);
      this.notes = listActive;

      this.taskListData.setItemLocalStorage(this.notes);
    }
  }
}
