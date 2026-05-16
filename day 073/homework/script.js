const text = document.querySelector('.text');
const btn = document.querySelector('.btn');
const texts = document.querySelector('.texts')

text.textContent = 'hi';
text.style.color = 'red';
btn.addEventListener('click', function(){
    console.log(text.textContent)
});

texts.style.color = text.style.color;
text.style.color = texts.style.color;
