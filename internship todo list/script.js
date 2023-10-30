function addTask() {
    var taskInput = document.getElementById("task");
    var taskList = document.getElementById("taskList");

    if (taskInput.value.trim() === "") {
        alert("Please enter a task.");
        return;
    }

    var li = document.createElement("li");
    li.innerHTML = `
        <input type="checkbox" class="complete-checkbox" onclick="toggleComplete(this)">
        <span>${taskInput.value}</span>
        <button class="delete-btn" onclick="removeTask(this)">Delete</button>
    `;
    taskList.appendChild(li);

    taskInput.value = "";
}

function removeTask(element) {
    var li = element.parentElement;
    li.remove();
}

function toggleComplete(checkbox) {
    var taskText = checkbox.nextElementSibling;
    taskText.classList.toggle("completed");
}
