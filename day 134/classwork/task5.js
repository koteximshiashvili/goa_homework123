function func(lst){
    let names = []
    lst.forEach(obj => {
        names.push(obj.name);
    });
    names = names.sort()
    return lst.map(el => el[names[0]])
}