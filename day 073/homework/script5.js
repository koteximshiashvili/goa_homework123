const text = document.querySelector('.text');
const btn = document.querySelector('.btn');
const input = document.getElementById('input');

btn.addEventListener('click', function(){
    text.textContent = input.value
})