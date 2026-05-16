function func(words){
    return words.filter(el => el === el.split().reverse().join(""))
}
console.log(func(["level", "ana"]))