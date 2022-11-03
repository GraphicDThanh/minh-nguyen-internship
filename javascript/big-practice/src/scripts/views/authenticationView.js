/**
 * LOGIN FORM
 * Open and close the form
 * Form validation
 */
import { getUser } from '../helper/fetchApi';

export default class AuthenticationView {
  constructor() {
    this.successMsg = document.getElementById('success-msg');
    this.errorMsg = document.getElementById('error-msg');

    this.showLoginBtn = document.getElementById('show-login-btn');
    this.loginForm = document.getElementById('login-form');
    this.closeFormBtn = document.getElementById('close-btn');

    this.login = document.getElementById('login');
    this.email = document.getElementById('input-email');
    this.password = document.getElementById('input-password');
    this.loginBtn = document.getElementById('login-btn');
    this.logoutBtn = document.getElementById('logout-btn');

    this.logBlock = document.getElementById('log-block');

    this.loginMode = true;
  }

  /**
   * Open login form
   */
  bindOpenLoginForm() {
    this.showLoginBtn.addEventListener('click', () => {
      this.loginForm.classList.remove('hidden');
    });
  }

  /**
   * Function for close login form
   */
  closeLoginForm(event) {
    event.preventDefault();
    this.loginForm.classList.add('hidden');
    this.login.reset();
    this.removeMsg();
    this.loginMode = true;
  }

  /**
   * Assign close login form to close button
   */
  bindCloseLoginForm() {
    this.closeFormBtn.addEventListener('click', (event) => {
      this.closeLoginForm(event);
    });
  }

  /**
   * Get value from input email and password
   */
  get emailInput() {
    return this.email.value.trim();
  }

  get passwordInput() {
    return this.password.value.trim();
  }

  /**
   * Insert messages when login
   * @param {string} content
   * @param {boolean} successMsg / is this a message for success
   */
  insertMsg(content, isSuccessMsg) {
    if (isSuccessMsg) {
      this.successMsg.textContent = content;
      this.successMsg.classList.remove('hidden');
      this.errorMsg.classList.add('hidden');
    } else {
      this.errorMsg.textContent = content;
      this.successMsg.classList.add('hidden');
      this.errorMsg.classList.remove('hidden');
    }
  }

  /**
   * Remove messages when login
   */
  removeMsg() {
    this.successMsg.classList.add('hide');
    this.errorMsg.classList.add('hide');
  }

  /**
   * Validate password
   * @param {callback} handler / function for loading user data
   * @param {event} event
   */
  async validationLoginForm() {
    // Get users list from JSON
    const users = await getUser();
    let isSuccessMsg = true;

    const checkUser = users.find(
      (user) => user.userEmail === this.emailInput && user.password === this.passwordInput
    );

    if (!checkUser) {
      console.log('Fail');
      isSuccessMsg = false;
      this.insertMsg('Email address or password is wrong, please check again', isSuccessMsg);
    }
    console.log('Success');
    return checkUser;
  }

  /**
   * Login
   */
  bindLogin(handler) {
    this.login.addEventListener('submit', async (event) => {
      event.preventDefault();
      const user = await this.validationLoginForm();
      if (user) {
        handler(user.id);
        this.removeMsg();
        this.closeLoginForm(event);
        this.logoutBtn.classList.remove('hidden');
        this.showLoginBtn.classList.add('hidden');
      }
    });
  }
}
