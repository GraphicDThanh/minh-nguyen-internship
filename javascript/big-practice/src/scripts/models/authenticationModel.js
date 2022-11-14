import { getUserByMail } from '../helper/fetchApi';
import { authService } from '../helper/authService';

export default class AuthenticationModel {
  constructor() {
    this.loginMode = false;
  }

  /**
   * Function check email and password is exists in data
   * @param {string} email is email take from input email login
   * @param {string} password is password take from input password login
   *
   * @returns {boolean} login mode
   */
  async checkUserByEmail(email, password) {
    const users = await getUserByMail(email);

    if (users.length) {
      if (users[0].password === password) {
        this.loginMode = true;
        authService.setUser(users[0].id);
      } else {
        this.loginMode = false;
      }
    } else {
      this.loginMode = false;
    }

    return this.loginMode;
  }
}
