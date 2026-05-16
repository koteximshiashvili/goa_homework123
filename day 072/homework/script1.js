const time = document.querySelector('.time');
function UpdateTime(){
    const now = new Date();
    const hours = String(now.getHours());
    const minutes = String(now.getMinutes());
    const seconds = String(now.getSeconds());
    time.textContent = `${hours}:${minutes}:${seconds}`;
}
setInterval(UpdateTime, 1000)