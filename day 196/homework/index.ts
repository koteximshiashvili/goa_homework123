function printId(id: number | string) : string{
    return `ID ${typeof id === "number" ? "number" : "string"}: ${id}`
}
console.log(printId(5));
function getLength(smth: string | string[]) : number{
    return smth.length 
}
console.log(getLength("jjj"));
function func(smth: number | string) : boolean { 
    return Boolean(smth);
};
console.log(func(0));
function combine(smth: string | number, smth1: string | number) : string | number{
    return smth + smth1 
}
console.log(combine(1, 2));
function move(direction: "up" | "down" | "left" | "right") : string{
    return `Moving ${direction} direction`
}
console.log(move("up"));
let role : "admin" | "user" | "guest" = "admin";
console.log(`Your role is ${role}`);
function trafficLight(color: "red" | "yellow" | 'green') : string{
    return color === "red" ? "Stop" : color === "yellow" ? "Wait" : "Go"
}
console.log(trafficLight("red"));
function makeRequest(request: "GET" | "POST" | "PUT" | "DELETE") : string {
    return `Making ${request} request`
}
console.log(makeRequest("GET"));
function rollDice() : string{
    return ["one", "two", "three", "four", "five", "six"][Math.floor(Math.random() * 6)];
}
console.log(rollDice());
class Person{
    name: string;
    age: number;
    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }
    greet(){
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`)
    }
}
const pers = new Person("adamiani", 0)
pers.greet()
class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  makeSound(): void {
    console.log(`${this.name} makes a sound.`)
  }
}

class Dog extends Animal {
  makeSound(): void {
    console.log(`${this.name} says: Woof!`)
  }
}

class Cat extends Animal {
  makeSound(): void {
    console.log(`${this.name} says: Meow!`)
  }
}

const dog = new Dog("dzagli");
dog.makeSound();

const cat = new Cat("kata");
cat.makeSound();

class BankAccount {
  private balance: number;

  constructor(initialBalance: number = 0) {
    this.balance = initialBalance;
  }

  deposit(amount: number) {
    this.balance += amount;
    console.log(`deposited: $${amount}`);
  }

  withdraw(amount: number) {
    if (amount > this.balance) {
      console.log("you dont have enough money");
      return;
    }
    this.balance -= amount;
    console.log(`withdrawed: $${amount}`);
  }

  getBalance() {
    return this.balance;
  }
}

const myAccount = new BankAccount(100);
myAccount.deposit(50);
myAccount.withdraw(30);
console.log(myAccount.getBalance());
class MathHelper {
  static add(a: number, b: number): number {
    return a + b;
  }

  static subtract(a: number, b: number): number {
    return a - b;
  }

  static multiply(a: number, b: number): number {
    return a * b;
  }
}

console.log(MathHelper.add(69, 420));
console.log(MathHelper.subtract(69, 420));
console.log(MathHelper.multiply(420, 69));
class User {
  private _password: string = "";

  set password(newPassword: string) {
    if (newPassword.length < 6) {
      console.log("password must be at least 6 characters");
    } else {
      this._password = newPassword;
    }
  }

  get password(): string {
    return "**";
  }
}

const user = new User();

user.password = "imscammer";


console.log(user.password);