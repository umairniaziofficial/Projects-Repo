const buttonsEl = document.getElementById("buttons");
const textareaEl = document.getElementById("textarea");

textareaEl.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        var value = textareaEl.value.split(",");
        buttonsEl.innerHTML = "";
        for (var i = 0; i < value.length; i++) {
            var button = document.createElement("button");
            button.textContent = value[i].trim();
            buttonsEl.appendChild(button);
        }
    }
});

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

buttonsEl.addEventListener("click", () => {
    var buttons = buttonsEl.getElementsByTagName("button");
    var randomIndex = getRandomInt(buttons.length);
    var iterations = 10; 
    var interval = setInterval(() => {
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].style.backgroundColor = "white"; 
        }
        buttons[randomIndex].style.backgroundColor = "red"; 
        randomIndex = getRandomInt(buttons.length); 
        iterations--;
        if (iterations === 0) {
            clearInterval(interval);
            buttons[randomIndex].style.backgroundColor = "lightgreen"; 
        }
    }, 200); 
});
