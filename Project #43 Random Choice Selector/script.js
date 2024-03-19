const buttonsEl = document.getElementById("buttons");
const textareaEl = document.getElementById("textarea");
const messageEl = document.getElementById("msg");
const containerEl = document.querySelector(".container");

function selectRandomButton() {
    var buttons = buttonsEl.getElementsByTagName("button");
    var randomIndex = getRandomInt(buttons.length);
    var iterations = 10;
    var interval = setInterval(() => {
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].style.backgroundColor = "black";
        }
        buttons[randomIndex].style.backgroundColor = "red";
        randomIndex = getRandomInt(buttons.length);
        iterations--;
        if (iterations === 0) {
            changeColor(buttons);
            clearInterval(interval);
            buttons[randomIndex].style.backgroundColor = "lightgreen";
            buttons[randomIndex].style.color = "black";
        }
    }, 200);
}

textareaEl.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
       const value =textareaEl.value.split(",").map(item =>item.trim()).filter(item=> item!="");
       textareaEl.value = "";
        buttonsEl.innerHTML = "";
        if(value.length > 100)
        {
            // containerEl.style.width = "1000px";
        }
        for (var i = 0; i < value.length; i++) {
            var button = document.createElement("button");
            button.textContent = value[i].trim();
            buttonsEl.appendChild(button);
        }
        messageEl.innerText = "Press Button for Another Random Choice!";
        selectRandomButton();
    }
});

async function  changeColor(buttons)
{
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].style.backgroundColor = "black";
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

buttonsEl.addEventListener("click", () => {
    
    selectRandomButton();
});
