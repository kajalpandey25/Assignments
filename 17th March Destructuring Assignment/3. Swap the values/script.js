let x = 5;
let y = 10;


function swap(x, y) {
    return [y, x]
}


[x, y] = swap(x, y);

console.log(x); // Output: 10
console.log(y); // Output: 5