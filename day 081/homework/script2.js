const ball = document.querySelector('.circle')
let position = 0;
const ballSpeed = 2;
const maxPosition = 50;
const minPosition = 0;
let movingRight = true;

setInterval(function() {
    if (movingRight) {
        position += ballSpeed;
        if (position >= maxPosition) {
            movingRight = false;
        }
    } else {
        position -= ballSpeed;
        if (position <= minPosition) {
            movingRight = true;
        }
    }

    ball.style.left = position + 'px';
}, 1000);