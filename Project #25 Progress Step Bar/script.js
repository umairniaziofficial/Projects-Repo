const counterEl = document.getElementById("counter");
const barEl = document.getElementById("bar");
const testbtnEl = document.getElementById("test");

let counter;
testbtnEl.addEventListener("click", () => {
  {
    counter=0;
    RunBar();
  }
});

function RunBar() {
  setInterval(() => {
    if (counter != 100) {
      counter++;
      counterEl.textContent = counter+"%";
      barEl.style.width = counter + "%";
    } else {
      return;
    }
  }, 100);
}
