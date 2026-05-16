const car = {
    make: 'Toyota',
    model: 'Prius',
    year: 2020,

    start: function() {
        return `${this.make} ${this.model} is starting.`;
    },
    stop: function() {
        return `${this.make} ${this.model} is stopping.`;
    },
    getInfo: function() {
        return `${this.year} ${this.make} ${this.model}`;
    }
};

console.log(car.start());
console.log(car.stop());
console.log(car.getInfo());
