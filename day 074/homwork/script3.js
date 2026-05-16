// 1. divის შექმნა
const div = document.createElement('div');
div.textContent = 'div';
document.body.appendChild(div);

// 2. divის ამოღება
document.body.removeChild(div);

// 3. ახალი ulის შექმნა და liის დამატება
const ul = document.createElement('ul');
const li = document.createElement('li');
li.textContent = '0';
ul.appendChild(li);
document.body.appendChild(ul);

// 4. liის ამოღება
ul.removeChild(li);

// 5. ისევ divის შექმნა და ამოღება
const div1 = document.createElement('div');
div1.textContent = 'div';
document.body.appendChild(div1);
document.body.removeChild(div1);
