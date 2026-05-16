function getSqrt(array, callback){
    setTimeout(() => {
        for(let i = 0; i < array.length; i++){
            array[i] = Math.sqrt(array[i]);
        };
        callback(array);
    }, 2000);
};
getSqrt([1, 4, 7, 9, 8], (array) => console.log(array));