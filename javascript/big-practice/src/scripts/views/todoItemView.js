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
      <div>
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
}
