class BankAccount{
    #balance;
    #facts;
    constructor(balance, facts){
        this.balance = balance;
        this.facts = facts;
    }
    set balance(new_balance){
        if(typeof new_balance == "number"){
            this.#balance = new_balance;
        }
        else{
            return "invalid";
        };
    };
    get balance(){
        const question1 = prompt("tell me a fact? ");
        const question2 = prompt("one more fact? ");
        if(this.#facts.includes(question1) && this.#facts.includes(question2)){
            return this.#balance;
        };
        return "invalid";
    }
    set facts(new_facts){
        if (typeof new_facts == "object"){
            this.#facts = new_facts;
        }
        else{
            return "invalid";
        };
    };
    deposit(amount){
        const question1 = prompt("tell me a fact? ");
        const question2 = prompt("one more fact? ");
        if(this.#facts.includes(question1) && this.#facts.includes(question2)){
            this.#balance += amount;
            return "new balance: " + this.#balance;
        };
        return "invalid";
    }
}
const kote = new BankAccount(9374, ["eats cereal", "drinks water"])
console.log(kote.balance)