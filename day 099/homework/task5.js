const func = (price, tax=5) => price + (price % tax)

console.log(func(12))