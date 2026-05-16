// Destructuring Arrays with Mixed Types: Given an array containing both primitive values and objects, extract properties from the objects using destructuring.


const mixedArray = [42, { name: 'Alice', age: 25 }, 'Hello', { name: 'Bob', age: 30 }, 100];

const objectsOnly = mixedArray.filter(item => typeof item === 'object');

const [{ name: name1, age: age1 }, { name: name2, age: age2 }] = objectsOnly;

console.log(objectsOnly);
console.log(name1, age1);
console.log(name2, age2);
