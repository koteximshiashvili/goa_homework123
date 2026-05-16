class Product{
    constructor(price, discount){
        this.price = price;
        this.discount = discount;
    }
    get formatedPrice(){
        return "$" + this.price;
    }
    get discountPrice(){
        return this.price - this.discount;
    }
}
const product = new Product(100, 50);
console.log(product.formatedPrice);
console.log(product.discountPrice);