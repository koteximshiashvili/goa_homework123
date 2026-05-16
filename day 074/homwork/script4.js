// 1. divის შექმნა
const div = document.createElement('div');
div.textContent = 'div';
document.body.appendChild(div);

// 2. divის მშობელი ელემენტის მიღება
const parent = div.parentNode; 
console.log(parent);

// 3. ulის და liის შექმნა
const ul = document.createElement('ul');
const li = document.createElement('li');
li.textContent = '0';
ul.appendChild(li);
document.body.appendChild(ul);

// 4. liის მშობელი ელემენტის მიღება
const liParent = li.parentNode; 
console.log(liParent);

// 5. divის მშობელი ელემენტის მიღება
const div1 = document.createElement('div');
document.body.appendChild(div1);
const div2 = div1.parentNode; 
console.log(div2);
