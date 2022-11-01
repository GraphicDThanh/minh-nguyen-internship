export default class LocalStore {
  constructor(name) {
    this.localStorage = window.localStorage;
    this.name = name;
  }

  // Get data from LocalStorage
  getItemLocalStorage() {
    return JSON.parse(this.localStorage.getItem(this.name));
  }

  // Save data to LocalStorage
  setItemLocalStorage(item) {
    this.localStorage.setItem(this.name, JSON.stringify(item));
  }

  // Save data to LocalStorage
  removeItemLocalStorage() {
    this.localStorage.removeItem(this.name);
  }
}
