const btn = document.querySelector('.btn');
btn.addEventListener('click', function (){
    let age = confirm("are you 18 years old?");
    if(age === true){
        alert("you are adult")
    }
    else{
        alert("you are kid")
    }
})