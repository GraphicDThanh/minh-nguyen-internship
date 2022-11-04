export default class AuthenticationController {
  constructor(view, model, todoListController) {
    this.view = view;
    this.model = model;
    this.taskList = todoListController;
    this.onLogin = this.onLogin.bind(this);
    this.onLogout = this.onLogout.bind(this);
  }

  init() {
    this.view.bindOpenLoginForm();
    this.view.bindCloseLoginForm();
    this.view.showHideStatus();

    // Login
    this.view.bindLogin(this.onLogin);

    // Logout
    this.view.bindLogout(this.onLogout);
  }

  // Handle login
  onLogin(id) {
    this.model.onUser = id;
    this.model.authen.setItemLocalStorage(id);
    this.taskList.renderForm();
  }

  // Handle logout
  onLogout() {
    this.model.authen.removeItemLocalStorage();
    this.taskList.renderForm();
  }
}
