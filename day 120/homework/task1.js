function qvnenakrebi(set1, set2){
    set1 = Array.from(set1);
    set2 = Array.from(set2)
    for(let i = 0; i < set1.length; i++){
        for(let j = 0; j < set2.length; j++){
            if(set1[i] === set2[j] && i === j){
                return true;
            };
        };
    };
    return false;
}
console.log(qvnenakrebi(new Set([1, 2]), new Set([1, 2, 3])));