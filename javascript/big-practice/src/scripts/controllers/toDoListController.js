import { authService } from '../helper/authService';

export default class TodoListController {
  constructor(modelApi, modelLocal, view) {
    this.modelApi = modelApi;
    this.modelLocal = modelLocal;

    this.filterTypeButton = 'all';

    this.setModel();
    this.view = view;

    // bind this in model
    this.handleDeleteTask = this.handleDeleteTask.bind(this);
    this.handleToggleTodo = this.handleToggleTodo.bind(this);
    this.handleUpdateTodo = this.handleUpdateTodo.bind(this);
  }

  async init() {
    // Explicit this binding
    this.renderForm();
    this.view.bindAddTodo((todoText) => {
      this.handleAddTask(todoText);
    });
    this.view.bindToggleCheckAll((isToggleAll) => {
      this.handleToggleCheckAll(isToggleAll);
    });
    this.view.bindFilters((selectedId) => {
      this.filterTypeButton = selectedId;
      this.renderForm(selectedId);
    });
    this.view.bindDeleteAllTodo(() => {
      this.handleClearCompleted();
    });
  }

  /**
   * Check status of userId to set data
   */
  setModel() {
    this.model = authService.checkUser() ? this.modelApi : this.modelLocal;
  }

  /**
   * Render board task list
   */
  async renderForm() {
    const handlers = {
      handleDeleteTask: this.handleDeleteTask,
      handleToggleTodo: this.handleToggleTodo,
      handleUpdateTodo: this.handleUpdateTodo,
    };

    const filterType = this.filterTypeButton;
    const todos = await this.model.filterModeTodos(filterType);

    this.view.showTaskActive(await this.model.countTaskActive());
    this.view.displayTaskList(todos, await this.model.countTaskCompleted(), handlers, filterType);
  }

  /**
   * Handle add task
   * @param {*} todoText task name form input
   */
  async handleAddTask(todoText) {
    await this.model.addTodo(todoText);
    this.renderForm();
  }

  /**
   * Handle delete task
   * @param {*} id id of task selected
   */
  async handleDeleteTask(id) {
    await this.model.deleteTodo(id);
    this.renderForm();
  }

  /**
   * Handle done task
   * @param {*} id id of task selected
   */
  async handleToggleTodo(id) {
    await this.model.toggleTodo(id);
    this.renderForm();
  }

  /**
   * Handle update content after edit
   * @param {*} id id of task selected
   * @param {*} newTaskName new name from input
   */
  async handleUpdateTodo(id, newTaskName) {
    await this.model.updateTodo(id, newTaskName);
    this.renderForm();
  }

  /**
   * Handle toggle all tasks
   * @param {*} isToggleAll status of toggleAll button
   */
  async handleToggleCheckAll(isToggleAll) {
    await this.model.toggleCheckAll(isToggleAll);
    this.renderForm();
  }

  /**
   * Handle clear task completed
   */
  async handleClearCompleted() {
    await this.model.deleteCompletedTodos();
    this.renderForm();
  }
}
