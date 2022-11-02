export default class TodoListView {
  constructor(TodoItemView) {
    // Todo item view class
    this.taskView = TodoItemView;

    // Todo list element
    this.todoList = document.querySelector('.todo-list');
    this.todo = document.querySelector('li');

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
  displayTaskList(tasks, totalTaskCompleted, handlers, filterType) {
    // Delete all nodes
    while (this.todoList.firstChild) {
      this.todoList.removeChild(this.todoList.firstChild);
    }

    const { handleDeleteTask, handleToggleTodo, handleUpdateTodo } = handlers;

    // Show the entire task
    tasks.forEach((task) => {
      const taskElement = this.taskView.renderTask(task);

      this.todoList.append(taskElement);
      this.taskView.bindDeleteTodo(taskElement, handleDeleteTask, filterType);
      this.taskView.bindToggleTodo(taskElement, handleToggleTodo, filterType);
      this.taskView.bindEditTodo(taskElement, handleUpdateTodo, filterType);
    });

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
   * Add event 'click' to select all todos
   * @param {fuction} handler
   */
  bindToggleCheckAll(handler) {
    this.toggleAll.addEventListener('click', (event) => {
      if (event.target.type === 'checkbox') {
        const isToggleAll = event.target.checked;

        if (isToggleAll) {
          this.showClearCompleted = true;
        }
        handler(isToggleAll);
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
        const selectedId = event.target.id;
        const selected = document.querySelector('.selected');

        selected.classList.remove('selected');
        event.target.classList.add('selected');
        handler(selectedId);
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
