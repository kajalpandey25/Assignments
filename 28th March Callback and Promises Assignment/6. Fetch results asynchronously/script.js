async function fatchdata () {
    try {
       let res = await fetch ("https://jsonplaceholder.typicode.com/todos/1")
       console.log(await res.json());
   } 
  catch (error) {
        console.error(error.message);
    }
  }
  
  
  fatchdata()