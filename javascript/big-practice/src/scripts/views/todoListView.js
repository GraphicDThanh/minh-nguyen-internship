export default class TodoListView {
  constructor(TodoItemView) {
    // Todo item view class
    this.taskView = TodoItemView;

    // Todo list element
    this.todoList = document.querySelector('.todo-list');

    // Add todo
    this.addTaskForm = document.querySelector('.add-task');
    this.inputTaskName = document.querySelector('.new-todo');

    // Count todo
    this.todoCount = document.querySelector('.todo-count');
  }

  get todoText() {
    return this.inputTaskName.value;
  }

  /**
   * Render task list table
   * @param {array} todoList // task list array
   */
  displayTaskList(listElement) {
    const array = listElement.map((task) => this.taskView.renderTask(task));
    let count = 0;
    // Create new nodes
    this.todoList.innerHTML = array.join('');

    // Update todo-count
    listElement.forEach((todo) => {
      if (todo.isCompleted === false) {
        count += 1;
      }
    });
    this.todoCount.innerHTML = `${count} item${count > 1 ? 's' : ''} left`;
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
        this.idSelected = event.target.parentElement.id;
        handler();
      }
    });
  }

  /**
   * function use id to done todo
   * Add event 'click' for todoList element
   * @param {function} handler
   */
  bindToggleTodo(handler) {
    this.todoList.addEventListener('change', (event) => {
      if (event.target.type === 'checkbox') {
        this.idSelected = event.target.parentElement.id;
        handler();
      }
    });
  }

  /**
   * function use id to update todos
   * Add event 'double click' for todoList element
   * @param {fuction} handler
   */
  editTodo() {
    this.todoList.addEventListener('dblclick', (event) => {
      const prevInput = document.querySelector('.edit');
      const taskPrevSelect = document.querySelector('.hidden');
      const listItem = event.target.parentElement;

      // Remove all input with classname is 'edit' before select another task to edit
      if (prevInput) {
        prevInput.remove();
      }

      // Show hidden task name when previously selected
      if (taskPrevSelect) {
        taskPrevSelect.classList.toggle('hidden');
      }

      // Create an input box for the selected task to edit
      const input = document.createElement('input');
      input.classList.add('edit');

      // Hide the task content of the selected task
      listItem.classList.toggle('hidden');

      // Insert the generated input element into the hidden task position
      this.todoList.insertBefore(input, listItem);
      input.focus();
      // input.value = listItem.querySelector('label').innerHTML;

      // Save data after editing to a temporary variable
      this.editContent = input.value;
    });
  }

  bindUpdateTodo() {
    this.todoList.addEventListener('focusout', (event) => {
      if (this.editContent) {
        console.log(this.editContent);
        this.idSelected = event.target.parentElement.id;
        // handler(this.editcontent);
      }
    });
  }
}
