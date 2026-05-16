function noDuplicates(lst){
    const set = new Set(lst);
    const newLst = [];
    for(let i of set){
        newLst.push(i);
    };
    return newLst;
};
console.log(noDuplicates(["kote", "kote", "deded"]));