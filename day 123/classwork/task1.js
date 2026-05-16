new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Task 1 complete");
    }, 2000);
}).then(res => console.log(res));