import TodoItemModel from './todoItemModel';
import LocalStore from '../helper/localStorage';
import { getTasksByUser, getTasksById, post, update, remove } from '../helper/fetchApi';

export default class TodoListModel {
  constructor() {
    this.taskListData = new LocalStore('taskListData');
    this.authen = new LocalStore('authen');
    this.onUser = this.authen.getItemLocalStorage();
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
  addTodo(todoText) {
    if (this.onUser !== null) {
      const todoAdded = {
        id: new Date().getTime().toString(),
        taskName: todoText,
        isCompleted: false,
        userID: this.onUser,
      };
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
    const listTodos = this.getTaskListModel();
    console.log('todos filter', await listTodos);

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

  // async updateData(id) {
  //   if (this.authen.getItemLocalStorage() !== null) {
  //     const data = await this.getTaskListModel();
  //     await update(id, data);
  //   } else {
  //     this.taskListData.setItemLocalStorage(this.notes);
  //   }
  // }
}
