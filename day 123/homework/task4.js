function func(){
    return new Promise((resolve, reject) => setTimeout(() => reject("Task 3 failed"), Math.floor(Math.random() * 4000))).catch(err => console.log(err))
}
func()