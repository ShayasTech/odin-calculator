const calculator = {
    displayValue: '0',
    firstOperand: null,
    operator: null,
    waitingForSecondOperator: false,
};

updateDisplay();

const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        const { target } = event;
        if (target.className == 'operator') {
            handleOperation(target.value);
            updateDisplay();
            console.log('Operator', target.value);
            return;
        }
        if (target.className == 'dot') {
            inputDot(target.value);
            updateDisplay();
            console.log('Dot', target.value);
            return;
        }
        if (target.className == 'all-clear') {
            console.log('All Clear', target.value);
            allClear();
            updateDisplay();
            return;
        }
        if (target.className == 'delete') {
            deleteLastEntry();
            updateDisplay();
            console.log('Delete Last Digit', target.value);
            return;
        }
        console.log('Number', target.value);
        inputNum(target.value);
        updateDisplay();
    });
});

function updateDisplay() {
    const display = document.querySelector('.current-display');
    display.textContent = calculator.displayValue;
}

function inputNum(num) {
    if (calculator.waitingForSecondOperator == true) {
        calculator.displayValue = num;
        calculator.waitingForSecondOperator = false;
    } else {
        calculator.displayValue = (calculator.displayValue == '0') ? calculator.displayValue = num : calculator.displayValue += num;
    }
}

function allClear() {
    calculator.displayValue = '0';
    calculator.waitingForSecondOperator = false;
    calculator.firstOperand = null;
    calculator.operator = null;
}

function inputDot(dot) {
    if (!calculator.displayValue.includes('.')) {
        calculator.displayValue += dot;
    }
}

function deleteLastEntry() {
    calculator.displayValue = (calculator.displayValue.length == 1) ? calculator.displayValue = '0' : calculator.displayValue.slice(0, -1);
}

function handleOperation(nextOperator) {
    let inputValue = parseFloat(calculator.displayValue);
    if (calculator.firstOperand == null && !isNaN(inputValue)) {
        calculator.firstOperand = inputValue;
    }
    calculator.waitingForSecondOperator = true;
    calculator.operator = nextOperator;
}