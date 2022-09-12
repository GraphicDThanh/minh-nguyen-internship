// import todo list file
import TodoListController from './controllers/todolist';
import TodoListModel from './models/todolist';
import TodoListView from './views/todolist';
// import TodoItemModel from './models/todo';
import TodoItemView from './views/todo';

// const todoItemModel =  new TodoItemModel();
const todoListModel = new TodoListModel();

const todoItemView = new TodoItemView();
const todoListView = new TodoListView(todoItemView);

const todoListController = new TodoListController(todoListView, todoListModel);

todoListController.init();
