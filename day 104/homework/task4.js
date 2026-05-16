// Skipping Values: Skip over unwanted elements in an array or properties in an object during destructuring.

let arr = [1,2,3];

let [one, , three] = arr;

console.log(one, three);