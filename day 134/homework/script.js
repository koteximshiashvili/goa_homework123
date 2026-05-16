import plus from './Plus.js';
import multiply from './Multiply.js';
import minus from './Minus.js';
import divide from './Divide.js';

document.querySelector('button').addEventListener('click', function(){
    let in1 = document.querySelector('.in1').value;
    let in2 = document.querySelector('.in2').value;
    let in3 = document.querySelector('.in3').value;
    if(in3 === '+'){
        alert(plus(in1, in2));
    }
    else if(in3 === '-'){
        alert(minus(in1, in2));
    }
    else if(in3 === '*'){
        alert(multiply(in1, in2));
    }
    else if(in3 === '/'){
        alert(divide(in1, in2));
    }
    else{
        alert('invalid');
    };
});