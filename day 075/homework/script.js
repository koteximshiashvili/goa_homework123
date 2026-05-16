const taskInput = document.getElementById('task');
const addBtn = document.getElementById('add');
const taskList = document.getElementById('taskList');
const clearBtn = document.getElementById('clear');

addBtn.addEventListener('click', function() {
    const taskText = taskInput.value;
    if (taskText === ''){
        return;
    }

    const listItem = document.createElement('li');
    listItem.textContent = taskText;

    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.addEventListener('click', function() {
        const input = document.createElement('input');
        input.type = 'text';
        input.value = taskText;

        const saveBtn = document.createElement('button');
        saveBtn.textContent = 'Save';
        saveBtn.addEventListener('click', function() {
            listItem.textContent = input.value;
            listItem.appendChild(editBtn);
            listItem.appendChild(deleteBtn);
        });

        listItem.textContent = '';
        listItem.appendChild(input);
        listItem.appendChild(saveBtn);
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', function() {
        taskList.removeChild(listItem);
    });

    listItem.appendChild(editBtn);
    listItem.appendChild(deleteBtn);
    taskList.appendChild(listItem);
    taskInput.value = '';
});

clearBtn.addEventListener('click', function() {
    taskList.innerHTML = '';
});
