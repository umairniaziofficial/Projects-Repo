const container = document.querySelector(".container");
const left = document.querySelector(".left");
const right = document.querySelector(".right");

function toggleHoverClass(element, className) {
  element.addEventListener("mouseenter", () => {
    container.classList.add(className);
  });
  element.addEventListener("mouseleave", () => {
    container.classList.remove(className);
  });
}

// Toggle hover class for left and right elements
toggleHoverClass(left, "hover-left");
toggleHoverClass(right, "hover-right");
