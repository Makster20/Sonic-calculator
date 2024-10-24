


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
                
            }
            else if(button.innerHTML === 'DEL'){

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
                    console.log(expression, expressionAns)

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
