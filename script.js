const numfield = document.querySelector('.numfield');
const expressions = document.querySelector('.expressions')
const buttons = document.querySelectorAll('.button');
let num1 = '';
let num2 = '';
let expression = '';
let expressionAns = 0;
let isNum2 = false;
let num2Counter = 0;
let equalcheck = false

buttons.forEach(button => {
    button.addEventListener('click', function() {
        if(!isNaN(button.innerHTML)){
            if(!isNum2){
                num1 += button.innerHTML;

                if(numfield.innerHTML === '0'){
                    numfield.innerHTML = button.innerHTML;
                }
                else{
                    numfield.innerHTML += button.innerHTML;
                }
            }
            else{
                if(equalcheck === true){
                    num1 = button.innerHTML;
                    num2 = '';
                    expression = '';
                    expressionAns = 0;
                    isNum2 = false;
                    num2Counter = 0;
                    expressions.innerHTML = '';
                    numfield.innerHTML = button.innerHTML;
                    equalcheck = false;
                }
                else{
                    num2 += button.innerHTML;
                    
                    if(numfield.innerHTML === button.innerHTML && num2Counter === 0){
                        // pass
                        num2Counter = 1;
                    }
                    else if(numfield.innerHTML !== button.innerHTML && num2Counter === 0){
                        numfield.innerHTML = button.innerHTML;
                        num2Counter = 1;
                    }
                    else{
                        numfield.innerHTML += button.innerHTML;
                    }
                }
                
            }
        }
        else{
            if (button.innerHTML === 'AC'){
                num1 = '';
                num2 = '';
                expression = '';
                expressionAns = 0;
                isNum2 = false;
                num2Counter = 0;
                expressions.innerHTML = '';
                numfield.innerHTML = '0';
            }
            else if(button.innerHTML === 'DEL'){
                if(numfield.innerHTML === '0'){
                    // pass
                }
                else if(!isNum2){
                    if(numfield.innerHTML.length === 1){
                        num1 = '';
                        numfield.innerHTML = '0';
                    }
                    else{
                        num1 = num1.slice(0, -1);
                        numfield.innerHTML = num1
                    }
                }
                else if(isNum2){
                    if(num2.length === 0){
                        // pass
                    }
                    else if(numfield.innerHTML.length === 1){
                        num2 = '';
                        numfield.innerHTML = '0';
                    }
                    else{
                        num2 = num2.slice(0, -1);
                        numfield.innerHTML = num2
                    }
                }
            }
            else if(button.innerHTML === '='){
                if(num2 === ''){
                    // pass
                }
                else{
                    expression += num2;
                    if(expression.includes('×')){
                        expression = expression.replace('×', '*');
                    }
                    else if(expression.includes('÷')){
                        expression = expression.replace('÷', '/');
                    }
                    expressionAns = eval(expression);

                    numfield.innerHTML = expressionAns;
                    expressions.innerHTML += `${num2} =`;
                    num2 = '';
                    num2Counter = 0;

                    equalcheck = true;

                }

            }
            else{
                if(expression.charAt(expression.length - 2) === '+' ||
                expression.charAt(expression.length - 2) === '-' ||
                expression.charAt(expression.length - 2) === '*' ||
                expression.charAt(expression.length - 2) === '/'){

                    expression = expression.slice(0, -2) + button.innerHTML + ' ';
                    expressions.innerHTML = expression;

                    if(expression.includes('×')){
                        expression = expression.replace('×', '*');
                    }
                    else if(expression.includes('÷')){
                        expression = expression.replace('÷', '/');
                    }
                }
                else if(!isNum2){
                    expression += `${num1} ${button.innerHTML} `;
                    expressions.innerHTML = expression;
                    isNum2 = true;
                }
                else if(isNum2){
                    expression += num2
                    if(expression.includes('×')){
                        expression = expression.replace('×', '*');
                    }
                    else if(expression.includes('÷')){
                        expression = expression.replace('÷', '/');
                    }
                    expressionAns = eval(expression)

                    numfield.innerHTML = expressionAns;
                    num1 = expressionAns;
                    expression = `${num1} ${button.innerHTML} `
                    expressions.innerHTML = expression
                    num2 = '';
                    num2Counter = 0;
                }
            }

        }
        
        
    });
});


// Settings Page

const settingIcon = document.querySelector('.settings');
const settingsPage = document.querySelector('.settingspage');
const overlay = document.querySelector('.overlay');
const settingClose = document.querySelector('.close-button');

// buttons for customization
const sonicButton = document.querySelector('.sonic');
const tailsButton = document.querySelector('.tails');
const coleButton = document.querySelector('.cole');
const wilkButton = document.querySelector('.wilk');

// Elements to change when any of the customization settings are changed
const image = document.querySelector('#img');
const pageTitle = document.querySelector('title');
const header = document.querySelector('#header');
const body = document.querySelector('body');
const calculator = document.querySelector('.calculator');
const calculatorNumfield = document.querySelector('.numfield');
const calculatorButtons = document.querySelectorAll('.button');

// Open settings page

settingIcon.addEventListener('click', function() {

    settingsPage.classList.add('active'); // Adds the 'active' class to settingsPage
    overlay.classList.add('active'); // Adds the 'active' class to settingsPage
});

settingClose.addEventListener('click', function() {
    settingsPage.classList.remove('active'); // Adds the 'active' class to settingsPage
    overlay.classList.remove('active'); // Adds the 'active' class to settingsPage
});


// Functions to change the theme of the calculator when clicked

sonicButton.addEventListener('click', function() {
    img.src = 'imgs/sonic.webp';
    img.alt = 'Sonic';
    img.style.width = '60%';
    header.innerHTML = 'Sonic Calculator';
    settingIcon.style.color = 'white';
    pageTitle.innerHTML = 'Sonic Calculator';
    header.style.color = 'white';
    body.style.background = 'linear-gradient(45deg, #1643a3, #00b7ff)';
    calculator.style.backgroundColor = '#2263d2';
    expressions.style.color = 'white';
    calculator.style.borderColor = '#102c5d';
    calculatorNumfield.style.backgroundColor = '#d4faff';
    calculatorButtons.forEach(function(button){
        button.style.backgroundColor = '#102c5d';
    });
}); 

tailsButton.addEventListener('click', function() {
    img.src = 'imgs/tails.webp'
    img.alt = 'Tails'
    img.style.width = '80%';
    header.innerHTML = 'Tails Calculator';
    settingIcon.style.color = 'white';
    header.style.color = 'white';
    pageTitle.innerHTML = 'Tails Calculator';
    body.style.background = 'linear-gradient(45deg, #ff5e00, #ffc904)';
    expressions.style.color = 'white';
    calculator.style.backgroundColor = '#ffae00';
    calculator.style.borderColor = '#ff6a00';
    calculatorNumfield.style.backgroundColor = '#fff4d4';
    calculatorButtons.forEach(function(button){
        button.style.backgroundColor = '#ff6a00';
    });
});

coleButton.addEventListener('click', function() {
    img.src = 'imgs/cole.png'
    img.alt = 'Cole'
    img.style.width = '100%';
    header.innerHTML = 'Cole Calculator';
    settingIcon.style.color = 'white';
    header.style.color = 'white';
    pageTitle.innerHTML = 'Cole Calculator';
    body.style.background = 'linear-gradient(45deg, #232323, #858585)';
    calculator.style.backgroundColor = '#505050';
    expressions.style.color = 'white';
    calculator.style.borderColor = '#202020';
    calculatorNumfield.style.backgroundColor = '#e5e5e5';
    calculatorButtons.forEach(function(button){
        button.style.backgroundColor = '#202020';
        button.style.color = 'white';
    });
});

wilkButton.addEventListener('click', function() {
    img.src = 'imgs/wilk.png'
    img.alt = 'Wilk'
    img.style.width = '120%';
    header.innerHTML = 'Wilk Calculator';
    header.style.color = 'black';
    settingIcon.style.color = 'black';
    pageTitle.innerHTML = 'Wilk Calculator';
    body.style.background = 'linear-gradient(45deg, #40cfef, #ffffff)';
    calculator.style.backgroundColor = '#d1fbff';
    calculator.style.borderColor = '#6cf3ff';
    calculatorNumfield.style.backgroundColor = 'white';
    expressions.style.color = 'black';
    calculatorButtons.forEach(function(button){
        button.style.backgroundColor = '#6cf3ff';
        button.style.color = 'black';
    });
});