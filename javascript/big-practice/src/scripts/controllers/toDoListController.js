export default class TodoListController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  init() {
    // Explicit this binding
    this.view.bindAddTodo(() => {
      this.handleAddTask(this.view.todoText, this.model.filterType);
    });
    this.view.bindDeleteTodo(() => {
      this.handleDeleteTask(this.view.idSelected, this.model.filterType);
    });
    this.view.bindToggleTodo(() => {
      this.handleToggleTodo(this.view.idSelected, this.model.filterType);
    });
    this.view.editTodo();
    this.view.bindUpdateTodo(() => {
      this.handleUpdateTodo(this.view.idSelected, this.view.contentEdit, this.model.filterType);
    });
    this.view.bindToggleCheckAll(() => {
      this.handleToggleCheckAll(this.view.isToggleAll, this.model.filterType);
    });
    this.view.bindFilters(() => {
      this.renderForm(this.view.idSelected);
    });
    this.view.bindDeleteAllTodo(() => {
      this.handleClearCompleted(this.model.filterType);
    });
  }

  // Render board task list
  renderForm(filterType) {
    this.todos = this.model.filterModeTodos(filterType);
    this.view.showTaskActive(this.model.countTaskActive());
    this.view.displayTaskList(this.todos, this.model.countTaskCompleted());
  }

  // Handle add task
  handleAddTask(todoText, filterType) {
    this.model.addTodo(todoText);
    this.renderForm(filterType);
  }

  // Handle delete task
  handleDeleteTask(id, filterType) {
    this.model.deleteTodo(id);
    this.renderForm(filterType);
  }

  // Handle done task
  handleToggleTodo(id, filterType) {
    this.model.toggleTodo(id);
    this.renderForm(filterType);
  }

  // Handle update content after edit
  handleUpdateTodo(id, editTask, filterType) {
    this.model.updateTodo(id, editTask);
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
