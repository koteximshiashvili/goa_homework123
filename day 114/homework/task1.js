class Celsius{
    constructor(celsius){
        this.tempature = celsius;
    }    
    set temperature(celsius){
        if (typeof celsius === 'number') {
            this.celsius = celsius;
          } else {
            console.log("wrong tempature");
          }
    }
    get temperature() {
        return (this.celsius * 9 / 5) + 32;
    }
}
const temp = new Celsius("efef");
console.log(temp.tempature);