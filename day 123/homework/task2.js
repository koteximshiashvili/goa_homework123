function func(){
    return new Promise((resolve, reject) => setTimeout(() => resolve("Task 1 complete"), Math.floor(Math.random() * 5000))).then(res => console.log(res));
};
func();