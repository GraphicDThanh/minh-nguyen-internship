import { ERROR_MSG } from '../constants/messages';

export default class Validate {
  constructor() {
    this.errorMsgMail = document.getElementById('msg-error-email');
    this.errorMsgPass = document.getElementById('msg-error-password');
  }

  /**
   * Function check rules of input
   *
   * @param {String} value from input
   * @param {String} rules is rules of each filed
   *
   * @returns {Boolean} isError
   */
  static isRules(value, rules) {
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
  static isEmpty(value) {
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
  static isLength(value) {
    let isError = false;

    if (value.length < 8) {
      isError = true;
    }
    return isError;
  }

  /**
   * Function check empty and valid of email
   */
  validEmail(element, rules) {
    let checkEmail = false;
    const isRules = Validate.isRules(element, rules);
    const isEmpty = Validate.isEmpty(element);

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
  validPassword(element, rules) {
    let checkPass = false;
    const isRules = Validate.isRules(element, rules);
    const isLength = Validate.isLength(element);
    const isEmpty = Validate.isEmpty(element);

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
