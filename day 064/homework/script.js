const myForm = document.getElementById('myForm');
function validateEmail(){
    let name = myForm.elements.name.value;
    let email = myForm.elements.email.value;
    let password = myForm.elements.password.value;

    if(name === '' || email === '' || password === ''){
        alert("please fill all fields");
        return;
    }
    else if(password.length < 8){
        alert("password is too short");
    }
        let dataBase = {
            name1: name,
            email1: email,
            password1: password
        }
        console.log(dataBase)
}