document.querySelector('button').addEventListener('click', () => {
    let year = new Date().getFullYear() - parseInt(document.getElementById('in1').value);
    let month = new Date().getMonth() + 1 - parseInt(document.getElementById('in2').value) ;
    let day = new Date().getDate() - parseInt(document.getElementById('in3').value);
    while(month >= 12){
        year++;
        month -= 12;
    };
    while(day >= 31){
        month++;
        day -= 31
    };
    document.querySelector('#years').textContent = year + " years";
    document.querySelector('#months').textContent = month + " months";
    document.querySelector('#days').textContent = day + " days";
});