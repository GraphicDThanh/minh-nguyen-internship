const tasks = []; // create array store contents of table
const pomodoroForm = document.querySelector('.add-task');
const pomodoroTableBody = document.querySelector('.task-table-body');

function renderTasks(tBodyNode, tasks = []) {
  tBodyNode.innerHTML = tasks
    .map(
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
    )
    .join('');
}

function addTask(event) {
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
}

pomodoroForm.addEventListener('submit', addTask);

const finishTask = (tasks, taskId) => {
  tasks[taskId].finished = true;
};

const increasePomodoroDone = (tasks, taskId) => {
  tasks[taskId].pomodoroDone += 1;
};

const deleteTask = (tasks, taskId) => {
  tasks.splice(taskId, 1);
};

const handleTaskButtonClick = function (event) {
  const classList = event.target.className;
  const taskId = event.target.dataset.id;

  /task-done/.test(classList)
    ? finishTask(tasks, taskId)
    : /increase-pomodoro/.test(classList)
      ? increasePomodoroDone(tasks, taskId)
      : /delete-task/.test(classList)
        ? deleteTask(tasks, taskId)
        : null;

  renderTasks(pomodoroTableBody, tasks);
};

pomodoroTableBody.addEventListener('click', handleTaskButtonClick);
