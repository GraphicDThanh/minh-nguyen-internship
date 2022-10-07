export default class TodoListController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.handleAddTask = this.handleAddTask.bind(this);
    this.handleDeleteTask = this.handleDeleteTask.bind(this);
  }

  init() {
    // Explicit this binding
    this.view.displayTaskList(this.model.todos);
    this.view.bindAddTodo(this.handleAddTask);
    this.view.bindDeleteTodo(() => {
      this.handleDeleteTask(this.view.idSelected);
    });
    this.view.bindToggleTodo(() => {
      this.handleToggleTodo(this.view.idSelected);
    });
    this.view.editTodo();
    this.view.bindUpdateTodo(() => {
      this.handleUpdateTodo(this.view.idSelected, this.view.contentEdit);
    });
    this.view.bindToggleCheckAll(() => {
      this.handleToggleCheckAll(this.view.isToggleAll);
    });
    // this.view.bindListCompleted(() => {
    //   this.onListCompleted();
    // });
    this.view.bindFilters(() => {
      this.handleFilter(this.view.idSelected);
    });
    // this.view.bindFilters();
  }

  // Add task
  handleAddTask(todoText) {
    this.model.addTodo(todoText);
    this.view.displayTaskList(this.model.todos);
  }

  // Delete task
  handleDeleteTask(id) {
    this.model.deleteTodo(id);
    this.view.displayTaskList(this.model.todos);
  }

  // Done task
  handleToggleTodo(id) {
    this.model.toggleTodo(id);
    this.view.displayTaskList(this.model.todos);
  }

  // Update task after edit task
  handleUpdateTodo(id, editTask) {
    this.model.updateTodo(id, editTask);
    this.view.displayTaskList(this.model.todos);
  }

  // Toggle all tasks
  handleToggleCheckAll(isToggleAll) {
    this.model.toggleCheckAll(isToggleAll);
    this.view.displayTaskList(this.model.todos);
  }

  // Call listCompleted func from models
  // onListCompleted() {
  //   this.todos = this.model.listCompleted();
  //   this.view.displayTaskList(this.todos);
  // }

  // Filter list task
  handleFilter(filterType) {
    this.todos = this.model.filterTodos(filterType);
    this.view.displayTaskList(this.todos);
  }
}
