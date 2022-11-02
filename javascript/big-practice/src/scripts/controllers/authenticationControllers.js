import { getUserById } from '../helper/fetchApi';

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
    // this.view.bindLogout(this.onLogout);
  }

  // Handle login
  async onLogin(id) {
    console.log(123);
    this.model.onUser = id;
    const user = await getUserById(id);
    this.model.taskListModel = this.model.getTaskListModel(user.taskList);
    this.model.selectedTask = user.selectedTask;
    this.taskList.renderTaskList();
    this.view.renderSelectedTaskLabel(this.model.selectedTask, this.model.taskListModel);
  }
}
