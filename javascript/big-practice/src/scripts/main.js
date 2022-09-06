// Todo List
import TodoListController from './controllers/todolist';
import TodoListModel from './models/todolist';
import TodoListView from './views/todo';
const controllersList = new TodoListController(new TodoListModel(), new TodoListView());

// Todo Item
import TodoItemController from './controllers/todo';
import TodoItemModel from './models/todo';
import TodoItemView from './views/todo';
const controllersItem = new TodoItemController(new TodoItemModel(), new TodoItemView());

controllerList.init();
