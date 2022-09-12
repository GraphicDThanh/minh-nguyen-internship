export default class TodoListView {
  constructor(TodoItemView) {
    this.taskView = TodoItemView;
    // todo list element
    this.todoList = document.querySelector('.todo-list');

    // add todo
    this.addTaskForm = document.querySelector('.add-task');
    this.inputTaskName = document.querySelector('.new-todo');
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
  displayTaskList(listElement) {
    // Create new nodes
    const array = listElement.map((task) => this.taskView.renderTask(task));

    this.todoList.innerHTML = array.join('');
  }

  /**
   * Add event 'keyup' for element input
   * @param {function} handler
   */
  bindAddTodo(handler) {
    this.addTaskForm.addEventListener('submit', (event) => {
      event.preventDefault();
      if (this.gettodoText()) {
        handler(this.gettodoText());
        this.resetInput();
      }
    });
  }
}
