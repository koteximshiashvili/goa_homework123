
const btn = document.querySelector('.btn')

btn.addEventListener('click', (event) =>{
    const name = document.querySelector('.name');
    const email = document.querySelector('.email');
    const password = document.querySelector('.password');
    event.preventDefault();
    document.body.innerHTML += `
        <table style="border: 1px solid black;">
            <tr style="border: 1px solid black;">
                <th style="border: 1px solid black;">name</th>
                <th style="border: 1px solid black;">email</th>
                <th style="border: 1px solid black;">password</th>
            </tr>
            <tr style="border: 1px solid black;">
                <th style="border: 1px solid black;">${name.value}</th>
                <th style="border: 1px solid black;">${email.value}</th>
                <th style="border: 1px solid black;">${password.value}</th>
            </tr>
        </table>
    `
})