document.querySelector('button').addEventListener('click', function(){
    let dog = document.querySelector('.dog');
    let cat = document.querySelector('.cat');
    let fox = document.querySelector('.fox');
    if (dog.checked){
        fetch("https://dog.ceo/api/breeds/image/random").then(res => {
            if (res.status === 404){
                document.body.style.background = "url('https://cdn.discordapp.com/attachments/1237784686269304932/1346553213083586711/Screenshot_2025-01-19_at_22.11.54.png?ex=67c89ae7&is=67c74967&hm=b3d07a8c650ce8ff1c49e692a3efd7ff75fe26fc387f409988624c34273ff9eb&')"; // თუ ასეა მაშინ ვუცვლით ბოდის ბექგრაუნდ იმეჯს
                return Promise.reject("Error 404");
            }
            else if (!res.ok){
                throw new Error("ERROR. STATUS CODE: " + res.status);
            };
            return res.json();
        }).then(res => {
            document.querySelector('img').src = res.message;
        });
    }
    else if (cat.checked){
        fetch("https://api.thecatapi.com/v1/images/search").then(res => {
            if (res.status === 404){
                document.body.style.background = "url('https://cdn.discordapp.com/attachments/1237784686269304932/1346553213083586711/Screenshot_2025-01-19_at_22.11.54.png?ex=67c89ae7&is=67c74967&hm=b3d07a8c650ce8ff1c49e692a3efd7ff75fe26fc387f409988624c34273ff9eb&')"; // თუ ასეა მაშინ ვუცვლით ბოდის ბექგრაუნდ იმეჯს
                return Promise.reject("Error 404");
            }
            else if (!res.ok){
                throw new Error("ERROR. STATUS CODE: " + res.status);
            };
            return res.json();
        }).then(res => {
            document.querySelector('img').src = res[0].url;
        });
    }
    else if (fox.checked){
        fetch("https://randomfox.ca/floof/").then(res => {
            if (res.status === 404){
                document.body.style.background = "url('https://cdn.discordapp.com/attachments/1237784686269304932/1346553213083586711/Screenshot_2025-01-19_at_22.11.54.png?ex=67c89ae7&is=67c74967&hm=b3d07a8c650ce8ff1c49e692a3efd7ff75fe26fc387f409988624c34273ff9eb&')"; // თუ ასეა მაშინ ვუცვლით ბოდის ბექგრაუნდ იმეჯს
                return Promise.reject("Error 404");
            }
            else if (!res.ok){
                throw new Error("ERROR. STATUS CODE: " + res.status);
            };
            return res.json();
        }).then(res => {
            document.querySelector('img').src = res.image;
        });
    }
    else{
        alert("select one type of photo");
    };
})