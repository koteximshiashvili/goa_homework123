function add(){
    let res = 0;
    for (let i = 0; i < arguments.length; i++){
        res += arguments[i]
    }
    console.log(res)
}

function minus(){
    let res = arguments[0];
    for (let i = 1; i < arguments.length; i++){
        res -= arguments[i]
    }
    console.log(res)
}
function multiply(){
    let res = arguments[0];
    for (let i = 1; i < arguments.length; i++){
        res *= arguments[i]
    }
    console.log(res)
}

function func1(func, ...args){
    func(...args)
}