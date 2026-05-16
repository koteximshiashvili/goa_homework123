const myDiv = document.querySelector("div");
const ul = document.createElement('ul')
for(let i = 0; i < 5; i++){
    let li = document.createElement('li');
    li.innerHTML = `element ${i}`
    ul.appendChild(li)
}
document.body.appendChild(ul)