new Promise((resolve, reject) => {
    setTimeout(() => resolve("hello"), 4000)
}).then(res => console.log(res)).then(res => {
    new Promise((resolve, reject) => {
        setTimeout(() => resolve("my"), 4000)
    }).then(res => console.log(res)).then(res => {
            new Promise((resolve, reject) => {
                if(Math.floor(Math.random() * 1000) > 500){
                    setTimeout(() => resolve("friend"), 4000)
                };
                reject("failed")
            })
        }).then(res => console.log(res)).catch(err => console.log(err))
    })