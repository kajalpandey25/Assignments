let delay = 3;

let interval = setInterval(() => {
   console.log(`Genrate random numbers in ${delay} seconds`);
   delay--;

   if (delay === 0 ) {
      clearInterval(interval);
      
      const randomNumber = Math.floor(Math.random() * 100);
      console.log(`Randomnumber is ${randomNumber}`);
   }
}, 1000);


