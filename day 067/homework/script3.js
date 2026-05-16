function counter(){
    let num = 0;
    this.increment = function(){
        num++;
    }
    this.getValue = function(){
        console.log(num)
    }
}
const counter1 = new counter();
counter1.increment();
counter1.increment();
counter1.increment();
counter1.getValue();