function students(lst){
    const map = new Map();
    for(let i of lst){
        map.set(i.split(": ")[0], i.split(": ")[1]);
    };
    return map;
}
console.log(students(["kote: 99", "sandro: 98", "andria: 97"]));