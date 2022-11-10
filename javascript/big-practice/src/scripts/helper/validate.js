import { ERROR_MSG } from '../constants/messages';
import REGEXP from '../constants/regexp';

export default class Validate {
  constructor() {
    this.errorMsgMail = document.getElementById('msg-error-email');
    this.errorMsgPass = document.getElementById('msg-error-password');
  }

  /**
   * Function check regexp of input
   * @param {String} value from input
   * @param {String} rules is regexp of each filed
   *
   * @returns {Boolean} isError
   */
  static checkRules(value, regexp) {
    let isError = false;

    if (!value.match(regexp)) {
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
    const isRules = Validate.checkRules(element, REGEXP.REGEXP_MAIL);
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
    const isRules = Validate.checkRules(element, REGEXP.REGEXP_PASSWORD);
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
