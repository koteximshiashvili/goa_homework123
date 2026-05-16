const texts = [
    'ეს არის პირველი ტექსტი.',
    'მეორე ტექსტი,.',
    'ეს მესამე ტექსტია.',
    'ეს არის მეოთხე ტექსტი.',
    'და ეს არის მეხუთე ტექსტი.'
];
let index = 0;

function changeText() {
    document.getElementById('text').textContent = texts[index];
    index = (index + 1) % texts.length;
}

setInterval(changeText, 5000);