// 1. ახალი ul და liის დამატება
const ul = document.createElement('ul');
const li = document.createElement('li');
li1.textContent = '1';
ul.appendChild(li);
document.body.appendChild(ul);

// 2. ახალი div-ის შიგნით ulის დამატება
const nestedDiv = document.createElement('div');
nestedDiv.appendChild(ul);

// 3. ახალი divის შექმნა და დამატება
const div = document.createElement('div');
div.textContent = 'div';
document.body.appendChild(div);

// 4. divის შიგნით p-ის დამატება
const p = document.createElement('p');
p.textContent = 'p';
div.appendChild(p);

// 5. ახალი span-ის დამატება p-ის შიგნით
const span = document.createElement('span');
span.textContent = 'span';
p.appendChild(span);
