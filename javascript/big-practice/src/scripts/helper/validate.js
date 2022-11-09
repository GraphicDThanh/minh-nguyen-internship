import { ERROR_MSG } from '../constants/messages';

export default class Validate {
  constructor() {
    this.errorMsgMail = document.getElementById('msg-error-email');
    this.errorMsgPass = document.getElementById('msg-error-password');

    this.rulesEmail = /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    this.rulesPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{1,}$/g;
  }

  /**
   * Function check rules of input
   * @param {String} value from input
   * @param {String} rules is rules of each filed
   *
   * @returns {Boolean} isError
   */
  static checkRules(value, rules) {
    let isError = false;

    if (!value.match(rules)) {
      isError = true;
    }
    return isError;
  }

  /**
   * Function check empty of input
   *
   * @param {String} value from input
   *
   * @returns {Boolean} isError
   */
  static checkEmpty(value) {
    let isError = false;

    if (value === '') {
      isError = true;
    }
    return isError;
  }

  /**
   * Function check length if length of input less than 8
   *
   * @param {String} value from input
   *
   * @returns {Boolean} isError
   */
  static checkLength(value) {
    let isError = false;

    if (value.length < 8) {
      isError = true;
    }
    return isError;
  }

  /**
   * Function check empty and valid of email
   * @param {*} element inout email
   * @param {*} rules rules of email
   *
   * @returns {boolean} checkEmail
   */
  validateEmail(element) {
    let checkEmail = false;
    const isRules = Validate.checkRules(element, this.rulesEmail);
    const isEmpty = Validate.checkEmpty(element);

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
   * @param {*} element input password
   * @param {*} rules rules of password
   *
   * @returns {boolean} checkPass
   */
  validatePassword(element) {
    let checkPass = false;
    const isRules = Validate.checkRules(element, this.rulesPassword);
    const isLength = Validate.checkLength(element);
    const isEmpty = Validate.checkEmpty(element);

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
}
