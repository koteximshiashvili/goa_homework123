const texts = document.querySelectorAll('.text');
const btn = document.querySelector('.btn');

btn.addEventListener('click', function(){
    for(let i = 0; i < texts.length; i++){
        texts[i].style.fontSize = '24px';
    }
})