export default class TodoListModel {
  constructor() {
    const todos = [
      {
        id: 1,
        text: "todo 1",
        isCompleted: true,
        status: "Completed",
      },
      {
        id: 2,
        text: "todo 2",
        isCompleted: false,
        status: "Active",
      },
      {
        id: 3,
        text: "todo 3",
        isCompleted: true,
        status: "Completed",
      },
    ];
  }

  //method
  addTask() {}
  removeTask() {}
}
