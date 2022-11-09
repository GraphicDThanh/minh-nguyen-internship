import LocalStore from './localstorage';
import STORAGE_KEYS from '../constants/storageKeys';

export default class AuthService {
  constructor() {
    this.userId = new LocalStore(STORAGE_KEYS.USER_ID);
  }

  /**
   * Set userId key to localStorage
   * @returns {object} userId key in localStorage
   */
  setUser(item) {
    return this.userId.setItemLocalStorage(item);
  }

  /**
   * Get value of userId from localStorage
   * @returns {number} value of userId
   */
  getUser() {
    return this.userId.getItemLocalStorage();
  }

  /**
   * Get value of userId from localStorage
   * @returns {number} value of userId
   */
  removeUser() {
    return this.userId.removeItemLocalStorage();
  }

  /**
   * Check status of userId in localStorage
   * @returns {boolean} checkUser
   */
  checkUser() {
    let checkUser = false;

    if (this.getUser()) {
      checkUser = true;
    }
    return checkUser;
  }
}

export const authService = new AuthService();
