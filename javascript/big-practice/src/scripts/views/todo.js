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
  // i can't solve this eslint problem
  // eslint-disable-next-line class-methods-use-this
  renderTask(task) {
    const taskElement = `
      <li id=${task.id}>
      <div class = 'view'>
        <input class='check-box' id='${task.id}-check-box' type='checkbox' ${
      task.taskDone ? 'checked' : ''
    }/>
        <label>${task.taskName}</label>
        <button class="destroy"></button>
      </div>
      </li>
    `;

    return taskElement;
  }
}
