// import todo list file
import TodoItemView from './views/todoItemView';
import TodoListView from './views/todoListView';
import TodoListModel from './models/toDoListModel';
import TodoListController from './controllers/toDoListController';

const todoListModel = new TodoListModel();

const todoItemView = new TodoItemView();
const todoListView = new TodoListView(todoItemView);

const todoListController = new TodoListController(todoListModel, todoListView);

todoListController.init();
