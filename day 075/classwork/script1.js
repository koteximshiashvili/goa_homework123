const form = document.querySelector('form');
const ol = document.querySelector('ol');
let count = 0;

function deleteItem(id){
    const li = document.getElementById(id);
    ol.removeChild(li);
}
form.addEventListener("submit", function(e){
    e.preventDefault();
    const itemValue = form.text.value;
    const li = document.createElement('li');

    li.innerHTML = itemValue;
    li.id = `item ${count}`

    count++;
    li.onclick = function(){
        deleteItem(li.id);
    }

    ol.appendChild(li)
})