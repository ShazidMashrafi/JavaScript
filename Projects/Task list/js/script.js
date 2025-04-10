// Define UI elements
let form = document.querySelector("#task_form");
let taskInput = document.querySelector("#new_task");
let filter = document.querySelector("#task_filter");
let taskList = document.querySelector('#tasks');
let clearButton = document.querySelector("#clear_task_btn");

//Define event listener
form.addEventListener('submit',addTask);
taskList.addEventListener('click',removeTask);
clearButton.addEventListener('click', clearTaskList);
filter.addEventListener('keyup', filterTask);
document.addEventListener('DOMContentLoaded',getTasks);


// Define function
function addTask(e) {
    e.preventDefault(); // Prevent form from submitting to the server
    if(taskInput.value === '') {
        alert('Add a task');
    } else {
        let task = document.createElement('li');
        task.appendChild(document.createTextNode(taskInput.value + " "));
        let cross = document.createElement('a');
        cross.setAttribute('href', '#');
        cross.innerHTML = 'x';
        task.append(cross);
        taskList.appendChild(task);
        storeTaskInLocalStorage(taskInput.value);
        taskInput.value = '';
    }
}

function removeTask(e) {
    if(e.target.hasAttribute('href')) {
        if(confirm("Are you sure to remove?")) {
            let task = e.target.parentElement;
            task.remove();
            removeFromLocalStorage(task);
        }
    }
}

function clearTaskList(e) {
    if(confirm("Are you sure to clear all task?")) {
        while(taskList.firstChild) {
            taskList.removeChild(taskList.firstChild);
        }
        localStorage.clear();
    }
}

function filterTask(e) {
    let text = e.target.value.toLowerCase();
    document.querySelectorAll('li').forEach(task => {
        let item = task.firstChild.textContent.toLowerCase();
        if(item.indexOf(text) != -1) {
            task.style.display = 'block';
        } else {
            task.style.display = 'none';
        }
    });
}

function storeTaskInLocalStorage(task) {
    let tasks = [];
    if(localStorage.getItem('tasks')) {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);
    localStorage.setItem('tasks',JSON.stringify(tasks));
}

function getTasks() {
    let tasks = [];
    if(localStorage.getItem('tasks')) {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.forEach(task => {
        let item = document.createElement('li');
        item.appendChild(document.createTextNode(task + " "));
        let cross = document.createElement('a');
        cross.setAttribute('href', '#');
        cross.innerHTML = 'x';
        item.append(cross);
        taskList.appendChild(item);
    })
}

function removeFromLocalStorage(taskItem) {
    let tasks = [];
    if(localStorage.getItem('tasks')) {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    let item = taskItem; 
    item.removeChild(item.lastChild); //removes the <a> tag
    item = item.textContent.trim();
    tasks.forEach((task,index)=> {
        if(item==task) {
            tasks.splice(index,1);
        }
    })
    localStorage.setItem('tasks', JSON.stringify(tasks));
}