let timer;
let seconds = 0;

document.getElementById('start').addEventListener('click', function() {
    clearInterval(timer);
    timer = setInterval(function() {
        seconds++;
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        document.getElementById('timer').textContent = mins + ':' + secs;
    }, 1000);
});

document.getElementById('pause').addEventListener('click', function() {
    clearInterval(timer);
});

document.getElementById('reset').addEventListener('click', function() {
    clearInterval(timer);
    seconds = 0;
    document.getElementById('timer').textContent = '0:0';
});