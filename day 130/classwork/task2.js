async function getJoke(){
    try{
    let resp = await fetch('https://v2.jokeapi.dev/joke/Any?safe-mode')
    if(!resp.ok){
        throw new Error("Error.");
    }
    let data = await resp.json()
    if('joke' in data){
        document.querySelector('p').innerHTML = data.joke;
    }
    else{
        document.querySelector('p').innerHTML = data.setup;
        document.querySelector('span').innerHTML = data.delivery;
    }


    }catch(err){
        console.error(err)
    }
}

document.querySelector('button').addEventListener('click', function(){
    getJoke()
})