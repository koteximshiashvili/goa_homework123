fetch("https://fakestoreapi.com/produc").then(res => {
    if (res.status === 404){
        document.body.style.background = "url('https://cdn.discordapp.com/attachments/1237784686269304932/1346553213083586711/Screenshot_2025-01-19_at_22.11.54.png?ex=67c89ae7&is=67c74967&hm=b3d07a8c650ce8ff1c49e692a3efd7ff75fe26fc387f409988624c34273ff9eb&')"
    }
    else if (!res.ok){
        throw new Error("ERROR. STATUS CODE: " + res.status)
    }
    return res.json()
}).then(res => {
    console.log(res)
}).catch(err => console.error(err))