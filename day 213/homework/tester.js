const { chat } = require('./index');

chat.emit('join', 'giorgi');
chat.emit('members');
chat.emit('message', 'kote', 'hi');
chat.emit('message', 'giorgi', 'hi');
chat.emit('leave', 'luka');
chat.emit('history');

const { door, window, light, isDoorOpen, isWindowOpen, isLightOn } = require('./index');

door.emit('open');
window.emit('open');
light.emit('on');

door.emit('close');
window.emit('close');
light.emit('off');

console.log(isDoorOpen);
console.log(isWindowOpen);
console.log(isLightOn);
