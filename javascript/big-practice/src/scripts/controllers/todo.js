class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  function init() {
   this.view.renders(this.model.view);
}
