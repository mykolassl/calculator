const numberButtons = document.querySelectorAll('.calculator__button--number');
const operationButtons = document.querySelectorAll('.calculator__button--operator');
let display = document.querySelector('.calculator__display');

display.innerText = '';

let isFirstValue = true;
let firstValue = '';
let secondValue = '';
let operator = '';

numberButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        display.innerText += e.target.innerText;

        if(isFirstValue) {
            firstValue += e.target.innerText;
        } else {
            secondValue += e.target.innerText;
        }
    });
});

operationButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        if(!operator && e.target.innerText !== '=' && e.target.innerText !== 'C') display.innerText += e.target.innerText;
        
        if(e.target.innerText === '=') {
            calculate();
        } else if(e.target.innerText === 'C') {
            handleReset();
        } else {
            if(isFirstValue) operator = e.target.innerText;
            isFirstValue = false;
        }
    });
});

function handleReset() {
    display.innerText = '';
    firstValue = '';
    secondValue = '';
    operator = '';
    isFirstValue = true;
}

function handleCleanup(result) {
    display.innerText = result;
    firstValue = `${result}`;
    secondValue = '';
    operator = '';
    isFirstValue = true;
}

function calculate() {
    let result;

    switch(operator) {
        case '+':
            result = parseFloat(firstValue) + parseFloat(secondValue);
            break;
        case '-':
            result = parseFloat(firstValue) - parseFloat(secondValue);
            break;
        case 'x':
            result = parseFloat(firstValue) * parseFloat(secondValue);
            break;
        case '÷':
            result = parseFloat(firstValue) / parseFloat(secondValue);
            break;
    }

    console.log({firstValue, secondValue, operator, result})

    handleCleanup(Math.round(result * 100) / 100);
}