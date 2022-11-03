export default class AuthenticationController {
  constructor(view, model, todoListController) {
    this.view = view;
    this.model = model;
    this.taskList = todoListController;
    this.onLogin = this.onLogin.bind(this);
  }

  init() {
    this.view.bindOpenLoginForm();
    this.view.bindCloseLoginForm();

    // Login
    this.view.bindLogin(this.onLogin);
  }

  // Handle login
  async onLogin(id) {
    this.model.onUser = id;
    this.model.authen.setItemLocalStorage(id);
    this.taskList.renderForm();
  }
}
