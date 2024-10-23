const numfield = document.querySelector('.numfield');
const buttons = document.querySelectorAll('.button');
let num1 = '';
let num2 = '';
let expression = '';

buttons.forEach(button => {
    button.addEventListener('click', function() {
        if(!isNaN(button.innerHTML)){
            num1 += button.innerHTML;
            console.log(num1);
            if(numfield.innerHTML === '0'){
                numfield.innerHTML = button.innerHTML;
            }
            else{
                numfield.innerHTML += button.innerHTML;
            }
        }
        else{

            

        }
        
        
    });
});
