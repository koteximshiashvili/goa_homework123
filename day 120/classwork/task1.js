function together(lst){
    const newSet = new Set()
    for(let i of lst){
        for (let j of i){
            newSet.add(j);
        };
    };
    return newSet;
};
console.log(together([new Set([1, 2]), new Set([2, 3]), new Set([3, 4])]))