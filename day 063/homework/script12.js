function pass_or_fail(score){
    if (score === 50 || score >50){
        return "Pass"
    }
    else{
        return "Fail"
    }
}
console.log(pass_or_fail(75));