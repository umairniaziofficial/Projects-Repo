const NumberInput1 = document.getElementById("Num1");
const NumberInput2 = document.getElementById("Num2");
const AnswerEl = document.getElementById("Answer");
const SubmitEl = document.getElementById("Submit");
const OperationEl = document.getElementById("Operation");

SubmitEl.addEventListener("click", () => {
    const TODO = OperationEl.value;
    const Num1 = Number(NumberInput1.value);
    const Num2 = Number(NumberInput2.value);
    let TheAnswer;
    switch (TODO) {
        case "+":
            TheAnswer = Num1 + Num2;
            break;
        case "-":
            TheAnswer = Num1 - Num2;
            break;
        case "*":
            TheAnswer = Num1 * Num2;
            break;
        case "/":
            TheAnswer = Num1 / Num2;
            break;
    }
    AnswerEl.textContent = TheAnswer;
});
