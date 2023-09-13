// let array1 = [2, 4, 20, 22, 100];
let array1 = [32, 44, 240, -22, -100];

function max_and_min(array1) {
   let  maximum =  Math.max(...array1);
    let  minimum = Math.min(...array1);
     return (`Maximum in ${array1} is ${maximum} ,  Minimum in ${array1} is ${minimum} .`);
}

console.log(max_and_min(array1));