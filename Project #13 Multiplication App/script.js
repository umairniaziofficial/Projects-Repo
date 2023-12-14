const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);
const questionEl = document.getElementById("question");
const inputEl = document.getElementById("input");
const formEl = document.getElementById("form");
const scoreEl = document.getElementById("score");
const resetEl= document.getElementById("reset");
const showAns = document.getElementById("showAns");

let score = JSON.parse(localStorage.getItem("score"));

if (!score) {
  score = 0;
}

scoreEl.innerText = `score: ${score}`;

questionEl.innerText = `What is ${num1} multiply by ${num2}?`;

const correctAns = num1 * num2;

formEl.addEventListener("submit", () => {
  const userAns = +inputEl.value;
  if (userAns === correctAns) {
    score++;
    updateLocalStorage();
  } else {
    score--;
    updateLocalStorage();
  }
});

resetEl.addEventListener("click",()=>
{
  score = +1;;
})

function updateLocalStorage() {
  localStorage.setItem("score", JSON.stringify(score));
}

showAns.addEventListener("click",()=>
{
  alert(`Correct Answer was : ${correctAns}`)
})