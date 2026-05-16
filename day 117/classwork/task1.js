class Calculator{
    static count = 0
    constructor(){
        Calculator.count++; 
        if(count == 2){
            Calculator.count = 0;
        };
    }
    static add(a, b){
        return a + b;
    };
    static minus(a, b){
        return a - b;
    };
    static multiply(a, b){
        return a * b;
    };
    static divide(a, b){
        return a / b;
    };

};