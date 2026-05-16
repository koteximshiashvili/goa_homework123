function maximums(map){
    let list = [];
    let maximum = 0;
    for(let [key, value] of map){
        if (value > maximum){
            maximum = value;
        };
    };
    for (let [key, value] of map){
        if(value === maximum){
            list.push(key);
        };
    };
    return list;
};
console.log(maximums(new Map([['a', 5], ['b', 3], ['c', 5]])));