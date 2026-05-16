function product(name, price){
    this.name = name;
    this.price = price;
    
    this.getDetails = function(){
        console.log(`Product: ${this.name}, Price: ${this.price} USD`);
    }
}
const product1 = new product("bag", "99$");
product1.getDetails();