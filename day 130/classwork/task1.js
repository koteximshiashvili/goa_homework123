async function getPhoto(){
    try{
        let resp = await fetch('https://dog.ceo/api/breeds/image/random')
        if(!resp.ok){
            throw new Error("Error.");
        }
        let data = await resp.json()
        document.querySelector('img').src = data.message;
    }catch(err){
        console.log(err);
    };
};
document.querySelector('button').onclick = getPhoto