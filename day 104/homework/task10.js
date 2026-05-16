// Manual Destructuring Function Rules
// Function Name: manualDestructing
// Input Parameter: Accepts one parameter obj, which should be an object to be destructured.
// Output: Returns an array containing the values of the properties of the input object.
// Usage: Usable by passing an object as an argument.
// Execution: Extracts the values of the properties from the input object manually, without using any built-in destructuring syntax.
// Returned Array: Contains the values of the properties of the input object in the same order as they are defined in the object.

function manualDestructing(obj) {
    const values = [];
    
    for (let key in obj) {
      values.push(obj[key]);
    }
  
    return values;
  }
  
  const person = { name: 'Kote', age: 11, country: 'GE' };
  
  
  console.log(manualDestructing(person));
  