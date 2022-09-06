export default class TodoItemView {
  constructor() {
    this.wrapper = document.getElementById("#wrapper");
  }

  renders(todos) {
    let domTasks = todos.map((task) => `<p>${task.taskName}</p>`);
    this.view.wrapper.innerHTML = task.join("");
  }
}
