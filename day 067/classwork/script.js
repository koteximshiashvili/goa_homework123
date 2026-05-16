function person(firstName, lastName, age, sisters, brothers){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.sisters = sisters;
    this.brothers = brothers;
}
const person1 = new person("kote", "ximshiashvili", 11, 0, 2);
const person2 = new person("giorgi", "ximshiashvili", 11, 3, 2);
const person3 = new person("sandro", "ximshiashvili", 11, 1, 2);
const person4 = new person("mate", "ximshiashvili", 11, 2, 0);
const person5 = new person("nikoloz", "ximshiashvili", 11, 0, 0);
//კონსტრუქტორი არის ფუნქცია რომელსაც ვიყენებთ ობიექტების შექმნისთვის.
//new არის სიტყვა ჯავასქრიპტში რომელსაც ვიყენებთ ობიექტების შექმნისას.