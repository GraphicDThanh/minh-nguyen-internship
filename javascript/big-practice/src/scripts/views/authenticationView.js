// import { ERROR_MSG } from '../constants/messages';
import LocalStore from '../helper/localstorage';
import Validate from '../helper/validate';

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
    const validate = new Validate();
    const isEmail = validate.validEmail(this.emailInput, this.rulesEmail);
    const isPass = validate.validPassword(this.passwordInput, this.rulesPassword);

    if (isEmail && isPass) {
      handler(this.emailInput, this.passwordInput);
    }
  }

  /**
   * Function check empty and valid of email
   */
  // validEmail(element, rules) {
  //   let checkEmail = false;
  //   const isRules = Validate.isRules(element, rules);
  //   const isEmpty = Validate.isEmpty(element);

  //   if (isEmpty) {
  //     this.errorMsgMail.classList.remove('hidden');
  //     this.errorMsgMail.innerHTML = ERROR_MSG.EMAIL_EMPTY;
  //   } else if (isRules) {
  //     this.errorMsgMail.classList.remove('hidden');
  //     this.errorMsgMail.innerHTML = ERROR_MSG.EMAIL_INVALID;
  //   } else {
  //     this.errorMsgMail.classList.add('hidden');
  //   }

  //   if (!isRules && !isEmpty) {
  //     checkEmail = true;
  //   }

  //   return checkEmail;
  // }

  /**
   * Function check empty,valid and length of password
   */
  // validPassword(element, rules) {
  //   let checkPass = false;
  //   const isRules = Validate.isRules(element, rules);
  //   const isLength = Validate.isLength(element);
  //   const isEmpty = Validate.isEmpty(element);

  //   if (isEmpty) {
  //     this.errorMsgPass.classList.remove('hidden');
  //     this.errorMsgPass.innerHTML = ERROR_MSG.PASSWORD_EMPTY;
  //   } else if (isRules) {
  //     this.errorMsgPass.classList.remove('hidden');
  //     this.errorMsgPass.innerHTML = ERROR_MSG.PASSWORD_INVALID;
  //   } else if (isLength) {
  //     this.errorMsgPass.classList.remove('hidden');
  //     this.errorMsgPass.innerHTML = ERROR_MSG.PASSWORD_LEAST;
  //   } else {
  //     this.errorMsgPass.classList.add('hidden');
  //   }

  //   if (!isRules && !isEmpty && !isLength) {
  //     checkPass = true;
  //   }

  //   return checkPass;
  // }

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
