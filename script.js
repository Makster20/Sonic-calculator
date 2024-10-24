const numfield = document.querySelector('.numfield');
const expressions = document.querySelector('.expressions')
const buttons = document.querySelectorAll('.button');
let num1 = '';
let num2 = '';
let expression = '';
let expressionAns = 0;
let isNum2 = false;
let num2Counter = 0;

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

            }
            else{
                if(!isNum2){
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
