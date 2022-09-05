import Controller from './controllers/todo';
import Model from './models/todo';
import View from './views/todo';

const controller = new Controller(new Model(), new View());

controller.init();
