function func(card){
    return card.map((el, index) => index < card.length - 3 ? "*" : el)
}
console.log(func([1,2,3,4,5,6,7,8]))