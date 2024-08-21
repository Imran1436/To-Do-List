// Function to add a new task
function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    // Create a new list item
    var li = document.createElement("li");
    li.innerHTML = taskInput.value + '<button class="delete-btn" onclick="deleteTask(this)">Delete</button>';

    // Append the new list item to the task list
    taskList.appendChild(li);

    // Clear the input field
    taskInput.value = "";
}

// Function to delete a task
function deleteTask(button) {
    var li = button.parentNode;
    var taskList = li.parentNode;
    taskList.removeChild(li);
}
