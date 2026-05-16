function filter1(array, int){
    let numbers = []
    for(let i = 0; i < array.length; i++){
        if(array[i] >= int){
            numbers.push(array[i])
        }
    }
    console.log(numbers)
}
filter1([1,2,3,4,5,6,7,8,9], 5)
