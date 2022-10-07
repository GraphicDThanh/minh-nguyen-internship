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

    // Toggle all tasks todo
    this.toggleAll = document.querySelector('#toggle-all');

    // Filters button
    this.filters = document.querySelector('.filters');
    this.filter = this.filters.querySelectorAll('button');
    this.all = document.querySelector('#all');
    this.completed = document.querySelector('#completed');
    this.active = document.querySelector('#active');
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

    listElement.forEach((todo) => {
      // Update todo-count
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

      if (this.todoText.trim()) {
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

        // Check all task status
        this.toggleTask = this.todoList.querySelectorAll('input');

        this.toggleTask.forEach((task) => {
          this.allChecked = true;
          if (task.checked === false) {
            this.allChecked = false;
          }
        });
        // Active toggleAll checkbox when all task status done
        this.toggleAll.checked = this.allChecked;
        handler();

        // Check a task status: if there is an undone task then inactive toggleAll  checkbox
        if (!event.target.checked) {
          this.toggleAll.checked = false;
        }
      }
    });
  }

  /**
   * function use id to edit task todo
   * Get data after edit task name
   * @param {fuction} handler
   */
  editTodo() {
    this.todoList.addEventListener('dblclick', (event) => {
      const prevInput = document.querySelector('.edit');
      this.taskSelected = event.target.parentElement;

      // Remove all input with classname is 'edit' before select another task to edit
      if (prevInput) {
        prevInput.remove();
      }

      // Create an input box for the selected task to edit
      const input = document.createElement('input');
      input.classList.add('edit');

      // Hide the task content of the selected task
      this.taskSelected.classList.toggle('hidden');

      // Insert the generated input element into the hidden task position
      this.todoList.insertBefore(input, this.taskSelected);

      input.focus();
      input.value = this.taskSelected.querySelector('label').innerHTML;

      // Get data from input
      input.onchange = (e) => {
        this.contentEdit = e.target.value;
      };
    });
  }

  /**
   * function use id to update todos
   * Add event 'double click' for todoList element
   * @param {fuction} handler
   */
  bindUpdateTodo(handler) {
    this.todoList.addEventListener('focusout', () => {
      this.idSelected = this.taskSelected.id;
      handler(this.idSelected, this.contentEdit);
      this.contentEdit = '';
    });
  }

  /**
   * Add event 'click' to select all todos
   * @param {fuction} handler
   */
  bindToggleCheckAll(handler) {
    this.toggleAll.addEventListener('click', (event) => {
      if (event.target.type === 'checkbox') {
        this.isToggleAll = event.target.checked;
        handler(this.isToggleAll);
      }
    });
  }

<<<<<<< HEAD
=======
  /**
   * Add event 'click' to show completed todos
   * @param {fuction} handler
   */
  bindListCompleted(handler) {
    this.completed.addEventListener('click', () => {
      handler(this.todoList);
    });
  }

>>>>>>> 79b2f91e5086aea0e60b08fcf430a25417cec156
  bindFilters() {
    this.filter.forEach((button) => {
      button.addEventListener('click', (event) => {
        const selected = document.querySelector('.selected');
        selected.classList.remove('selected');
        event.target.classList.add('selected');
      });
    });
  }

  /**
   * Add event 'click' to show completed todos
   * @param {fuction} handler
   */
  bindListCompleted(handler) {
    this.completed.addEventListener('click', () => {
      handler(this.todoList);
    });
  }
}
