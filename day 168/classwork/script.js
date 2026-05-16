const greet = document.querySelector('.greet');
document.querySelector('button').addEventListener('click', function (){
    localStorage.setItem('user', {name: document.querySelector('.name').value, password: document.querySelector('.pass').value})
    greet.textContent = "hello " + document.querySelector('.name').value
})