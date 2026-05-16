const btn = document.querySelector('.darkmode');
btn.addEventListener('click', function(){
    document.body.style.backgroundColor = 'rgb(51, 51, 51)'
    btn.style.backgroundColor = 'rgb(68, 68, 68)'
    btn.innerHTML = 'turn on light mode'
    if (document.body.style.backgroundColor === 'rgb(51, 51, 51)'){
        btn.addEventListener('click', function(){
            document.body.style.backgroundColor = 'white'
            btn.style.backgroundColor = 'rgb(51, 51, 51)'
            btn.innerHTML = 'turn on dark mode'
        })
    }
})