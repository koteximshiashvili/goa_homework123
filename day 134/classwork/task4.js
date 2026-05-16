function func(matrix){
    return matrix.map(el => {
        let obj = {}
        obj[el[0]] = el[1]
        return obj
    })
}