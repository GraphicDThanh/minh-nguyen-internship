import { authService } from '../service/authService';

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
   * @param {string} email
   * @param {string} password
   */
  async onLogin(email, password) {
    const check = await this.model.isValidUser(email, password);

    if (check) {
      this.view.showMessageLogin(true);
      this.view.closeLoginForm();
      this.view.showHideStatus();
      this.renderForm();
    } else {
      this.view.login.reset();
      this.view.showMessageLogin(false);
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
