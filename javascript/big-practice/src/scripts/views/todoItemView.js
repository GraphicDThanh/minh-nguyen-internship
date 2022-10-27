/* eslint-disable class-methods-use-this */
export default class TodoItemView {
  constructor() {
    this.todoList = document.getElementsByClassName('todo-list');
    this.addTaskForm = document.getElementsByClassName('add-task');
    this.inputTaskName = document.getElementsByClassName('new-todo');
  }

  /**
   * Render a task view
   * @param {object} task
   * @returns task <li> element
   */
  renderTask(task) {
    const taskElement = document.createElement('li');
    taskElement.id = `${task.id}`;
    taskElement.className = 'task';

    taskElement.innerHTML = `
      <div class = 'view'>
      <input 
        class='toggle' 
        id='${task.id}-toggle' 
        type='checkbox' ${task.isCompleted ? 'checked' : ''}
      />
            <label>${task.taskName}</label>
            <button type="button" class="destroy"></button>
      </div>
    `;
    return taskElement;
  }

  /**
   * function use id to delete todos
   * Add event 'click' for todoList element
   * @param {function} handler
   */
  bindDeleteTodo(task, handler, filterType) {
    const taskSelected = document.getElementById(`${task.id}`);
    const deleteButton = taskSelected.querySelector('.destroy');
    deleteButton.addEventListener('click', () => {
      handler(task.id, filterType);
    });
  }

  /**
   * function use id to done todo
   * Add event 'click' for todoList element
   * @param {function} handler
   */
  bindToggleTodo(task, handler, filterType) {
    const taskSelected = document.getElementById(`${task.id}`);
    const toggleButton = taskSelected.querySelector('.toggle');
    toggleButton.addEventListener('change', () => {
      handler(task.id, filterType);
    });
  }

  /**
   * function use id to edit task todo
   * Get data after edit task name
   * @param {fuction} handler
   */
  // bindEditTodo(task, handler, filterType) {
  //   const taskSelected = document.getElementById(`${task.id}`);

  //   taskSelected.addEventListener('dblclick', () => {
  //     const oldTaskName = taskSelected.querySelector('.view');

  //     // Create an input box for the selected task to edit
  //     const input = document.createElement('input');
  //     input.classList.add('edit');
  //     // Hide the task content of the selected task
  //     oldTaskName.classList.add('hidden');

  //     // Insert the generated input element into the hidden task position
  //     taskSelected.insertBefore(input, oldTaskName);

  //     input.focus();
  //     input.value = oldTaskName.querySelector('label').innerHTML;

  //     // Get data from input
  //     input.onchange = (e) => {
  //       const newTaskName = e.target.value;
  //       this.updateTodo(taskSelected, handler, newTaskName, filterType);
  //     };
  //   });
  // }

  /**
   * function use id to update todos
   * Add event 'double click' for todoList element
   * @param {fuction} handler
   */
  updateTodo(taskSelected, handler, newTaskName, filterType) {
    const inputElement = document.querySelector('.edit');

    inputElement.addEventListener('blur', () => {
      handler(taskSelected.id, newTaskName, filterType);
      this.contentEdit = '';
    });
  }
}
