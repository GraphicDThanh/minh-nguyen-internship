export default class TodoListController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  init() {
    this.view.renders(this.model.tasks);
  }
}
