function duplicates(set1, set2){
    for(let i of set1){
        if (set2.has(i)){
            set2.delete(i)
            set1.delete(i)
        }
    }
    return new Set(set1, set2);
}
console.log(duplicates(new Set(1, 2, 3), new Set(3, 4, 5)))