const counting = (starting=1, ending=10, step=1) => {
    let res = []
    for (let i = starting; i <= ending; i+=step){
        res.push(i)
    }
    return res
}

console.log(counting(10,20,2))