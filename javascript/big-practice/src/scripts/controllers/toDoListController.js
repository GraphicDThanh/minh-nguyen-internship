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
    this.view.bindUpdateTodo();
    this.view.bindUpdateTodo(() => {
      this.onUpdateTodo(this.view.idSelected, this.view.editcontent);
    });
  }

  // Handle add task
  onAddTask(todoText) {
    this.model.addTodo(todoText);
    this.view.displayTaskList(this.model.todos);
  }

  // Handle delete task
  onDeleteTask(id) {
    this.model.deleteTodo(id);
    this.view.displayTaskList(this.model.todos);
  }

  // Handle done task
  onToggleTodo(id) {
    this.model.toggleTodo(id);
    this.view.displayTaskList(this.model.todos);
  }

  onUpdateTodo(id, editTask) {
    this.model.editTaskList(id, editTask);
    this.view.displayTaskList(this.model.todos);
  }
}
