// Skipping Elements: Given an array [1, 2, 3, 4, 5], extract only the first and last elements into variables, skipping the middle ones.

let nums = [1,2,3,4,5];

let [first, , , , , fifth] = nums;

console.log(first, fifth)