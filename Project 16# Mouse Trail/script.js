var bodyEl = document.querySelector("body");

bodyEl.addEventListener("mousemove", (e) => {
    let MouseXPosition = e.offsetX;
    let MathYPosition = e.offsetY;

    let randomNumber = Math.ceil(Math.random() * 130);

    const thespan = document.createElement("span");

    thespan.style.width = randomNumber + "px";
    thespan.style.height = randomNumber + "px";

    thespan.style.left = MouseXPosition + "px";
    thespan.style.top = MathYPosition + "px";

    bodyEl.appendChild(thespan);

    setTimeout(() => {
        thespan.remove();
    }, 1000);
});

let clicked = false;

var clickmeEl = document.getElementById("clickme");
var buttonEl = document.getElementById("button");
var h1EL = document.createElement("h1");

clickmeEl.addEventListener("click", () => {
    if (clicked === false) {
        h1EL.innerHTML = "Why did you click me :O";
        buttonEl.append(h1EL);
        bodyEl.style.backgroundImage = 'url("/Fish.png")';
        bodyEl.style.backgroundSize = "cover";
        clickmeEl.style.backgroundColor = "lightgreen";
        clickmeEl.innerText = "GO BACK?";
        clicked = true;
        console.log(clicked);
    } else if (clicked === true) {
        h1EL.innerHTML = "SAY NO TO CLICK!";
        bodyEl.style.backgroundImage = 'url("/Fish1.png")'; // Corrected the URL
        bodyEl.style.backgroundSize = "cover";
        clickmeEl.style.backgroundColor = "rgb(255, 164, 182)";
        clickmeEl.innerText = "CLICK ME!";
        clicked = false;
        console.log(clicked);
    }
});

