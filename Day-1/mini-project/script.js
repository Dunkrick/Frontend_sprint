const taskInput = document.getElementById('task-input');
const addBtn = document.getElementById('add-btn');
const taskList = document.getElementById('task-list');
const emptyState = document.getElementById('empty-state');

function createTaskElement(text) {
    const listItem = document.createElement('li');
    listItem.classList.add('task-item');
    const textSpan = document.createElement('span');
    textSpan.classList.add('task-text');
    textSpan.innerText = text;
    listItem.appendChild(textSpan);
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('btn-delete');
    deleteBtn.innerText = 'Done';
    deleteBtn.addEventListener('click', () => removeTask(listItem));
    listItem.appendChild(deleteBtn);
    return listItem;
}

function addTask() {
    const text = taskInput.value.trim();

    if (text === "") return;
    const taskElement = createTaskElement(text);
    taskList.appendChild(taskElement);
    taskInput.value = "";
    updateEmptyState();
}

const removeTask = (listItem) => {
    const taskText = listItem.querySelector('.task-text').innerText;
    window.confirm(`Great! "${taskText}" is Done :)`);
    listItem.remove();
    updateEmptyState();
}

function updateEmptyState() {
    if (taskList.children.length === 0) {
        emptyState.classList.remove("hidden");
    } else {
        emptyState.classList.add("hidden");
    }
}

//Event Listeners
addBtn.addEventListener('click', () => {
    addTask();
});

taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});
