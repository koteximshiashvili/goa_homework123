function Cart(){
    let items = [];
    this.addItems = function(item){
        items.push(item);
    }
    this.getItems = function(){
        console.log(items)
    }
}
const myCart = new Cart();
myCart.addItems("bag");
myCart.getItems();