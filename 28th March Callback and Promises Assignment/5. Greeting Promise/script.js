
function greet(name) {
    return new Promise((resolve, reject) => {
     if (name) {
          resolve (`Hello ${name}`);
     } else {
        reject (new Error("Please provide a name"))
     }
    });
};


// if you give the name 
greet("Kajal")
.then(message =>  console.log(message))
.catch(error => console.error(error.message));  // Hello Rishabh



// if you do not give the name 
greet()
.then(message =>  console.log(message))
.catch(error => console.error(error.message));  // Please provide a name

