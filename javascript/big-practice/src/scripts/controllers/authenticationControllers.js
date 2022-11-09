import { authService } from '../helper/authService';

export default class AuthenticationController {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.onLogin = this.onLogin.bind(this);
    this.onLogout = this.onLogout.bind(this);
  }

  init(handlerRender) {
    this.renderForm = handlerRender;
    this.view.bindOpenLoginForm();
    this.view.bindCloseLoginForm();
    this.view.showHideStatus();

    // Login
    this.view.bindLogin(this.onLogin);

    // Logout
    this.view.bindLogout(this.onLogout);
  }

  /**
   * Handle login
   * @param {*} email
   * @param {*} password
   */
  async onLogin(email, password) {
    const check = await this.model.checkUserByEmail(email, password);
    if (check) {
      this.view.closeLoginForm();
      this.view.showHideStatus();
      this.renderForm();
    } else {
      this.view.login.reset();
      this.view.removeMsg();
    }
  }

  /**
   * Handle logout
   */
  async onLogout() {
    authService.removeUser();
    await this.renderForm();
  }
}
