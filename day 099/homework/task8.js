const greeting = (Obj = { name: "maia", age: 25, city: "tbilisi" }) => {
    return `hello i am ${Obj.name} ${Obj.age} years old and i live in ${Obj.city}`;
  };

console.log(greeting());