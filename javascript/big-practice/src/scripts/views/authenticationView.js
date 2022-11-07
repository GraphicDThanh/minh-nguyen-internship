/**
 * LOGIN FORM
 * Open and close the form
 * Form validation
 */
import { getUser } from '../helper/fetchApi';
import LocalStore from '../helper/localStorage';
import STORAGE_KEYS from '../constants/storageKeys';

export default class AuthenticationView {
  constructor() {
    this.successMsg = document.getElementById('msg-success');
    this.errorMsg = document.getElementById('msg-error');

    this.showLoginBtn = document.getElementById('btn-show-login');
    this.loginForm = document.getElementById('login-form');
    this.closeFormBtn = document.getElementById('btn-close-form');

    this.login = document.getElementById('login');
    this.email = document.getElementById('input-email');
    this.password = document.getElementById('input-password');
    this.loginBtn = document.getElementById('btn-login');
    this.logoutBtn = document.getElementById('btn-logout');

    this.logBlock = document.getElementById('log-block');

    this.loginMode = false;

    this.userId = new LocalStore(STORAGE_KEYS.USER_ID);
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
    this.successMsg.classList.add('hidden');
    this.errorMsg.classList.add('hidden');
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
   * Show / Hide button login/logout if have user
   */
  showHideStatus() {
    if (this.userId.getItemLocalStorage()) {
      this.logoutBtn.classList.remove('hidden');
      this.showLoginBtn.classList.add('hidden');
    } else {
      this.showLoginBtn.classList.remove('hidden');
      this.logoutBtn.classList.add('hidden');
    }
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
        this.showHideStatus();
      }
    });
  }

  /**
   * Logout
   */
  bindLogout(handler) {
    this.logoutBtn.addEventListener('click', () => {
      handler();
      this.showHideStatus();
    });
  }
}
