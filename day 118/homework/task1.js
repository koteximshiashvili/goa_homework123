class Person{
    #id
    #facts
    constructor(name, surname, age, id, facts){
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.id = id;
        this.facts = facts;
    }
    set name(new_name){
        if (typeof new_name == "string"){
            this._name = new_name;
        }
        else{
            return "invalid";
        };
    };
    get name(){
        return this._name;
    };
    set surname(new_surname){
        if (typeof new_surname == "string"){
            this._surname = new_surname;
        }
        else{
            return "invalid";
        };
    };
    get surname(){
        return this._surname;
    };
    set age(new_age){
        if (typeof new_age == "number"){
            this._age = new_age;
        }
        else{
            return "invalid";
        };
    };
    get age(){
        return this._age;
    };
    set facts(new_facts){
        if (typeof new_facts == "object"){
            this.#facts = new_facts;
        }
        else{
            return "invalid";
        };
    }
    set id(new_id){
        if (typeof new_id == "number" && String(new_id).length <= 4){
            this.#id = new_id;
        }
        else{
            return "invalid"
        };
    };
    get personal(){
        const question1 = prompt("tell me a fact? ");
        const question2 = prompt("one more fact? ");
        if(this.#facts.includes(question1) && this.#facts.includes(question2)){
            return [this.#facts, this.#id];
        };
        return "invalid";
    };
};

const kote = new Person("kote", "ximshiashvili", 11, 9374, ["eats cereal", "drinks water"])
console.log(kote.personal)