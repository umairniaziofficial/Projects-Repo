const queEl = document.getElementById("que");
const ansEl = document.getElementById("ans");
const btnEl = document.getElementById("btn");
const BMIEl = document.getElementById("BMI");

BMIEl.style.display = "none";
const SubmitButton = document.getElementById("submit");

let questionEl = [
  {
    question: "What is your weight in kilograms?",
    placeholder: "Enter your weight e.g 58.4 kg",
  },
  {
    question: "What is your height in meters?",
    placeholder: "Enter your height e.g 1.85928",
  },
  {
    question: "Have you gained or lost weight recently?",
    placeholder: "Gained? 'Y' or 'N'",
  },
];

let counter = 0;
let ansArray = [];

window.onload = () => {
  queEl.innerHTML = questionEl[counter].question;
  ansEl.placeholder = questionEl[counter].placeholder;
};

btnEl.addEventListener("click", () => {
  ansArray[counter] = ansEl.value;
  ansEl.value = "";
  counter++;
  if (counter === questionEl.length) {
    console.log("Answers:", ansArray);
  } else {
    queEl.innerHTML = questionEl[counter].question;
    ansEl.placeholder = questionEl[counter].placeholder;
  }

  if (counter === questionEl.length - 1) {
    btnEl.style.display = "none";
    SubmitButton.style.display = "inline";
    ansEl.type = "text";
  }

  console.log(counter);
});

SubmitButton.addEventListener("click", () => {
  BMIEl.style.display = "block";
  let weight = parseFloat(ansArray[0]);
  let height = parseFloat(ansArray[1]);
  let BMIResult = weight / (height * height);
  let remarks;

  if (BMIResult < 18.5) {
    remarks = "Underweight";
  } else if (BMIResult >= 18.5 && BMIResult < 25) {
    remarks = "Normal weight";
  } else if (BMIResult >= 25 && BMIResult < 30) {
    remarks = "Overweight";
  } else {
    remarks = "Obese";
  }
  BMIEl.innerHTML = `BMI is: ${BMIResult.toFixed(2)} Remarks: ${remarks}`;
  alert(`BMI is: ${BMIResult.toFixed(2)} Remarks: ${remarks}`);
});
