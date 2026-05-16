function sum_of_numbers(list){
    for (let i = 0; i < list.length; i++){
        return list[i] + list[i + 1];
    }
}
sum_of_numbers([1, 2, 3, 4])