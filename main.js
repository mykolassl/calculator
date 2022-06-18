const numberButtons = document.querySelectorAll('.calculator__button--number');
const operationButtons = document.querySelectorAll('.calculator__button--operator');
let display = document.querySelector('.calculator__display');

display.innerText = '';

let isFirstValue = true;
let firstValue = '';
let secondValue = '';
let operator;

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