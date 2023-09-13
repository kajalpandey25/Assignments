// Create a object with first_name, last_name and age 
let person = {
    first_name:  "Kajal", 
    last_name: "Pandey",
    age: 18
}

// call the function with obj and callback 
function logindays(person, logresult) {
       let full_name = person.first_name + " " +  person.last_name;     // concatinate the string 
       let age = person.age * 365;               //  convert age in days
       let final_result = `The person's full name is ${full_name} and their age in days is ${age}`;    // collect the final result
         logresult(final_result)   // call the callback function 
}


// Define a new function wchich logs the inputs 
function displayResult(final) {
      console.log(final);
}


logindays(person, displayResult);