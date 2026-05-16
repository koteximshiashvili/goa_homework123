let arr = [1,2,3,4,5];
// foreach
arr.forEach(el => {
    console.log(el);
});
arr.forEach(el => {
    console.log(el + 2);
});
arr.forEach(el => {
    console.log(el % 2 === 0);
});
arr.forEach(el => {
    console.log(el % 2 !== 0);
});
arr.forEach(el => {
    console.log(el > 3);
});
// map
console.log(arr.map(el => el + 2));
console.log(arr.map(el => el % 2 === 0 ? "even" : "odd"));
console.log(arr.map(el => el / 2));
console.log(arr.map(el => el.toString()));
console.log(arr.map((_, index) => index % 2 === 0));
// reduce
console.log(arr.reduce((accumulator, value) => accumulator + value));
console.log(arr.reduce((accumulator, value) => accumulator * value));
console.log(arr.reduce((accumulator, value) => accumulator / value));
console.log(arr.reduce((accumulator, value) => accumulator - value));
console.log(arr.reduce((accumulator, value) => accumulator % value));