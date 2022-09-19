export default class TodoListView {
  constructor(TodoItemView) {
    this.taskView = TodoItemView;
    // todo list element
    this.todoList = document.querySelector('.todo-list');

    // add todo
    this.addTaskForm = document.querySelector('.add-task');
    this.inputTaskName = document.querySelector('.new-todo');

    // delete todo
    this.deleteTask = document.querySelectorAll('.destroy');
  }

  get todoText() {
    return this.inputTaskName.value;
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
   * Add event 'submit' for element form
   * @param {function} handler
   */
  bindAddTodo(handler) {
    this.addTaskForm.addEventListener('submit', (event) => {
      event.preventDefault();

      if (this.todoText) {
        handler(this.todoText);
        this.addTaskForm.reset();
      }
    });
  }

  /**
   * function use id to delete todos
   * Add event 'click' for todoList element
   * @param {function} handler
   */
  bindDeleteTodo(handler) {
    this.todoList.addEventListener('click', (event) => {
      if (event.target.className === 'destroy') {
        const { id } = event.target.closet('li');
        handler(id);
      }
    });
  }
}
