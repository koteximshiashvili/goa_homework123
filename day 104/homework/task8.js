// Using Destructuring with Map and Filter: Write a function that filters an array of objects based on a condition and uses destructuring to access object properties within the filter function.


const people = [
    { name: 'Sandro', age: 25, country: 'GE' },
    { name: 'Jumberi', age: 32, country: 'GE' },
    { name: 'Kote', age: 11, country: 'GE' },
    { name: 'Daviti', age: 40, country: 'GE' },
  ];
  
const olderThan30 = (arr) => {
    return arr.filter(({ age }) => age > 30);
};

const result = olderThan30(people);

console.log(result);
  