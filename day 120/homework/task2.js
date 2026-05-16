function invert(map){
    let map1 = new Map();
    for(let [key, value] of map){
        map1.set(value, key);
    };
    return map1;
};
console.log(invert(new Map([['a', 1], ['b', 2], ['c', 1]])));