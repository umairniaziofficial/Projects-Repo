document.addEventListener("DOMContentLoaded", () => {
  const boxContainerEl = document.querySelector(".box-container");

  function createBoxes() {
    for (let i = 0; i < 500; i++) {
      const boxEl = document.createElement("div");
      boxContainerEl.appendChild(boxEl);
      boxEl.addEventListener("mouseover", () => setColor(boxEl));
    }
  }

  function setColor(box) {
    const color = "#" + Math.floor(Math.random() * 16777215).toString(16);
    box.style.backgroundColor = color;
    box.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
    box.addEventListener("mouseout", () => {
      box.style.backgroundColor = "#242424";
      box.style.boxShadow = `0 0 2px #242424`;
    });
  }

  createBoxes();
});
