function greet(name){
    console.log("hello " + name)
}

function func(name, callback){
    setTimeout(() => {
        callback(name);
    }, 2000);
};
func("kote", greet);
