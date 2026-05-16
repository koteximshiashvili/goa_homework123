class Animal{
    constructor(weight, height){
        this.weight = weight;
        this.height = height;
    }
}
class Iremi extends Animal{
    constructor(weight, height, bakes){
        super(weight, height);
        this.bakes = bakes
    }
}
class Dog extends Iremi{
    constructor(weight, height, bakes, sound){
        super(weight, height);
        this.bakes = bakes;
        this.sound = sound;
    }
}
constructor()