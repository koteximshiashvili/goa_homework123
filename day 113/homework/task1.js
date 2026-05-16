class Person {
    constructor(firstName, lastName, age) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
    }
  
    get initials() {
        if(this.firstName.length !== 0 && this.lastName.length !== 0){
            return this.firstName[0] + this.lastName[0];
        }
        return "you need a name"
    }
    get isRetired(){
        if(this.age >= 60){
            return true
        }
        else{
            return false        
        }
    }
  }
  
const person = new Person('', '', 11);
console.log(person.initials);
console.log(person.isRetired);
