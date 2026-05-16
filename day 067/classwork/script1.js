// function Person(name, age){
//     this.name = name;
//     this.age = age;
//     console.log(`Hi, I am ${name} and I am ${age} years old.`)
// }
// const person1 = new Person('kote', 11);


// function car(brand, year = 2020){
//     this.brand = brand;
//     this.year = year;
//     console.log(`This is a ${brand} from ${year}`);
// }
// const car1 = new car('mercedes')


// function Library(name, books){
//     this.name = name;
//     this.books = books;
// }
// function ListBooks(){
//     console.log(books);
// }
// const myLibrary = new Library('City Library', ['1984', 'To Kill a Mockingbird']);
// myLibrary.listBooks();


// function Rectangle(width, height) {
//     this.width = width;
//     this.height = height;

//     this.area = function() {
//         return width * height;
//     };
// }

// // Example usage:
// const rect = new Rectangle(5, 10);
// console.log(rect.area());


// function Student(name, marks) {
//     this.name = name;
//     this.marks = marks;

//     this.hasPassed = function() {
//         let sum = 0;
//         let count = 0;

//         for (let i = 0; i < marks.length; i++) {
//             sum += marks[i];
//             count++;
//         }

//         let result = sum / count;

//         return result >= 50;
//     };
// }

// const student1 = new Student('kote', [60, 70, 80]);
// console.log(student1.hasPassed());

// const student2 = new Student('gio', [40, 30, 20]);
// console.log(student2.hasPassed());


// function Counter() {
//     let value = 0;

//     this.increment = function() {
//         value = value + 1;
//     };

//     this.getValue = function() {
//         return value;
//     };
// }

// const counter = new Counter();
// counter.increment();
// counter.increment();
// console.log(counter.getValue());


function Phone(details) {
    this.brand = details.brand;
    this.model = details.model;
    this.price = details.price;

    this.info = function() {
        return "This is a " + this.brand + " " + this.model + " priced at " + this.price + " USD.";
    };
}

const myPhone = new Phone({ brand: 'Apple', model: 'iPhone 14', price: 999 });
console.log(myPhone.info());
