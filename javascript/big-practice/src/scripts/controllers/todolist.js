export default class TodoListController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  init() {
    this.view.displayTaskList(this.model.todos);
    // Explicit this binding
    this.view.bindAddTodo(this.onAddTask);
  }

  // Handle add task
  onAddTask(todoText) {
    this.model.onAddTask(todoText);
    this.view.displayTaskList(this.model.todos);
  }
}
