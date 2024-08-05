const tasks = [
  { id: 1, title: "Task 1", status: "todo" },
  { id: 2, title: "Task 2", status: "inProgress" },
  { id: 3, title: "Task 3", status: "completed" },
  { id: 4, title: "Task 4", status: "todo" }
]

const taskListContainer = document.querySelector("#taskList")
const filterStatus = document.querySelector("#filterStatus")

function renderTasks(statusFilter) {

  const filteredTasks = (statusFilter === "all" || !statusFilter) ? tasks : tasks.filter(task => task.status === statusFilter);

  const taskListHTML = filteredTasks.map(task => `
  <li>
    <strong>ID:</strong> ${task.id}<br>
    <strong>Title:</strong> ${task.title}<br>
    <strong>Status:</strong> ${task.status}<br>
  </li>
  <hr>
  `)

  taskListContainer.innerHTML = taskListHTML.join('')
}

renderTasks();

filterStatus.addEventListener("change", function() {
  renderTasks(filterStatus.value)
})
