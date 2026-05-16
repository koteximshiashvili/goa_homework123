let arr = [1,2,3,4,5,354,3242,3546565,43546,53435,4565,46];
arr = arr.sort();
arr.push(89);
console.log(arr);
let arr1 = [1,234,654323,456,543,4];
let newArr = arr.concat(arr1);
console.log(newArr.sort());
newArr.push(1);
newArr.push(1);
newArr.push(1);
console.log(newArr.reverse())
console.log(arr.splice(arr.indexOf(1), 1));
arr = arr.join(" ");
arr = arr.split(" ");
console.log(arr.includes('1'));