// Destructuring in Loops: Iterate over an array of objects and destructure each object's properties directly in the loop declaration.

let arr = [{name: "kote"}, {name: "sandro"}];


for(let {name} of arr){
    console.log(name)
};