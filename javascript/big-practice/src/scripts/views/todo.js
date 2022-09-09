export default class TodoItemView {
  constructor() {
    this.todoList = getElementsByClassName("todo-list");
    this.addTaskForm = getElementsByClassName("add-task");
    this.inputTaskName = getElementsByClassName("new-todo");
  }

  /**
   * Render a task view
   * @param {object} task
   * @param {number} selectedTaskId
   * @returns task <li> element
   */

  renderTask(task, selectedTaskId) {
    const taskElement = createElement("li");
    taskElement.id = `${task.id}`;
    taskElement.className = `task-item ${task.id == selectedTaskId ? ' selected' : ''}`;

    taskElement.innerHTML = `
      <div class = 'view'>
        <input class='check-box' id='${task.id}-check-box' type='checkbox' ${task.taskDone ? 'checked' : ''}/>
        <label>${task.taskName}</label>
        <button class="destroy"></button>
      </div>
    `;
    return taskElement;
  }
}
