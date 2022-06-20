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
        if(isFirstValue) {
            if(firstValue.length > 8) return;
            firstValue += e.target.innerText;
        } else {
            if(secondValue.length > 8) return;
            secondValue += e.target.innerText;
        }
        
        display.innerText += e.target.innerText;
    });
});

operationButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        if(firstValue === '') return;
        if(!operator && e.target.innerText !== '=' && e.target.innerText !== 'C') display.innerText += e.target.innerText;
        
        if(e.target.innerText === '=') {
            calculate();
        } else if(e.target.innerText === 'C') {
            handleReset();
        } else {
            if(isFirstValue) {
                operator = e.target.innerText;
                isFirstValue = false;
            } else if(!isFirstValue && secondValue !== '') {
                calculate();
            }
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

    if(!secondValue || !operator) return;

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
            if(secondValue === '0') return alert(':)');
            result = parseFloat(firstValue) / parseFloat(secondValue);
            break;
    }

    handleCleanup(Math.round(result * 100) / 100);
}