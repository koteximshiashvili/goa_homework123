document.getElementById('form').addEventListener('submit', function(event) {
    let lst = JSON.parse(localStorage.getItem("list")) || [];
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error');

    let userExists = false;

    for (let i = 0; i < lst.length; i++) {
        if (lst[i].email === email && lst[i].password === password) {
            userExists = true;
            break;
        }
    }

    if (password.length < 8){
        errorMessage.innerHTML = 'Password should be at least 8 characters long';
        event.preventDefault();
    }
    else if(email === '' || password === '') {
        errorMessage.innerHTML = 'Please fill out all fields';
        event.preventDefault();
    }
    else if(!userExists){
        errorMessage.textContent = "This user doesent exist";
        event.preventDefault()
    }
    else {
        errorMessage.textContent = ''
        window.location.href = 'http://127.0.0.1:5500/homework/index.html'
    };
});