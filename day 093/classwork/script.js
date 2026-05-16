const decreasebtn = document.getElementById('decreasebtn');
const resetbtn = document.getElementById('resetbtn');
const increasebtn = document.getElementById('increasebtn');
const count = document.getElementById('count');
let count1 = 0;

increasebtn.onclick = function(){
    count1++;
    count.textContent = count1;
    if (count1 < 0){
        count.style.background = 'red'
    }
    if (count1 > 0){
        count.style.background = 'green'
    }
    if (count1 == 0){
        count.style.background = 'orange'
    }
}
decreasebtn.onclick = function(){
    count1--;
    count.textContent = count1;
    if (count1 < 0){
        count.style.background = 'red'
    }
    if (count1 > 0){
        count.style.background = 'green'
    }
    if (count1 == 0){
        count.style.background = 'orange'
    }
}
resetbtn.onclick = function(){
    count1 = 0;
    count.textContent = count1;
    count.style.background = 'orange'
}
