list = [1, 2, 3]
let sum = 0;
if (list.length === 0){
    console.log("list is empty")
}
else{
    for (let i = 0; i < list.length; i++) {
        sum += list[i];
    }
    console.log(sum);
}