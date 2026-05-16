const EventEmitter = require("events");
const emitter = new EventEmitter();

emitter.on("message", (text) => {
  console.log(text);
});

// emit იძახებს ივენთს და გადასცემს არგუმენტებს
emitter.emit("message", "hello"); 

// emitს ჯერ გადაეცემა ივენთის სახელი და შემდეგ callbackის არგუმენტები

const emitter1 = new EventEmitter();

emitter1.on("start", () => {
  console.log("Program started ✅");
});

emitter1.on("message", (text) => {
  console.log(text);
});

emitter1.emit("start");
emitter1.emit("message", "hello");

const emitter2 = new EventEmitter();

emitter2.on("start", () => {
  console.log("System started");
});

emitter2.on("data", (num) => {
  if (num % 2 === 0) console.log(`${num} is even`);
  else console.log(`${num} is odd`);
});

emitter2.on("end", () => {
  console.log("ended");
});

emitter2.emit("start");
emitter2.emit("data", 7);
emitter2.emit("data", 10);
emitter2.emit("end");

const emitter3 = new EventEmitter();

// on იმუშავებს ყოველ გამოძახებაზე
emitter3.on("ping", () => {
  console.log("ping on");
});

// once იმუშავებს მხოლოდ ერთხელ
emitter3.once("ping", () => {
  console.log("ping once");
});

emitter3.emit("ping");
emitter3.emit("ping");
emitter3.emit("ping");