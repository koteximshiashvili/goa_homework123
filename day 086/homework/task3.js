let arr = [];
for(let i = 0; i < 10; i++){
    arr.push(i);
};
for(let i = 0; i < arr.length; i++){
    arr[i] = arr[i] * 2;
};
console.log(arr);