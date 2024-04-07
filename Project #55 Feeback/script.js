const boxes = document.querySelectorAll(".box");
const btnEl = document.getElementById("btn");
const containerEl = document.querySelector(".container");
const RatingText = ["Unhappy", "Neutral", "Happy"];

let theText = "";

boxes.forEach((box, index) => {
  box.addEventListener("click", () => {
    toggleAll();
    box.classList.toggle("active");
    theText = RatingText[index];
  });
});

btnEl.addEventListener("click", () => {
  containerEl.innerHTML = ` <h2 style="margin-bottom: 10px">
  <i class="fa fa-heart" style="color: red; font-size: 50px"></i>
</h2>
<p style="font-size: 22px;">Thank you for your feedback! </p>
<p style="margin: 10px">
  <strong>Feeback:</strong><span>${theText}</span>
</p>
<p style="text-align: center; font-weight: bo">
  Your feedback is invaluable to us. Thank you for taking the time to
  share your thoughts!
</p>`;
});

function toggleAll() {
  boxes.forEach((box) => {
    box.classList.remove("active");
  });
}
