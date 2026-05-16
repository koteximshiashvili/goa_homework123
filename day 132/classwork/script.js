const MY_API_KEY = '34de7625689c5101454f1bde5f9f76ac'
async function weather(city) {
    const fetchedData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${MY_API_KEY}`);
    const data = await fetchedData.json();
    document.body.innerHTML += `
        <p>${data.name}: ${data.main.temp}</p>
    `
}

weather('batumi');