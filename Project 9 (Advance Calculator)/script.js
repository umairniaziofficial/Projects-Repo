const buttons = document.querySelectorAll('.button');
const input = document.getElementById('Input');

input.addEventListener('keydown', (event) => {
    if (event.key === "Enter") {
        try {
            input.value = eval(input.value);
        } catch (error) {
            input.value = 'Error';
        }
    }
});

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonText = button.textContent;

        if (buttonText === 'AC') {
            input.value = '0';
        } else if (buttonText === '=') {
            try {
                input.value = eval(input.value);
            } catch (error) {
                input.value = 'Error';
            }
        } else if (buttonText === '+/-') {
            if (input.value !== '0') {
                input.value = parseFloat(input.value) * -1;
            }
        } else {
            if (input.value === '0') {
                input.value = '';
            }
            input.value += buttonText;
        }
    });
});
