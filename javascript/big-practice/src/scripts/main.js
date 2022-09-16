// import todo list file
import TodoListController from './controllers/toDoListController';
import TodoListModel from './models/toDoListModel';
import TodoListView from './views/toDoListView';
// import TodoItemModel from './models/todo';
import TodoItemView from './views/toDoItemView';

// const todoItemModel =  new TodoItemModel();
const todoListModel = new TodoListModel();

const todoItemView = new TodoItemView();
const todoListView = new TodoListView(todoItemView);

const todoListController = new TodoListController(todoListModel, todoListView);

todoListController.init();
