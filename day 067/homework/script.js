function person(name, age){
    this.name = name;
    this.age = age;
    
    this.introduce = function(){
        console.log(`Hi, I am ${this.name} and I am ${this.age} years old.`);
    }
}
const person1 = new person("kote", 11);
person1.introduce();