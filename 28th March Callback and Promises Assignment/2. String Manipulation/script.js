
function manipulateString(string, logString) {
    let str= string.toUpperCase();


function logString() {
console.log(`The manipulated string is: ${str}`);
}

return logString;
}    


const logString = manipulateString("Hello World!");
logString();