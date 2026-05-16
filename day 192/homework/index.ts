function evenOrOdd(num : number): string{
    return num % 2 === 0 ? "even" : "odd"
};
console.log(evenOrOdd(2))
function adult(age: number): string{
    return age >= 18 ? "adult" : "kid"
};
console.log(adult(18));
function empty(str: string): string{
    return str ? "not empty" : "empty"
};
console.log(empty("lala"));
function bigger(num: number, num1: number): number{
    return Math.max(num, num1);
};
console.log(bigger(1, 4));
function strongPassword(password: string): string{
    return password.length >= 8 ? "strong" : "weak";
};
console.log(strongPassword("123456789"));