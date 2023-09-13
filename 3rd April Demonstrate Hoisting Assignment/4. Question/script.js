{
    console.log(x); // Output: undefined
    console.log(y); // Output: undefined
    console.log(z); // Output: ReferenceError: z is not defined
  
    var x = 5;
    let y = 10;
    const z = 15;
  
    console.log(x); // Output: 5
    console.log(y); // Output: 10
    console.log(z); // Output: 15
  }