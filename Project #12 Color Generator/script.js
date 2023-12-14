const containerEl = document.querySelector(".container");
const boxesEl = document.querySelector(".boxes");
const inputNo = document.getElementById("inputNo");
let noOfboxes;
const generateButtonEl = document.getElementById("generate");

generateButtonEl.addEventListener("click", generateBoxes);
inputNo.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    generateBoxes();
  }
});

function generateBoxes() {
  noOfboxes = parseInt(inputNo.value);

  if (!isNaN(noOfboxes) && noOfboxes >= 1 && noOfboxes <= 100) {
    boxesEl.innerHTML = "";

    for (let index = 0; index < noOfboxes; index++) {
      const colorContainerEl = document.createElement("div");
      colorContainerEl.classList.add("box");
      boxesEl.appendChild(colorContainerEl);
    }

    const colorContainerEls = document.querySelectorAll(".box");

    colorContainerEls.forEach((colorContainerEl) => {
      const newColorCode = randomColor();
      colorContainerEl.style.backgroundColor = "#" + newColorCode;
      colorContainerEl.innerText = "#" + newColorCode;
    });
  } else {
    alert("Please enter a valid quantity between 1 and 100.");
  }
}

function randomColor() {
  const chars = "0123456789abcdef";
  const colorCodeLength = 6;
  let colorCode = "";
  for (let index = 0; index < colorCodeLength; index++) {
    const randomNum = Math.floor(Math.random() * chars.length);
    colorCode += chars.substring(randomNum, randomNum + 1);
  }
  return colorCode;
}
