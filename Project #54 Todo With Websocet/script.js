const inputBox = document.getElementById("input-box");
const button = document.querySelector("button");
const list = document.getElementById("list-container");

function addTask() {
  if (inputBox.value === "") {
    alert("You must write something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    list.appendChild(li);
    inputBox.value = "";
    let span = document.createElement("span");
    span.innerHTML = "x";
    li.appendChild(span);
    saveData(); 
  }
}
document.addEventListener("keydown",(e)=>
{
    if(e.key==="Enter")
    {
        addTask();
    }
})
list.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
});

button.addEventListener("click", addTask);

function saveData() {
  localStorage.setItem("taskList", list.innerHTML); 
}

function showTask() {
  const savedData = localStorage.getItem("taskList"); 
  if (savedData) {
    list.innerHTML = savedData;
  }
}

window.addEventListener("load", showTask);
