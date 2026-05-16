// 1. divის შექმნა
const div = document.createElement('div');
div.textContent = 'div';
document.body.appendChild(div);

// 2. ახალი divის შექმნა
const newDiv = document.createElement('div');
newDiv.textContent = 'div';

// 3. ძველი divის ჩანაცვლება ახალით
document.body.replaceChild(newDiv, div);

// 4. ulის შექმნა
const ul = document.createElement('ul');
const li = document.createElement('li');
li.textContent = '1';
ul.appendChild(li);
document.body.appendChild(ul);

// 5. liის ჩანაცვლება ახალით
const li1 = document.createElement('li');
li1.textContent = '2';
ul.replaceChild(li1, li);
