const img = document.getElementById('img');
const btn = document.querySelector('.btn');
const btn1 = document.querySelector('.btn1');
const p = document.getElementById('p');
const p1 = document.getElementById('p1');

img.style.width = '200px'

img.onclick = function () {
    img.style.width = '300px'
}
btn1.onclick = function () {
    btn1.style.display = 'none'
}

btn.onclick = function () {
    btn.style.background = 'red'
}
p.onclick = function () {
    p.innerHTML = 'hello friend'
}

p1.onclick = function () {
    p1.style.marginLeft = '20px'
}