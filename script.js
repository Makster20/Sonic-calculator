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

settingIcon = document.querySelector('.settings');
settingsPage = document.querySelector('.settingspage');
overlay = document.querySelector('.overlay');
settingClose = document.querySelector('.close-button');

settingIcon.addEventListener('click', function() {

    settingsPage.classList.add('active'); // Adds the 'active' class to settingsPage
    overlay.classList.add('active'); // Adds the 'active' class to settingsPage
});

settingClose.addEventListener('click', function() {

    settingsPage.classList.remove('active'); // Adds the 'active' class to settingsPage
    overlay.classList.remove('active'); // Adds the 'active' class to settingsPage
});