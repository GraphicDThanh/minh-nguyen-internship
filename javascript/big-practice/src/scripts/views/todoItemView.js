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
  // eslint-disable-next-line class-methods-use-this
  renderTask(task) {
    const taskElement = `
      <li id=${task.id} class="task">
      <input class='toggle' id='${task.id}-toggle' type='checkbox' ${
      task.isCompleted ? 'checked' : ''
    }/>
          <label>${task.taskName}</label>
          <button class="destroy"></button>
      </li>
    `;
    return taskElement;
  }
}
