// node.js საშუალებას გვაძლევს რომ გავუშვათ ჯავასკრიპტის კოდი რაც node.jsის გარეშე არ შეგვიძლია
// dependencies არის პაკეტები რაც არის სჭირო ხოლო devdependencies არის პაკეტები რომელიც არ არის საჭირო
// npm არის node package manager რომელიც ჩვენ გვეხმარება გადმოვწეროთ საჭირო packageები
// module არის ფაილი რომელიც მოიცავს ფუნქციებს an მონაცემებს
// require გამოიყენება commonJSში მაგრამ ორივე import და require იგივეს აკეთებს

const EventEmitter = require('events');
const chat = new EventEmitter();

let members = [];
let history = [];

chat.on('join', (user) => {
  if (!members.includes(user)) {
    members.push(user);
    console.log(`${user} joined the chat`);
  } else {
    console.log(`${user} is already in the chat`);
  }
});

chat.on('leave', (user) => {
  if (members.includes(user)) {
    members = members.filter(member => member !== user);
    console.log(`${user} left the chat`);
  } else {
    console.log(`${user} is not in the chat`);
  }
});

chat.on('members', () => {
  console.log(members.join(', ') || 'No one is in the chat');
});

chat.on('message', (user, msg) => {
  if (!members.includes(user)) {
    console.log(`${user} is not in the chat cannot send message`);
    return;
  }
  const message = `${user}: ${msg}`;
  console.log(message);
  history.push(message);
});

chat.on('history', () => {
  history.forEach(msg => console.log(msg));
});


const door = new EventEmitter();
let isDoorOpen = false;

door.on('open', () => {
  isDoorOpen = true;
  console.log('opened');
});
door.on('close', () => {
  isDoorOpen = false;
  console.log('closed');
});

const window = new EventEmitter();
let isWindowOpen = false;

window.on('open', () => {
  isWindowOpen = true;
  console.log('opened');
});
window.on('close', () => {
  isWindowOpen = false;
  console.log('closed');
});

const light = new EventEmitter();
let isLightOn = false;

light.on('on', () => {
  isLightOn = true;
  console.log('turned on');
});
light.on('off', () => {
  isLightOn = false;
  console.log('turned off');
});

module.exports = { chat, door, window, light, isDoorOpen, isWindowOpen, isLightOn };
