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
            handleCleanup();
        } else {
            isFirstValue = false;
            operator = e.target.innerText;
        }
    });
});

function handleCleanup() {

}

function calculate() {
    let result;

    switch(operator) {
        case '+':
            result = parseInt(firstValue) + parseInt(secondValue);
            break;
        case '-':
            result = parseInt(firstValue) - parseInt(secondValue);
            break;
        case 'X':
            result = parseInt(firstValue) * parseInt(secondValue);
            break;
        case '÷':
            result = parseInt(firstValue) / parseInt(secondValue);
            break;
    }

    display.innerText = result;
}