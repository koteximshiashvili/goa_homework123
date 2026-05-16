document.querySelector('button').addEventListener('click', function(){
    const p = document.querySelector('p');
    pos = 0;
    setInterval(function(){
        pos++;
        p.style.fontSize = pos + 'px';
        if (p.style.fontSize === '40px'){
            pos--;
            p.style.fontSize = pos + 'px'
        }
    })
}, 100)