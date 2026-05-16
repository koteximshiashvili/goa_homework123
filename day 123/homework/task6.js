function func(){
    return new Promise((resolve, reject) => {
        let random = Math.floor(Math.random() * 4000);
        if (random < 300){
            reject("Task 3 failed");
        };
        setTimeout(() => resolve("Task 3 complete"), random);
    }).then(res => console.log(res)).catch(err => console.log(err));
};
func();