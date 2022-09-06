// import todo list file
import TodoListController from './controllers/todolist';
import TodoListModel from './models/todolist';
import TodoListView from './views/todo';

// import todo item file
import TodoItemModel from './models/todo';
import TodoItemView from './views/todo';

const controllersList = new TodoListController(new TodoListModel(new TodoItemModel), new TodoListView(new TodoItemView));
controllerList.init();
