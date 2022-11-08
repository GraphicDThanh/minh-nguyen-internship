// import todo list file
import TodoItemView from './views/todoItemView';
import TodoListView from './views/todoListView';
import TodoListModel from './models/toDoListModel';
import TodoListController from './controllers/toDoListController';

import AuthenticationModel from './models/authenticationModel';
import AuthenticationView from './views/authenticationView';
import AuthenticationController from './controllers/authenticationControllers';

const todoListModel = new TodoListModel();
const authenticationModel = new AuthenticationModel();

const todoItemView = new TodoItemView();
const todoListView = new TodoListView(todoItemView);
const authenticationView = new AuthenticationView();

const todoListController = new TodoListController(todoListModel, todoListView);
const authenticationUser = new AuthenticationController(authenticationModel, authenticationView);

authenticationUser.init();
todoListController.init();
