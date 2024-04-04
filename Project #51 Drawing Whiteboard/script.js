const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const input = document.querySelector('[type="color"]');
const inputRange = document.querySelector('[type="range"]');
const selectLineCap = document.querySelector("select");
const clear = document.querySelector("button");

ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = 10;
ctx.strokeStyle = input.value;

let isDrawing = false;
let lastX = 0;
let lastY = 0;

function draw(e) {
  if (!isDrawing) return;
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);

  const x = e.type === "touchmove" ? e.touches[0].clientX : e.offsetX;
  const y = e.type === "touchmove" ? e.touches[0].clientY : e.offsetY;
  ctx.lineTo(x, y);
  ctx.stroke();
  [lastX, lastY] = [x, y];
}

function handleUpdate() {
  ctx.lineWidth = this.value;
  ctx.lineCap = this.value;
  ctx.strokeStyle = this.value;

  console.log(`${this.name}: ${this.value}`);
}

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

canvas.addEventListener("mousedown", (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", () => (isDrawing = false));
canvas.addEventListener("mouseout", () => (isDrawing = false));

canvas.addEventListener("touchstart", (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.touches[0].clientX, e.touches[0].clientY];
});

canvas.addEventListener("touchmove", draw);
canvas.addEventListener("touchend", () => (isDrawing = false));

input.addEventListener("change", handleUpdate);
inputRange.addEventListener("change", handleUpdate);
selectLineCap.addEventListener("change", handleUpdate);
clear.addEventListener("click", clearCanvas);
