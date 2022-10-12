export default class LocalStore {
  constructor(name) {
    this.localStorage = window.localStorage;
    this.name = name;
  }

  getItemLocalStorage() {
    return JSON.parse(this.localStorage.getItem(this.name));
  }

  setItemLocalStorage(item) {
    this.localStorage.setItem(this.name, JSON.stringify(item));
  }
}
