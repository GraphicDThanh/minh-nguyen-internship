export default class TodoListController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.onAddTask = this.onAddTask.bind(this);
  }

  init() {
    // Explicit this binding
    this.view.displayTaskList(this.model.todos);
    this.view.bindAddTodo(this.onAddTask);
  }

  // Handle add task
  onAddTask(todoText) {
    this.model.addTodo(todoText);
    this.view.displayTaskList(this.model.todos);
  }
}
