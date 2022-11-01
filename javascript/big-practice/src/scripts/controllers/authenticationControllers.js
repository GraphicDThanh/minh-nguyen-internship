import { getTasksById } from '../helper/fetchApi';

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
    this.model.onUser = id;
    const user = await getTasksById(id);
    this.model.taskListModel = this.model.getTaskListModel(user);
    this.model.selectedTask = user.selectedTask;
    this.model.authen.setItemLocalStorage(id);
    this.taskList.renderForm();
  }
}
