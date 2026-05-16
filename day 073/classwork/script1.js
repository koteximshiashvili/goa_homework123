const p = document.getElementById('p');
const hi = document.getElementsByClassName('hi');

for(let i = 0;i < hi.length; i++){
    hi[i].innerHTML = "hello"
    hi[i].style.color = 'red';
}
p.addEventListener('click', function(){
    console.log("kote ximshiashvili")
})