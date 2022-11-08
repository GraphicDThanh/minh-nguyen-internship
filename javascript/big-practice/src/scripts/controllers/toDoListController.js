export default class TodoListController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.filterTypeButton = 'all';

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

  // Render board task list
  async renderForm() {
    console.log('render');
    const handlers = {
      handleDeleteTask: this.handleDeleteTask,
      handleToggleTodo: this.handleToggleTodo,
      handleUpdateTodo: this.handleUpdateTodo,
    };

    const filterType = this.filterTypeButton;
    const todos = await this.model.filterModeTodos(filterType);
    console.log(todos);

    this.view.showTaskActive(await this.model.countTaskActive());
    this.view.displayTaskList(todos, await this.model.countTaskCompleted(), handlers, filterType);
  }

  // Handle add task
  async handleAddTask(todoText) {
    await this.model.addTodo(todoText);
    this.renderForm();
  }

  // Handle delete task
  async handleDeleteTask(id) {
    await this.model.deleteTodo(id);
    this.renderForm();
  }

  // Handle done task
  async handleToggleTodo(id) {
    await this.model.toggleTodo(id);
    this.renderForm();
  }

  // Handle update content after edit
  async handleUpdateTodo(id, newTaskName) {
    await this.model.updateTodo(id, newTaskName);
    this.renderForm();
  }

  // Handle toggle all tasks
  async handleToggleCheckAll(isToggleAll) {
    await this.model.toggleCheckAll(isToggleAll);
    this.renderForm();
  }

  // Handle clear task completed
  async handleClearCompleted() {
    await this.model.deleteCompletedTodos();
    this.renderForm();
  }
}
