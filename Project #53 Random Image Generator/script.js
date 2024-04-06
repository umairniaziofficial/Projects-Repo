const boxes = document.querySelectorAll(".box");
const gridcontainerEl = document.querySelector(".grid-container");

let currentImage = 300;

for (let i = 0; i < 6; i++) {
    currentImage += i;
    let imageurl = `https://source.unsplash.com/random/300x${currentImage}`;
    let divEl = document.createElement("div");
    let imgEl = document.createElement("img");
    imgEl.src = imageurl;
    divEl.appendChild(imgEl);
    gridcontainerEl.appendChild(divEl);
}
