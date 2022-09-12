export default class TodoItemModel {
  constructor(todoAdded) {
    const { id, text, isCompleted } = todoAdded;
    this.id = id;
    this.text = text;
    this.isCompleted = isCompleted;
  }
}
