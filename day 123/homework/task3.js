function func(){
    return new Promise((resolve, reject) => setTimeout(() => resolve("First"), Math.floor(Math.random() * 3000))).then(res => console.log(res)).then(res => setTimeout(() => console.log("Second"), Math.floor(Math.random() * 3000)));
};
func();