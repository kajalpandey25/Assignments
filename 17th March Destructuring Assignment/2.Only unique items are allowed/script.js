let array = [1, 2, 3 ,4 ,5, 1, 2, 3 ,10];

function removedublicates(array) {
     return [ ... new Set(array)];
}

console.log(removedublicates(array));
