// 1. ახალი პარაგრაფის შექმნა
const p1 = document.createElement('p');
p1.textContent = 'პარაგრაფი 1';
document.body.appendChild(p1);

// 2. ახალი სურათის ელემენტის შექმნა
const img = document.createElement('img');
img.src = 'image.jpg';
img.alt = 'სურათის აღწერა';
document.body.appendChild(img);

// 3. ახალი ბუტონის შექმნა
const button = document.createElement('button');
button.textContent = 'დააჭირეთ აქ';
document.body.appendChild(button);

// 4. ახალი სექციის შექმნა
const section = document.createElement('section');
document.body.appendChild(section);

// 5. ახალი ფორმის შექმნა
const form = document.createElement('form');
document.body.appendChild(form);
