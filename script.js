console.log("CALCULATOR");
let calculator = {
    firstOperand: null,
    secondOperand: null,
    result: null,
    operator: null,
    readyForSecondOperand: false,
    displayValue: "0"
};
updateDisplay();

let buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        target = e.target.value;
        if (button.className == "all-clear") {
            allClear();
            updateDisplay();
        }
        if (button.className === 'delete') {
            deleteBack();
            updateDisplay();
        }
        if (button.className === 'number') {
            inputNumber(target);
            updateDisplay();
        }
        if (button.className === 'dot') {
            inputDot(target);
            updateDisplay();
        }
        if (button.className == 'operator') {
            sign = e.target.value;
            operate(sign);
            updateDisplay();
            console.table(calculator);
        }
    });
});

function updateDisplay() {
    displayValue = calculator.displayValue;
    display = document.querySelector(".display");
    display.textContent = displayValue;
}

function allClear() {
    calculator.secondOperand = null;
    calculator.firstOperand = null;
    calculator.result = null;
    calculator.operator = null;
    calculator.readyForSecondOperand = false;
    calculator.displayValue = "0";
}

function deleteBack() {
    if (calculator.displayValue.length == 1) {
        calculator.displayValue = 0;
    } else {
        calculator.displayValue = calculator.displayValue.slice(0, -1);
    }
}

function inputNumber(e) {
    if (calculator.operator != null && calculator.displayValue != '') {
        calculator.displayValue = '';
    }
    calculator.displayValue = (calculator.displayValue == '0') ? calculator.displayValue = e : calculator.displayValue += e;
}

function inputDot(e) {
    if (calculator.displayValue.includes('.')) {
        return
    } else {
        calculator.displayValue += e;
    }
}


//SomeThing Went Wrong
function operate(e) {
    if (calculator.readyForSecondOperand === true) {
        calculator.secondOperand = displayValue;
    } else {
        calculator.operator = e;
        calculator.firstOperand = displayValue;
        calculator.readyForSecondOperand = true;
    }
}