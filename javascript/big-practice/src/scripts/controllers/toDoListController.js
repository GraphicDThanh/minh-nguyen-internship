export default class TodoListController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.onAddTask = this.onAddTask.bind(this);
    this.deleteTask = this.onDeleteTask.bind(this);
  }

  init() {
    // Explicit this binding
    this.view.displayTaskList(this.model.todos);
    this.view.bindAddTodo(this.onAddTask);
    this.view.bindDeleteTodo(this.onDeleteTask);
  }

  // Handle add task
  onAddTask(todoText) {
    this.model.addTodo(todoText);
    this.view.displayTaskList(this.model.todos);
  }

  // Handle delete task
  onDeleteTask(id) {
    this.model.deleteTask(id);
    this.view.displayTaskList(this.model.todos);
  }
}
