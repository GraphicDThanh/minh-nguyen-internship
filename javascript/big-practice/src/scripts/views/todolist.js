export default class TodoListView {
  constructor() {
    this.wrapper = document.getElementById("#wrapper");
  }

  renders(tasks) {
    let domTasks = task.map((task) => `<p>${task.taskName}</p>`);
    this.view.wrapper.innerHTML = task.join("");
  }
}
