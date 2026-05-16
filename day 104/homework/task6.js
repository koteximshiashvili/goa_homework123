// Combining Destructuring and Rest Syntax: Use both destructuring and rest syntax together for flexible assignments.

const person = {
    firstname: 'kote',
    age: 11,
    country: 'GE'
  };
  
  const { firstname, age, ...otherDetails } = person;
  
  console.log(firstname);
  console.log(age);
  console.log(otherDetails);
  