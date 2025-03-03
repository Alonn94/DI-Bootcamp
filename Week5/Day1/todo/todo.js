const tasks = [];

document.getElementById("taskForm").addEventListener("submit", function(event) {
    event.preventDefault();
    addTask();
});

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value;
    if (taskText === "") return

    tasks.push(taskText); 
    renderTasks(); 
    taskInput.value = "";
}

function renderTasks() {
    const listContainer = document.querySelector(".listTasks");
    listContainer.innerHTML = ""; 
    

    tasks.forEach((task, index) => {
        const taskElement = document.createElement("div");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        
        const label = document.createElement("label");
        label.textContent = task;

        const deleteButton = document.createElement("button");
        deleteButton.innerHTML = "X";



        deleteButton.onclick = () => {
            tasks.splice(index, 1); 
            renderTasks();
        };

        taskElement.appendChild(checkbox);
        taskElement.appendChild(label);
        taskElement.appendChild(deleteButton);
        listContainer.appendChild(taskElement);
    });
}