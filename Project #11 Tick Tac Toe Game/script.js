const buttons = document.querySelectorAll(".game button");
const playerTurn = document.getElementById("playerTurn");
let currentPlayer = "X";
let gameOver = false;
playerTurn.textContent = "X";

function checkWinner() {
    const winPatterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (const pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (
            buttons[a].textContent &&
            buttons[a].textContent === buttons[b].textContent &&
            buttons[a].textContent === buttons[c].textContent
        ) {
            buttons[a].style.backgroundColor = "yellow";
            buttons[b].style.backgroundColor = "yellow";
            buttons[c].style.backgroundColor = "yellow";
            gameOver = true;

            if (currentPlayer === "X") {
                currentPlayer = "O";
            } else {
                currentPlayer = "X";
            }
            playerTurn.textContent = `${currentPlayer} wins!`;
            alert(`${currentPlayer} wins!`);
            return;
        }
    }

    if (![...buttons].some((button) => button.textContent === "")) {
        gameOver = true;
        playerTurn.textContent = "It's a draw!";
    }
}

function handleButtonClick(event) {
    if (!gameOver && event.target.textContent === "") {
        event.target.textContent = currentPlayer;
        event.target.style.backgroundColor =
            currentPlayer === "X" ? "#a1e887" : "blue";
        if (currentPlayer === "X") {
            playerTurn.style.color = "RED";
        } else {
            playerTurn.style.color = "GREEN";
        }
        currentPlayer = currentPlayer === "X" ? "O" : "X";
        playerTurn.textContent = currentPlayer;
        checkWinner();
    }
}

buttons.forEach((button) => {
    button.addEventListener("click", handleButtonClick);
});
