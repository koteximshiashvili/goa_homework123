let obj = {
    afefef: 1,
    b: 2,
    c: 3
}
for(let i in obj){
    if (obj[i].length < 5){
        console.log(`${i}: ${obj[i]}`)
    }
}