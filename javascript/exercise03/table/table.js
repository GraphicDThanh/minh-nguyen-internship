const tasks = [];
const pomodoroForm = document.querySelector('.add-task');
const pomodoroTableBody = document.querySelector('.task-table-body');

const renderTasks = function (tBodyNode, tasks = []) {
  const task = tasks.map(
    (task, id) => `
        <tr>
            <td class="cell-task-name">${task.taskName}</td>
            <td class="cell-pom-count">${task.pomodoroDone} / ${
  task.pomodoroCount
} pomodori</td>
            <td class="cell-pom-controls">
            ${
  task.finished
    ? 'Finished'
    : `
            <button class="task-done" data-id="${id}">Done</button>
            <button class="increase-pomodoro" data-id="${id}">Increase Pomodoro Count</button>`
}
            <button class="delete-task" data-id="${id}">Delete Task</button>
            </td>
        </tr>
    `,
  );
  tBodyNode.innerHTML = task.join('');
  addEvent();
};

const addTask = function (event) {
  // prevent default action
  event.preventDefault();

  // extract form field values
  const taskName = this.querySelector('.task-name').value;
  const pomodoroCount = this.querySelector('.pomodoro-count').value;

  // create a new task item by updating the global state
  tasks.push({
    taskName,
    pomodoroDone: 0,
    pomodoroCount,
    finished: false,
  });

  // reset the form
  this.reset();

  // render the global state
  renderTasks(pomodoroTableBody, tasks);
};

pomodoroForm.addEventListener('submit', addTask);

const finishTask = (e) => {
  const taskId = e.target.dataset.id;
  tasks[taskId].finished = true;
  renderTasks(pomodoroTableBody, tasks);
};

const increasePomodoroDone = (e) => {
  const taskId = e.target.dataset.id;
  tasks[taskId].pomodoroDone += 1;
  renderTasks(pomodoroTableBody, tasks);
};

const deleteTask = (e) => {
  const taskId = e.target.dataset.id;
  tasks.splice(taskId, 1);
  renderTasks(pomodoroTableBody, tasks);
};

const addEvent = () => {
  document
    .querySelectorAll('.task-table-body .increase-pomodoro')
    .forEach((button) => button.addEventListener('click', increasePomodoroDone));
  document
    .querySelectorAll('.task-table-body .task-done')
    .forEach((button) => button.addEventListener('click', finishTask));
  document
    .querySelectorAll('.task-table-body .delete-task')
    .forEach((button) => button.addEventListener('click', deleteTask));
};
