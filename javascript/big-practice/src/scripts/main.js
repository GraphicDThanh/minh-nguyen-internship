// import todo list file
// import TodoItemModel from './models/todo';
import TodoItemView from './views/todoItemView';
import TodoListView from './views/todoListView';
import TodoListModel from './models/toDoListModel';
import TodoListController from './controllers/toDoListController';

// const todoItemModel =  new TodoItemModel();
const todoListModel = new TodoListModel();

const todoItemView = new TodoItemView();
const todoListView = new TodoListView(todoItemView);

const todoListController = new TodoListController(todoListModel, todoListView);

todoListController.init();
