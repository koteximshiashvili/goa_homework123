const colors = ['red', 'yellow', 'green', 'orange', 'purple', 'pink'];
let index = 0;

function changeBackgroundColor() {
        document.body.style.backgroundColor = colors[index];
        index = (index + 1) % colors.length;
}

setInterval(changeBackgroundColor, 3000);