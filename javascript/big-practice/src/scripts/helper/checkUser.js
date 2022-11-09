import LocalStore from './localstorage';
import STORAGE_KEYS from '../constants/storageKeys';

export default class CheckUser {
  /**
   * Set userId key to localStorage
   * @returns {object} userId key in localStorage
   */
  static setUser() {
    const userId = new LocalStore(STORAGE_KEYS.USER_ID);
    return userId;
  }

  /**
   * Get value of userId from localStorage
   * @returns {number} value of userId
   */
  static getUser() {
    return CheckUser.setUser().getItemLocalStorage();
  }

  /**
   * Check status of userId in localStorage
   * @returns {boolean} checkUser
   */
  static checkUser() {
    let checkUser = false;

    if (CheckUser.getUser()) {
      checkUser = true;
    }
    return checkUser;
  }
}
