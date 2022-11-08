import { ERROR_MSG } from '../constants/messages';
import LocalStore from '../helper/localstorage';
/**
 * LOGIN FORM
 * Open and close the form
 * Form validation
 */

export default class AuthenticationView {
  constructor() {
    this.userId = new LocalStore('userId');

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

    this.rulesEmail = /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    this.rulesPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{1,}$/g;
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
   * Close login form to close button
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
    // event.preventDefault();
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
   * Get value from input email and password
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
  async bindLogin(handler) {
    this.login.addEventListener('submit', async (event) => {
      event.preventDefault();
      this.validateForm(handler);
    });
  }

  /**
   * Function check valid of email and password
   *
   * @param {function} handler
   */
  validateForm(handler) {
    const email = this.validEmail();
    const pass = this.validPassword();

    if (email && pass) {
      handler(this.emailInput, this.passwordInput);
    }
  }

  /**
   * Function check empty and valid of email
   */
  validEmail() {
    let checkEmail = false;
    const isRules = this.isRules(this.emailInput, this.rulesEmail);
    const isEmpty = this.isEmpty(this.emailInput);

    if (isEmpty) {
      this.errorMsgMail.classList.remove('hidden');
      this.errorMsgMail.innerHTML = ERROR_MSG.EMAIL_EMPTY;
    } else if (isRules) {
      this.errorMsgMail.classList.remove('hidden');
      this.errorMsgMail.innerHTML = ERROR_MSG.EMAIL_INVALID;
    } else {
      this.errorMsgMail.classList.add('hidden');
    }

    if (!isRules && !isEmpty) {
      checkEmail = true;
    }

    return checkEmail;
  }

  /**
   * Function check empty,valid and length of password
   */
  validPassword() {
    let checkPass = false;
    const isRules = this.isRules(this.passwordInput, this.rulesPassword);
    const isLength = this.isLength(this.passwordInput);
    const isEmpty = this.isEmpty(this.passwordInput);

    if (isEmpty) {
      this.errorMsgPass.classList.remove('hidden');
      this.errorMsgPass.innerHTML = ERROR_MSG.PASSWORD_EMPTY;
    } else if (isRules) {
      this.errorMsgPass.classList.remove('hidden');
      this.errorMsgPass.innerHTML = ERROR_MSG.PASSWORD_INVALID;
    } else if (isLength) {
      this.errorMsgPass.classList.remove('hidden');
      this.errorMsgPass.innerHTML = ERROR_MSG.PASSWORD_LEAST;
    } else {
      this.errorMsgPass.classList.add('hidden');
    }

    if (!isRules && !isEmpty && !isLength) {
      checkPass = true;
    }

    return checkPass;
  }

  /**
   * Function check rules of input
   *
   * @param {String} value from input
   * @param {String} rules is rules of each filed
   *
   * @returns {Boolean} isError
   */
  isRules(value, rules) {
    let isError = false;

    if (!value.match(rules)) {
      isError = true;
    }
    return isError;
  }

  /**
   * @description function check empty of input
   *
   * @param {String} value from input
   *
   * @returns {Boolean} isError
   */
  isEmpty(value) {
    let isError = false;

    if (value === '') {
      isError = true;
    }
    return isError;
  }

  /**
   * @description function check length if length of input less than 8
   *
   * @param {String} value from input
   *
   * @returns {Boolean} isError
   */
  isLength(value) {
    let isError = false;

    if (value.length < 8) {
      isError = true;
    }
    return isError;
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
