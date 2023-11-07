const boxesEl = document.getElementById("boxes");
const addEl = document.getElementById("add");

let colCounter = 0;
let currentRow;

CreateNote();
addEl.addEventListener("click", CreateNote);

function CreateNote() {
  colCounter++;

  if (colCounter % 2 === 1) {
    currentRow = document.createElement("div");
    currentRow.classList.add("row");
  }

  const newCol = document.createElement("div");
  newCol.classList.add("col");

  if (colCounter > 1) {
    newCol.classList.add("tilt-in-fwd-tl");
  }
  newCol.innerHTML = `
    <textarea
      id="note${colCounter}"
      cols="30"
      rows="10"
      class="note"
      placeholder="Enter your Note Here"
    ></textarea>
    <div class="delete">
      <button class="delete-button" onclick="deleteNote(this)">Delete</button>
    </div>
  `;

  currentRow.appendChild(newCol);
  setTimeout(() => {
  newCol.classList.remove("tilt-in-fwd-tl");
  }, 1000);
  boxesEl.appendChild(currentRow);
}

function deleteNote(button) {
  const note = button.parentNode.parentNode;
  note.remove();
}
