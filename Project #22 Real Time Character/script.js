let textareaEL = document.getElementById("textarea");
let lettersEL = document.getElementById("letters");
let wordsEl = document.getElementById("words");
let countbtnEl = document.getElementById("countbtn");

textareaEL.addEventListener("keyup", () => {
  updateCounter();
});

updateCounter();

function updateCounter() {
  lettersEL.innerHTML = textareaEL.value.length;

  let text = textareaEL.value;
  let words = text.split(/\s+/).filter((word) => word !== "");
  wordsEl.innerHTML = words.length;
}
