let list = [];
for (let i = 0; i <= 30; i++){
    list.push(i)
}
let list1 = [];
for(let x = 0; x <= list.length; x++){
    if(x % 2 === 0){
        list1.push(x);
    }
}
console.log(list1);