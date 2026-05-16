async function getJoke(category){
    try{
    let fetchedData = await fetch("https://v2.jokeapi.dev/joke/Any?safe-mode");
    if(!fetchedData.ok){
        throw new Error("Error.")
    }
    let data = await fetchedData.json();
    if(data.category.toLowerCase() !== category.toLowerCase()){
        document.querySelector('p').innerHTML = 'not the right category found';
    }
    else if('joke' in data){
            document.querySelector('p').innerHTML = data.joke;
            document.querySelector('span').innerHTML = '';
        }
    else{
            document.querySelector('p').innerHTML = data.setup;
            document.querySelector('span').innerHTML = data.delivery;
    }
    }catch(err){
        console.error(err)
    }
}
async function getAdvice(){
    try{
    let fetchedData = await fetch("https://api.adviceslip.com/advice");
    if(!fetchedData.ok){
        throw new Error("Error.")
    }
    let data = await fetchedData.json();
    document.querySelector('div').innerHTML = data.slip.advice;
    }catch(err){
        console.error(err)
    }
}
getAdvice()
document.querySelector('.advice').addEventListener('click', function(){
    getAdvice()
})
document.querySelector('.joke').addEventListener('click', function(){
    let category = document.querySelector('input').value;
    getJoke(category)
});