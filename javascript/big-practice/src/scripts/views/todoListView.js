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
  displayTaskList(listElement, taskCompleted) {
    // Show the entire task
    const array = listElement.map((task) => this.taskView.renderTask(task));
    this.todoList.innerHTML = array.join('');

    // Show/hide clear completed button
    if (taskCompleted !== 0) {
      this.clearCompleted.style.visibility = 'visible';
    } else {
      this.clearCompleted.style.visibility = 'hidden';
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

      // Show todo list after adding task
      this.footerListTask.style.display = 'flex';
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

        // Toggle all task status
        this.toggleTask = this.todoList.querySelectorAll('input');

        this.toggleTask.forEach((task) => {
          this.allChecked = true;
          if (task.checked === false) {
            this.allChecked = false;
          }
          this.showClearCompleted = true;
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
      this.taskSelected = event.target.parentElement;

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
    this.todoList.addEventListener('focusout', (e) => {
      this.idSelected = e.target.nextElementSibling.id;
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
        handler(this.isToggleAll);
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
        handler(this.todoList);
      });
    });
  }

  /**
   * Add event 'click' to delete all todos
   * @param {fuction} handler
   */
  bindDeleteAllTodo(handler) {
    this.clearCompleted.addEventListener('click', () => {
      handler(this.todoList);
    });
  }
}
