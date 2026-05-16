function func(message, callback){
    setTimeout(() => {
        console.log(message);
        callback();
    }, 2000)
};
func("hello", () => console.log("ended"));