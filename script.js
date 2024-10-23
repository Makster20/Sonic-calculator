


const numfield = document.querySelector('.numfield');
const expressions = document.querySelector('.expressions')
const buttons = document.querySelectorAll('.button');
let num1 = '';
let num2 = '';
let expression = '';
let expressionAns = 0;
let isNum2 = false;

buttons.forEach(button => {
    button.addEventListener('click', function() {
        if(!isNaN(button.innerHTML)){
            if(isNum2 === false){
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
                if(numfield.innerHTML === num1){
                    numfield.innerHTML = button.innerHTML;   
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
                if(numfield.innerHTML === num1){
                    expression += `${num1} ${button.innerHTML} `;
                    expressions.innerHTML = expression;
                    isNum2 = true;
                }
                else if(numfield.innerHTML === num2){
                    expression += num2
                    expressionAns = evaluate(expression)
                    console.log(expressionAns)
                }
            }

        }
        
        
    });
});
