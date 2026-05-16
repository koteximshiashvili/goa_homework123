const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');
const clearAllBtn = document.getElementById('clearAllBtn');

window.addEventListener('load', loadTask);

addTaskBtn.addEventListener('click', () => {
    addTask(taskInput.value);
});

clearAllBtn.addEventListener('click', () => {
    localStorage.clear();
    taskList.innerHTML = '';
});

function saveTasks() {
    let tasks = [];
    for (let i = 0; i < document.querySelectorAll('li').length; i++) {
        tasks.push(document.querySelectorAll('li')[i].firstChild.textContent.trim());
    }
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function addTask(task) {
    if (!task) {
        return;
    }
    let li = document.createElement('li');
    let btn = document.createElement('button');
    li.textContent = task;
    btn.textContent = 'Remove';
    btn.addEventListener('click', () => {
        li.remove();
        saveTasks();
    });
    li.appendChild(btn);
    taskList.appendChild(li);
    saveTasks();
}

function loadTask() {
    let tasks = JSON.parse(localStorage.getItem("tasks"));
    if (tasks) {
        for (let i = 0; i < tasks.length; i++) {
            addTask(tasks[i]);
        }
    }
}
