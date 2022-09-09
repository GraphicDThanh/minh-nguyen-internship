export default class TodoListView {
  constructor(taskView) {
    this.taskView = taskView;

    // todo list element
    this.todoList = getElementsByClassName("todo-list");

    // add todo
    this.addTaskForm = getElementsByClassName("add-task");
    this.inputTaskName = getElementsByClassName("new-todo");
  }

  get _todoText() {
    return this.input.value;
  }

  _resetInput() {
    this.input.value = "";
  }

  /**
   * Render task list table
   * @param {array} taskListModel / task list array
   * @param {number} selectedTaskId / selected task id
   */
  displayTaskList(taskListModel, handlers) {
    // Create new nodes
    taskListModel.forEach((task) => {
      const taskElement = this.taskView.renderTask(
        task,
        this.selectedId,
        handlers
      );
      this.todoList.appendChild(taskElement);
    });
  }

  /**
   * Add event 'keyup' for element input
   * @param {function} handler
   */
  bindAddTodo(handler) {
    this.input.addEventListener("keyup", (e) => {
      if (e.which === this.ENTER_KEY) {
        if (this._todoText) {
          handler(this._todoText);
          this._resetInput();
        }
      }
    });
  }
}
