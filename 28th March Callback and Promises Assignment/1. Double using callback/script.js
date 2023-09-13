// Define a  HOF function
function doubleArray(array, callback) {
    return array.map(callback);
}


// callback  in doublearray
function double(num) {
return num * 2;
}


// Define a array 
const array = [1, 2, 3, 4, 5];

// call the function 
console.log(doubleArray(array, double));