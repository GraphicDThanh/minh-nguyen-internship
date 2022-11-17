/* eslint-disable class-methods-use-this */
import { getUserByMail } from '../service/apiService';
import { authService } from '../service/authService';

export default class AuthenticationModel {
  /**
   * Function check email and password is exists in data
   * @param {string} email is email take from input email login
   * @param {string} password is password take from input password login
   *
   * @returns {boolean} login mode
   */
  async isValidUser(email, password) {
    const users = await getUserByMail(email);
    let isValid = false;

    users.find((user) => {
      if (user.password === password) {
        isValid = true;
        authService.setUser(users[0].id);
      }
      return isValid;
    });

    return isValid;
  }
}
