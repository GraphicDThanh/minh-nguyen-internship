export default class TodoListController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.onAddTask = this.onAddTask.bind(this);
    this.onDeleteTask = this.onDeleteTask.bind(this);
  }

  init() {
    // Explicit this binding
    this.view.displayTaskList(this.model.todos);
    this.view.bindAddTodo(this.onAddTask);
    this.view.bindDeleteTodo(() => {
      this.onDeleteTask(this.view.idSelected);
    });
    this.view.bindToggleTodo(() => {
      this.onToggleTodo(this.view.idSelected);
    });
    this.view.editTodo();
    this.view.bindUpdateTodo(() => {
      this.onUpdateTodo(this.view.idSelected, this.view.contentEdit);
    });
    this.view.bindToggleCheckAll(() => {
      this.onToggleCheckAll(this.view.isToggleAll);
    });
    // this.view.bindListCompleted(() => {
    //   this.onListCompleted();
    // });
    this.view.bindFilters();
  }

  // Add task
  onAddTask(todoText) {
    this.model.addTodo(todoText);
    this.view.displayTaskList(this.model.todos);
  }

  // Delete task
  onDeleteTask(id) {
    this.model.deleteTodo(id);
    this.view.displayTaskList(this.model.todos);
  }

  // Done task
  onToggleTodo(id) {
    this.model.toggleTodo(id);
    this.view.displayTaskList(this.model.todos);
  }

  // Update task after edit task
  onUpdateTodo(id, editTask) {
    this.model.updateTodo(id, editTask);
    this.view.displayTaskList(this.model.todos);
  }

  // Toggle all tasks
  onToggleCheckAll(isToggleAll) {
    this.model.toggleCheckAll(isToggleAll);
    this.view.displayTaskList(this.model.todos);
  }

  // Call listCompleted func from models
  onListCompleted() {
    this.todos = this.model.listCompleted();
    this.view.displayTaskList(this.todos);
  }
}
