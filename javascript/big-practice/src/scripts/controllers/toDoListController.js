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
    this.view.bindToggleTodo(() => this.model.toggleTodo(this.view.idSelected));
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
}
