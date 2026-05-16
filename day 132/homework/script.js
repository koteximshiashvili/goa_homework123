const MY_API_KEY = '7b598d0802da44659e151d9fcb677817'

async function getNews(){
    let randomThings = ['elon musk', "tesla", "apple", 'facebook', 'instagram', 'technology']
    let fetchedData = await fetch(`https://newsapi.org/v2/everything?q=${randomThings[Math.floor(Math.random() * randomThings.length)]}&from=2025-02-18&sortBy=top&apiKey=${MY_API_KEY}`)
    if(!fetchedData.ok){
        throw new Error("Error.")
    }
    let data = await fetchedData.json()
    let randomNumber = Math.floor(Math.random() * data.articles.length);
    document.querySelector('h2').innerHTML = data.articles[randomNumber].title;
    document.querySelector('p').innerHTML = data.articles[randomNumber].description;
    document.querySelector('img').src = data.articles[randomNumber].urlToImage;
}
getNews()
async function getNewsBySearch(){
    let fetchedData = await fetch(`https://newsapi.org/v2/everything?q=${document.querySelector('input').value}&from=2025-02-18&sortBy=top&apiKey=${MY_API_KEY}`)
    if(!fetchedData.ok){
        throw new Error("Error.")
    }
    let data = await fetchedData.json()
    let randomNumber = Math.floor(Math.random() * data.articles.length);
    document.querySelector('h2').innerHTML = data.articles[randomNumber].title;
    document.querySelector('p').innerHTML = data.articles[randomNumber].description;
    document.querySelector('img').src = data.articles[randomNumber].urlToImage;
}
document.querySelector('button').addEventListener('click', getNewsBySearch)
