// process.argv არის მასივი რომელიც შეიცავს ყველა არგუმენტს რომლითაც გაშვებულია Node.js
console.log(process.argv);
const thirdArg = process.argv[2];
console.log(thirdArg);
console.log(process.pid);
console.log(process.cwd());