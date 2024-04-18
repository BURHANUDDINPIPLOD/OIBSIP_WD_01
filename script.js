const display = document.getElementById('display');

function appendNumber(number) {
    display.textContent += number;
}

function appendOperator(operator) {
    display.textContent += operator;
}

function clearDisplay() {
    display.textContent = '';
}

function calculate() {
    try {
        display.textContent = eval(display.textContent);
    } catch (error) {
        display.textContent = 'Error';
    }
}
