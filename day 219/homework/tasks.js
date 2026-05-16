// os მოდული ანუ operating system  გვეხმარება გავიგოთ ინფორმაცია ოპერაციული სისტემის შესახებ

const os = require('os');
console.log(os.type());
// ეს აბრუნებს ოპერაციული სისტემის ტიპს

console.log(os.arch());
// ეს აბრუნებს პროცესორის არქიტექტურას

console.log(os.platform());
// ეს აბრუნებს პლატფორმას

console.log(os.hostname());
// ეს აბრუნებს ჰოსტის სახელს

console.log(os.totalmem());
// ეს აბრუნებს რამდენი მეხსიერება აქვს კომპიუტერს

// path მოდული გამოიყენება ფაილის გზებთან მუშაობისთვის
const path = require('path');
let filePath = './index.js';
console.log(path.basename(filePath));
// ეს აბრუნებს ფაილის სახელს

console.log(path.extname(filePath));
// ეს აბრუნებს ფაილი რაშიც არის დაწერილი მაგალითად .txt

let fullPath = path.join('/homework', 'index.js');
console.log(fullPath);შ
// ეს აბრუნებს მთლიან გზას ფაილის

console.log(path.resolve('homework', 'index.js'));
// ეს აბრუნებს მთლიან გზას ფაილამდე
