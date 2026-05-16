class Personal{
    #id;
    constructor(name, id){
        this.name = name;
        this.#id = id;
    };
    get id(){
        return this.#id;
    };
};
const kote = new Personal("kote", 9222);
kote.id = 3333;
console.log(kote.id);