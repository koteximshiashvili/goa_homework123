function func(){
    return new Promise((resolve, reject) => {
        let random = Math.floor(Math.random() * 5000);
        if (random < 500){
            setTimeout(() => resolve("Task 1 was quick"), random);
        };
        setTimeout(() => resolve("Task 1 complete"), random);
    }).then(res => console.log(res));
};
func();