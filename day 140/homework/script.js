function authorization(){
    let lst = JSON.parse(localStorage.getItem("list")) || [];
    const uname = document.getElementById('uname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error');
            
    let userExists = false;

    for (let i = 0; i < lst.length; i++) {
        if (lst[i].name === uname || lst[i].email === email || lst[i].password === password) {
            userExists = true;
            break;
        }
    }

    if (password.length < 8) {
        errorMessage.innerHTML = 'password should be at least 8 characters long';
    } else if (email === '' || password === '' || uname === '') {
        errorMessage.innerHTML = 'please fill out all fields';
    } else if (userExists) {
        errorMessage.textContent = "this name email or password is already taken";
    } else {
        lst.push({name: uname, email: email, password: password});
        localStorage.setItem("list", JSON.stringify(lst));
        window.location.href = "http://127.0.0.1:5500/homework/login.html";
    }
}
document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
    authorization();
});
