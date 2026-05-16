class Animal {
    constructor(name, age, color) {
        this.name = name;
        this.age = age;
        this.color = color;
    }

    makeSound() {
        return `${this.name} makes a sound`;
    }
}

class Car {
    constructor(type, speed, color) {
        this.type = type;
        this.speed = speed;
        this.color = color;
    }

    drive() {
        return `the ${this.color} ${this.type} is driving at ${this.speed} km/h`;
    }
}

class Person {
    constructor(name, age, job) {
        this.name = name;
        this.age = age;
        this.job = job;
    }

    greet() {
        return `hello my name is ${this.name} and i am a ${this.job}`;
    }
}

const dog = new Animal("dog", 5, "brown");
const car = new Car("honda", 120, "red");
const kote = new Person("kote", 30, "programmer");

console.log(dog.makeSound());
console.log(car.drive());
console.log(kote.greet());
