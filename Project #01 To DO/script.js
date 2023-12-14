const TaskInputEl = document.getElementById("TaskInput");
const AddButtonEl = document.getElementById("AddButton");
const TaskListEl = document.getElementById("TaskList");

AddButtonEl.addEventListener("click", () => {
  const TodoText = TaskInputEl.value.trim();

  if (TodoText !== "") {
    AddTask(TodoText);
    TaskInputEl.value = "";
  }
});

TaskInputEl.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    const TodoText = TaskInputEl.value.trim();
    if (TodoText !== "") {
      AddTask(TodoText);
      TaskInputEl.value = "";
    }
  }
});

function AddTask(TodoText) {
  const ListItem = document.createElement("li");
  const checkbox = document.createElement("input");
  const TextLabel = document.createElement("span");
  const deleteButton = document.createElement("button");

  checkbox.type = "checkbox";
  TextLabel.textContent = TodoText;
  deleteButton.textContent = "Delete";
  deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>';

  ListItem.appendChild(checkbox);
  ListItem.appendChild(TextLabel);
  ListItem.appendChild(deleteButton);
  ListItem.classList.add("tracking-in-expand-fwd-top");

  deleteButton.addEventListener("click", () => {
    TaskListEl.classList.add("puff-out-center");
    setTimeout(() => {
      TaskListEl.classList.remove("puff-out-center");
      TaskListEl.removeChild(ListItem);
    }, 1000);
  });

  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      TextLabel.style.textDecoration = "line-through";
    } else {
      TextLabel.style.textDecoration = "none";
    }
  });

  TaskListEl.appendChild(ListItem);
}
