// import { getTasksById } from '../helper/fetchApi';

export default class AuthenticationController {
  constructor(view, model, todoListController) {
    this.view = view;
    this.model = model;
    this.taskList = todoListController;
    this.onLogin = this.onLogin.bind(this);
  }

  init() {
    this.view.bindOpenLoginForm();
    this.view.bindCloseLoginForm();

    // Login
    this.view.bindLogin(this.onLogin);
  }

  // Handle login
  async onLogin(id) {
    console.log('login');
    this.model.onUser = id;
    // const tasks = await getTasksById(id);
    // this.model.taskListModel = this.model.getTaskListModel(tasks);
    this.model.authen.setItemLocalStorage(id);
    this.taskList.renderForm();
  }
}
