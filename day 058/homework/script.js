const car = {
    brand: 'BMW',
    model: 'X5',
    year: 2020,
    startEngine: function(){
        console.log('Engine started');
    },
    owner: {
        name: 'kote ximshiasshvili',
        age: 11
    }
}
console.log(car.brand, car.model);

car.color = 'black';

car.year = 2024;

delete car.model;

car.startEngine();

console.log(car);