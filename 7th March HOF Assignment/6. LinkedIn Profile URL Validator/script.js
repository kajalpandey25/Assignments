const regx = /^https:\/\/www.linkedin.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]$/;;

// The regular expression starts with ^ to indicate the beginning of the string, followed by https:\/\/www.linkedin.com\/in\/, which matches the required starting part of the LinkedIn profile URL.

// We then use [a-zA-Z0-9_-]{5,30} to match the profile ID, which can contain a combination of letters, digits, underscores, and hyphens, and must be between 5 and 30 characters long.

// Finally, we use [a-zA-Z0-9]$ to match the last letter or digit at the end of the URL, and $ to indicate the end of the string, which ensures that the entire string matches the regular expression.

let url1 ="https://www.linkedin.com/in/kajal-pandey-08b312260/";
const url2 = 'https://www.linkedin.com/in/invalid123%';
const url3 = 'https://www.linkedin.com/in/john_doe_12345678901234567890';
let url4 =" https://www.linkedin.com/.in/rishabh_63";


console.log(regx.test(url1));
console.log(regx.test(url2));
console.log(regx.test(url3));
console.log(regx.test(url4));