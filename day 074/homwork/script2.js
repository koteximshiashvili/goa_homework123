// 1. ul და liის შექმნა
const ul = document.createElement('ul');
const li1 = document.createElement('li');
li1.textContent = 'პუნქტი 1';
const li2 = document.createElement('li');
li2.textContent = 'პუნქტი 2';

ul.appendChild(li1);
ul.appendChild(li2);
document.body.appendChild(ul);

// 2. ახალი liის დამატება li1ის წინ
const li0 = document.createElement('li');
li0.textContent = '0';
ul.insertBefore(li0, li1); // li0 li1-ის წინ

// 3. ახალი divის შექმნა
const div = document.createElement('div');
div.textContent = 'div';
document.body.appendChild(div);

// 4. divის შიგნით pის დამატება
const p = document.createElement('p');
p.textContent = 'p';
div.appendChild(p);

// 5. ახალი pის დამატება divის შიგნით
const p2 = document.createElement('p');
p2.textContent = 'p';
div.insertBefore(p2, p); // p2-ის დამატება p-ის წინ
