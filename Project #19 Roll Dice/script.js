const rollbtnEl = document.getElementById("roll");
const diceEl = document.getElementById("dice");

rollbtnEl.addEventListener("click", () => {
  
  diceEl.classList.remove("DiceANimation");

  diceEl.classList.remove("fa-dice-one", "fa-dice-two", "fa-dice-three", "fa-dice-four", "fa-dice-five", "fa-dice-six");
  
  void diceEl.offsetWidth;

  diceEl.classList.add("DiceANimation");
  let NumberScored = Math.ceil(Math.random() * 6);

  switch (NumberScored) {
    case 1:
      diceEl.classList.add("fa-dice-one");
      break;
    case 2:
      diceEl.classList.add("fa-dice-two");
      break;
    case 3:
      diceEl.classList.add("fa-dice-three");
      break;
    case 4:
      diceEl.classList.add("fa-dice-four");
      break;
    case 5:
      diceEl.classList.add("fa-dice-five");
      break;
    case 6:
      diceEl.classList.add("fa-dice-six");
      break;
  }
});
