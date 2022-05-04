const calculator = {
    displayValue: '0',
    firstOperand: null,
    waitingForSecondOperator: false,
    operator: null,
};

updateDisplay();

let buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        let { target } = event;
        if (!target.matches('button')) { return; }
        if (target.className == 'operator') {
            console.log("Operator", target.value);
            return;
        }
        if (target.className == 'dot') {
            console.log('Dot', target.value);
            return;
        }
        if (target.className == 'all-clear') {
            console.log("All Clear", target.value);
            return;
        }
        if (target.className == "delete") {
            console.log("Delete", target.value);
            return;
        }
        if (target.className == 'equals') {
            console.log("Equals", target.value);
            return;
        }

        console.log("Numbers", target.value);

    });
});

function updateDisplay() {
    let display = document.querySelector(".current-display");
    display.textContent = calculator.displayValue;
}