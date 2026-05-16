const container = document.querySelector('.container');
const submit = document.querySelector('.submit');
const success = document.querySelector('.success');
submit.onclick = function(){
    success.style.display = 'inline';
    container.style.position = 'relative';
    container.style.left = '100px';
}