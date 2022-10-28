export default class TodoListController {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    // bind this in model
    this.handleDeleteTask = this.handleDeleteTask.bind(this);
    this.handleToggleTodo = this.handleToggleTodo.bind(this);
    this.handleUpdateTodo = this.handleUpdateTodo.bind(this);
  }

  init() {
    // Explicit this binding
    this.renderForm();
    this.view.bindAddTodo((todoText) => {
      this.handleAddTask(todoText, this.model.filterType);
    });
    this.view.bindToggleCheckAll((isToggleAll) => {
      this.handleToggleCheckAll(isToggleAll, this.model.filterType);
    });
    this.view.bindFilters((idSelected) => {
      this.renderForm(idSelected);
    });
    this.view.bindDeleteAllTodo(() => {
      this.handleClearCompleted(this.model.filterType);
    });
  }

  // Render board task list
  async renderForm(filterType) {
    const handlers = {
      handleDeleteTask: this.handleDeleteTask,
      handleToggleTodo: this.handleToggleTodo,
      handleUpdateTodo: this.handleUpdateTodo,
    };
    const todos = await this.model.filterModeTodos(filterType);

    this.view.showTaskActive(await this.model.countTaskActive());
    this.view.displayTaskList(
      await todos,
      await this.model.countTaskCompleted(),
      handlers,
      filterType
    );
    // this.saveData();
  }

  // Save data to LocalStorage
  saveData() {
    this.model.taskListData.setItemLocalStorage(this.model.taskListModel);
  }

  // Handle add task
  async handleAddTask(todoText, filterType) {
    await this.model.addTodo(todoText);
    this.renderForm(filterType);
  }

  // Handle delete task
  async handleDeleteTask(id, filterType) {
    await this.model.deleteTodo(id);
    this.renderForm(filterType);
  }

  // Handle done task
  async handleToggleTodo(id, filterType) {
    await this.model.toggleTodo(id);
    this.renderForm(filterType);
  }

  // Handle update content after edit
  async handleUpdateTodo(id, newTaskName, filterType) {
    await this.model.updateTodo(id, newTaskName);
    this.renderForm(filterType);
  }

  // Handle toggle all tasks
  handleToggleCheckAll(isToggleAll, filterType) {
    this.model.toggleCheckAll(isToggleAll);
    this.renderForm(filterType);
  }

  // Handle clear task completed
  handleClearCompleted(filterType) {
    this.model.deleteCompletedTodos();
    this.renderForm(filterType);
  }
}
