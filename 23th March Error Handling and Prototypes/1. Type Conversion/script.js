// 1. Way 
// function converttonumber(argument) {
//       let convert = Number(argument);
//       if (Number.isNaN(convert)) {
//        console.log("Invalid Number");
//       }
//       else {
//         console.log(convert);
//       }
// }

// converttonumber("rishabh");


// 2. Way
function converttonumber(argument) {
    const num = Number(argument);
    if(Number.isNaN(num)) {
        throw new Error("Invalid number");
    }
        return num;
}

try {
    const num = converttonumber("42");
    console.log(num);
  } catch (error) {
    console.error(error.message); 
  }
  
  try {
       const num = converttonumber("rishabh");
    console.log(num); // This line won't be executed because an error is thrown
  } catch (error) {
    console.error(error.message); 
  }
  


  

  