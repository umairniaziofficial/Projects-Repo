const all_options = document.querySelectorAll("input[type=radio]");
const submitBtn = document.getElementById("submit");
const questionEl = document.getElementById("question");
const opt_A_textEl = document.getElementById("opt_A_text");
const opt_B_textEl = document.getElementById("opt_B_text");
const opt_C_textEl = document.getElementById("opt_C_text");
const containerEl = document.querySelector(".container");

const QuestionData = [
  { question: "What does CSS stand for?", a: "Computer Style Sheets", b: "Cascading Style Sheets", c: "Creative Style Sheets", correctOption: "b" },
  { question: "Who is often called the father of modern computer science?", a: "Alan Turing", b: "Ada Lovelace", c: "Charles Babbage", correctOption: "a" },
  { question: "What is the output of console.log(2 + '2' - 1);?", a: "NaN", b: "21", c: "3", correctOption: "c" }
];

let score = 0, Current_Question = 0;

function getSelected() {
  return Array.from(all_options).find(option => option.checked)?.id;
}

function unSelectAll() {
  all_options.forEach(option => option.checked = false);
}

function loadQuestion() {
  const { question, a, b, c } = QuestionData[Current_Question];
  questionEl.textContent = question;
  opt_A_textEl.textContent = a;
  opt_B_textEl.textContent = b;
  opt_C_textEl.textContent = c;
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();
  if (answer) {
    if (answer === QuestionData[Current_Question].correctOption) score++;
    unSelectAll();
    Current_Question++;
    if (Current_Question < QuestionData.length) loadQuestion();
    else containerEl.innerHTML = `<h2 style="text-align:center">You answered ${score}/${QuestionData.length} questions correctly</h2><button onclick="location.reload()" class="btn2">Reload</button>`;
  }
});

loadQuestion();
