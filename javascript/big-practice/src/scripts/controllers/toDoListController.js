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
      this.handleDeleteTask(this.view.idSelected);
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
      this.handleFilter(this.view.idSelected);
    });
  }

  // Add task
  handleAddTask(todoText, filterType) {
    this.model.addTodo(todoText);
    this.todos = this.model.filterTodos(filterType);
    this.view.displayTaskList(this.todos);
  }

  // Delete task
  handleDeleteTask(id) {
    this.model.deleteTodo(id);
    this.view.displayTaskList(this.model.todos);
  }

  // Done task
  handleToggleTodo(id, filterType) {
    this.model.toggleTodo(id);
    this.todos = this.model.filterTodos(filterType);
    this.view.displayTaskList(this.todos);
  }

  // Update task after edit task
  handleUpdateTodo(id, editTask, filterType) {
    this.model.updateTodo(id, editTask);
    this.todos = this.model.filterTodos(filterType);
    this.view.displayTaskList(this.todos);
  }

  // Toggle all tasks
  handleToggleCheckAll(isToggleAll, filterType) {
    this.model.toggleCheckAll(isToggleAll);
    this.todos = this.model.filterTodos(filterType);
    this.view.displayTaskList(this.todos);
  }

  // Filter list task
  handleFilter(filterType) {
    this.todos = this.model.filterTodos(filterType);
    this.view.displayTaskList(this.todos);
  }
}
