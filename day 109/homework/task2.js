function manualAssign(...objects) {
    const result = {};
  
    objects.forEach(obj => {
      for (let key in obj) {
          result[key] = obj[key];
      }
    });
  
    console.log(result);
  }
  
  
manualAssign({a: 1, b: 2}, {b: 3, c: 4}, {d: 5});
  
  