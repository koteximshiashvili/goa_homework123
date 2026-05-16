function func(){
    return new Promise((resolve, reject) => setTimeout(() => resolve("First"), 2000)).then(() => setTimeout(() => console.log("Second"), 1000))
}