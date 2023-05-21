// Selecting elements
var todoInput = document.getElementById("todoInput");
var addButton = document.getElementById("addButton");
var todoList = document.getElementById("todoList");
var taskCount = document.getElementById("taskCount");

// Function to create a new todo item
function createTodoItem(todoText) {
  var li = document.createElement("li");
  li.innerText = todoText;

  var deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";
  deleteButton.className = "deleteButton";
  deleteButton.addEventListener("click", function() {
    li.remove();
    updateTaskCount();
  });

  var checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.addEventListener("change", function() {
    li.classList.toggle("completed");
  });

  li.appendChild(checkbox);
  li.appendChild(deleteButton);

  return li;
}

// Function to add a new todo item
function addTodo() {
  var todoText = todoInput.value.trim();

  if (todoText === "") {
    alert("Please enter a todo.");
    return;
  }

  var todoItem = createTodoItem(todoText);
  todoList.appendChild(todoItem);
  updateTaskCount();

  todoInput.value = "";
}

// Function to update the task count
function updateTaskCount() {
  var count = todoList.getElementsByTagName("li").length;
  taskCount.innerText = "Total Tasks: " + count;
}

// Event listener for the "Add" button click
addButton.addEventListener("click", addTodo);
