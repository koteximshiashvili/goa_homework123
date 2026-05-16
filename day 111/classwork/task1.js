class Square{
    constructor(width, height){
        this.width = width;
        this.height = height;
    }
    get area(){
        return this.width * 2 + this.height * 2
    }
}
const square = new Square(2, 2);
console.log(square.area);
