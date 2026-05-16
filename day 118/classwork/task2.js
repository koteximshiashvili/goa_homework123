class Card{
    #pin;
    constructor(money, pin, facts){
        this.money = money;
        this.pin = pin;
        this.facts = facts;
    }
    set money(new_money){
        if(new_money < 0){
            return "invalid";
        }
        else{
            this._money = new_money;
        }
    }
    set pin(new_pin){
        if (String(new_pin).length > 4){
            return "invalid"
        }
        else{
            this.#pin = new_pin;
        }
    }
    withraw(amount){
        const question = prompt("what is the pin? ");
        if (question === this.#pin){
            this._money -= amount;
        }
        else{
            return "invalid"
        }
    }
    mimateba(amount){
        const question = prompt("what is the pin? ");
        if (question === this.#pin){
            this._money += amount;
        }
        else{
            return "invalid"
        }
    }
    get money(){
        return this._money
    }
    get pin(){
        const question = prompt("tell me a fact? ");
        if (this.facts.includes(question)){
            return this.facts, this.#pin;
        }
    }
}