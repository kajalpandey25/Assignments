let arr = [1 ,2 ,3 ,4 , 5 ];

function numberchecker(arr){
    return function check(num) {
         return arr.includes(num);
        }
}

let check = numberchecker(arr);
console.log(check(2));
console.log(check(20));
console.log(check(12));
console.log(check(5));