
// Reverse string 
let name = "Kajal";
let bag = "";
setTimeout(() => {
     for (let i = name.length-1; i >= 0; i--) {
      bag+=name[i]
    }
    console.log(bag);
}, 2000);


