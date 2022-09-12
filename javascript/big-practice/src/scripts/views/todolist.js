export default class TodoListView {
  constructor() {
    // this.taskView = TodoItemView;

    // todo list element
    this.todoList = document.getElementsByClassName('todo-list');

    // add todo
    this.addTaskForm = document.getElementsByClassName('add-task');
    this.inputTaskName = document.getElementsByClassName('new-todo');
  }

  gettodoText() {
    return this.inputTaskName.value;
  }

  resetInput() {
    this.input.value = '';
  }

  /**
   * Render task list table
   * @param {array} todoList // task list array
   */
  displayTaskList(todoList) {
    // Create new nodes
    todoList.forEach((task) => {
      const taskElement = this.todoItemView.renderTask(task);
      this.todoList.appendChild(taskElement);
    });
  }

  /**
   * Add event 'keyup' for element input
   * @param {function} handler
   */
  bindAddTodo(handler) {
    this.addTaskForm.addEventListener('submit', (event) => {
      event.preventDefault();

      if (this.todoText) {
        handler(this.gettodoText);
        this.resetInput();
      }
    });
  }
}
