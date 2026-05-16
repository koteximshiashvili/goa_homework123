const form = document.querySelector('form');
 
form.addEventListener('submit', function(event){
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const facebook = form.facebook.value;
    const table = document.querySelector('table');
    event.preventDefault();
    const tr = document.createElement("tr");
    const data = [name, email, password, facebook];
    for(let i = 0; i < data.length; i++){
        const td = document.createElement("td");
        td.innerHTML = data[i];
        tr.appendChild(td);
    }
    table.appendChild(tr);
});