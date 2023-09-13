const person = {
    name: 'John',
    address: {
      street: '123 Main St',
      city: 'Anytown',
      state: 'CA',
      zip: '12345'
    }
  };
  
  const { name, street } = extractNameAndStreet(person);
  
  console.log(name); // Output: 'John'
  console.log(street); // Output: '123 Main St'
  
  
  function extractNameAndStreet(person) {
    const { name, address: { street } } = person;
    return { name, street };
  }