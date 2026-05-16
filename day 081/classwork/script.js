
const rectangle = document.querySelector('.box');

const maxWidth = innerWidth;
const maxHeight = innerHeight;

let x = 0;
let y = 0;
let speed = 5;

function animate() {
    for(let i = 0; i <= maxWidth; i += speed){
        x += speed;
        rectangle.style.left = x + "px";
    }
    for(let i = 0; i <= maxHeight; i += speed){
        y += speed;
        rectangle.style.top = y + "px";
    }
    for(let i = 0; i <= maxWidth; i += speed){
        x += speed;
        rectangle.style.left = x + "px";
    }
    for(let i = 0; i <= maxHeight; i += speed){
        y += speed;
        rectangle.style.top = y + "px";
    }
}

animate();

