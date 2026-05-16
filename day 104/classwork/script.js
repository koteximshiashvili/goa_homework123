let num1 = prompt("enter num 1: ")
let num2 = prompt("enter num 2: ")
let exit = prompt("enter: ")

while(exit !== 'exit'){
    console.log(num1 * num2);
    num1 = prompt("enter num 1: ")
    num2 = prompt("enter num 2: ")
    exit = prompt("enter: ")
}