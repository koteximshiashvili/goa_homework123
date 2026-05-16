document.querySelector('button').addEventListener('click', () => {
    fetch("https://dog.ceo/api/breeds/image/random").then(res => res.json()).then(res => {
        document.querySelector('img').src = res.message;
    });
});