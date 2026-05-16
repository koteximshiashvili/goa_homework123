fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json()).then(res => {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let names = ''
    for(let i = 0; i < alphabet.length; i++){
        res.forEach(user => {
            if (user.name[0].toLowerCase() === alphabet[i]){
                names += user.name + ', ';
            };
        });
    };
    document.querySelector('.names').innerHTML += names;
});