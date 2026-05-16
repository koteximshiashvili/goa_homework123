const funcObjects = (...objects) => {
    let result = {};

    for (let obj of objects) {
      for (let key in obj) {
        result[key] = obj[key];
      }
    }
  
    return result;
  };

console.log(funcObjects([{name: 'kote'}, {name: 'merabi'}]))
  