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

    // Clear all task completed button
    this.clearCompleted = document.querySelector('.clear-completed');

    // Footer list task
    this.footerListTask = document.querySelector('.footer-list-task');
  }

  // Get data from input task name cell
  get todoText() {
    return this.inputTaskName.value;
  }

  // Show the number of active tasks
  showTaskActive(activeTask) {
    this.todoCount.innerHTML = `${activeTask} item${activeTask > 1 ? 's' : ''} left`;
  }

  /**
   * Render task list table
   * @param {array} todoList // task list array
   */
  displayTaskList(tasks, totalTaskCompleted) {
    // Show the entire task
    const listTasksTemplate = tasks.map((task) => this.taskView.renderTask(task)).join('');
    this.todoList.innerHTML = listTasksTemplate;

    // Show/hide clear completed button
    if (totalTaskCompleted !== 0) {
      this.clearCompleted.style.visibility = 'visible';
    } else {
      this.clearCompleted.style.visibility = 'hidden';
    }

    // Show todo list after adding task
    if (tasks.length !== 0) {
      this.footerListTask.style.display = 'flex';
    }

    // Toggle all task status
    this.toggleAll.checked = true;
    if (totalTaskCompleted !== tasks.length) {
      this.toggleAll.checked = false;
    }
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
        this.idSelected = event.target.closest('li').id;
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
        this.idSelected = event.target.closest('li').id;
        handler();
      }
    });
  }

  /**
   * function use id to edit task todo
   * Get data after edit task name
   * @param {fuction} handler
   */
  editTodo(handler) {
    this.todoList.addEventListener('dblclick', (event) => {
      this.taskSelected = event.target.parentElement;

      // Create an input box for the selected task to edit
      const input = document.createElement('input');
      input.classList.add('edit');
      // Hide the task content of the selected task
      this.taskSelected.classList.toggle('hidden');

      // Insert the generated input element into the hidden task position
      this.taskSelected.parentElement.insertBefore(input, this.taskSelected);
      this.bindUpdateTodo(handler);

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
    const inputElement = document.querySelector('.edit');

    inputElement.addEventListener('blur', (e) => {
      this.idSelected = e.target.closest('li').id;
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
        if (this.isToggleAll) {
          this.showClearCompleted = true;
        }
        handler();
      }
    });
  }

  /**
   * Add event 'click' to show filter todos
   * @param {fuction} handler
   */
  bindFilters(handler) {
    this.filter.forEach((button) => {
      button.addEventListener('click', (event) => {
        this.idSelected = event.target.id;
        const selected = document.querySelector('.selected');
        selected.classList.remove('selected');
        event.target.classList.add('selected');
        handler();
      });
    });
  }

  /**
   * Add event 'click' to delete all todos
   * @param {fuction} handler
   */
  bindDeleteAllTodo(handler) {
    this.clearCompleted.addEventListener('click', () => {
      handler();
    });
  }
}
