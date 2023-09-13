const regex = /^(http|https):\/\/[\w\d\s./?=#+-]+[.][a-zA-Z]+$/;


let url1 = "https://www.youtube.com/";
let url2 = "https://www.youtube.com";
let url3 = "https://www.youtubecom/";
let url4 = "https:/www.youtube.com/";

console.log(regex.test(url1));
console.log(regex.test(url2));
console.log(regex.test(url4));
console.log(regex.test(url1));