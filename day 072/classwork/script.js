const time = document.querySelector(".time");
let count = 21;

const t = setInterval(function(){
    count--;
    time.textContent = count;
    if(count === 0){
        clearInterval(t)
    }
}, 1000)