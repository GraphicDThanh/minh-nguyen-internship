import { getUserByMail } from '../helper/fetchApi';
import AuthService from '../helper/authService';
import { ERROR_MSG, SUCCESS } from '../constants/messages';

export default class AuthenticationModel {
  constructor() {
    this.successMsg = document.getElementById('msg-success');
    this.errorMsgMail = document.getElementById('msg-error-email');
    this.errorMsgPass = document.getElementById('msg-error-password');
  }

  /**
   * Function check email and password is exists in data
   *
   * @param {String} email is email take from input email login
   * @param {String} password is password take from input password login
   *
   * @returns {String} message
   */
  async checkUserByEmail(email, password) {
    let loginMode = false;
    const users = await getUserByMail(email);

    if (users.length) {
      if (users[0].password === password) {
        loginMode = true;
        AuthService.setUser().setItemLocalStorage(users[0].id);
        this.successMsg.innerHTML = SUCCESS.MSG_SUCCESS;
        this.successMsg.classList.remove('hidden');
      } else {
        loginMode = false;
        this.errorMsgPass.innerHTML = ERROR_MSG.PASSWORD_INCORRECT;
        this.errorMsgPass.classList.remove('hidden');
      }
    } else {
      loginMode = false;
      this.errorMsgMail.innerHTML = ERROR_MSG.EMAIL_NOT_EXIST;
      this.errorMsgMail.classList.remove('hidden');
    }

    return loginMode;
  }
}
