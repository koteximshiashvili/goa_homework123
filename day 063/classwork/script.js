function filter(numberArr){
    let evenNumbers = []
    for(let i = 0; i < numberArr.length; i++){
        if(i % 2 === 0){
            evenNumbers.push(i);
        }
    }
    console.log(evenNumbers);
}
filter([1, 2, 3, 4, 6, 7, 8, 9, 10]);