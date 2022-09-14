export default class TodoListController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  init() {
    // Explicit this binding
    this.view.displayTaskList(this.model.todos);
    this.view.bindAddTodo(this.onAddTask);
    // this.view.bindAddTodo(() => {
    //   this.onAddTask(this.view.todoText);
    // });
  }

  // Handle add task
  onAddTask = (todoText) => {
    this.model.addTodo(todoText);
    this.view.displayTaskList(this.model.todos);
  }
}
