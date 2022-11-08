export default class AuthenticationController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    // this.taskList = todoListController;
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
  async onLogin(email, password) {
    const check = await this.model.checkUserByEmail(email, password);
    if (check) {
      this.view.closeLoginForm();
      this.view.showHideStatus();
      // this.taskList.renderForm();
    }
    return check;
  }

  // Handle logout
  onLogout() {
    this.model.userId.removeItemLocalStorage();
    // this.taskList.renderForm();
  }
}
