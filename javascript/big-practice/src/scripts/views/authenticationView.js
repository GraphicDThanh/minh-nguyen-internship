import { authService } from '../helper/authService';
import Validate from '../helper/validate';

/**
 * LOGIN FORM
 * Open and close the form
 * Form validation
 */
export default class AuthenticationView {
  constructor() {
    this.validate = new Validate();

    this.successMsg = document.getElementById('msg-success');
    this.errorMsgMail = document.getElementById('msg-error-email');
    this.errorMsgPass = document.getElementById('msg-error-password');

    this.showLoginBtn = document.getElementById('btn-show-login');
    this.logoutBtn = document.getElementById('btn-logout');

    this.loginForm = document.getElementById('login-form');
    this.btnCloseForm = document.getElementById('btn-close-form');
    this.login = document.getElementById('login');
    this.email = document.getElementById('input-email');
    this.password = document.getElementById('input-password');
  }

  /**
   * Bind open login form
   */
  bindOpenLoginForm() {
    this.showLoginBtn.addEventListener('click', () => {
      this.loginForm.classList.remove('hidden');
    });
  }

  /**
   * Bind close login form to close button
   */
  bindCloseLoginForm() {
    this.btnCloseForm.addEventListener('click', (event) => {
      this.closeLoginForm(event);
    });
  }

  /**
   * Function for close login form
   */
  closeLoginForm() {
    this.loginForm.classList.add('hidden');
    this.login.reset();
    this.removeMsg();
  }

  /**
   * Function remove messages when login
   */
  removeMsg() {
    this.successMsg.classList.add('hidden');
    this.errorMsgMail.classList.add('hidden');
    this.errorMsgPass.classList.add('hidden');
  }

  /**
   * Function get value from input email and password
   */
  get emailInput() {
    return this.email.value.trim();
  }

  get passwordInput() {
    return this.password.value.trim();
  }

  /**
   * Function show/hide button login/logout if have user
   */
  showHideStatus() {
    if (authService.getUser()) {
      this.logoutBtn.classList.remove('hidden');
      this.showLoginBtn.classList.add('hidden');
    } else {
      this.showLoginBtn.classList.remove('hidden');
      this.logoutBtn.classList.add('hidden');
    }
  }

  /**
   * Bind login
   * @param {function} handler
   */
  async bindLogin(handler) {
    this.login.addEventListener('submit', async (event) => {
      event.preventDefault();
      this.validateForm(handler);
    });
  }

  /**
   * Function check valid of email and password
   * @param {function} handler
   */
  validateForm(handler) {
    const isEmail = this.validate.validateEmail(this.emailInput);
    const isPass = this.validate.validatePassword(this.passwordInput);

    if (isEmail && isPass) {
      handler(this.emailInput, this.passwordInput);
    }
  }

  /**
   * Bind logout
   * @param {function} handler
   */
  bindLogout(handler) {
    this.logoutBtn.addEventListener('click', () => {
      handler();
      this.showHideStatus();
    });
  }
}
