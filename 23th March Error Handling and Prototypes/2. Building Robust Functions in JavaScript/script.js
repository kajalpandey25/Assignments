function getperson(obj) {
    try {
        if (obj && obj.name && obj.age) {
             return `Name: ${obj.name}, Age: ${obj.age}`
        } else {
           throw new Error("Invalid parameter type.");
        }
    } catch (error) {
         return error.message;
    }
}


let detail = {name: "Rishabh", age: 18};
console.log(getperson(detail));

let Invaliddetail = {name: "Rishabh"};
console.log(getperson(Invaliddetail));


let objerror = ["name", "Rishabh"];
console.log(getperson(objerror));