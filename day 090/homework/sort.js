function sort1(array){
    let min = Math.min(array);
    let max = Math.max(array);
    let numbers = [];
    for(let i = min; i <= max; i++){
        if(array.includes(i)){
            numbers.push(i);
        }
    }
    console.log(numbers);
}
sort1([1,2,3,4,5,9,7,6,45,68,7654,36,765]);