document.querySelector('button').addEventListener('click', function(){
    const div = document.querySelector('div');
    if (div.style.opacity === "0"){
        div.style.opacity = "1"
    }
    else{
        div.style.opacity = "0"
    }
})