// async function fatchdata () {
//     try {
//        let res = await fetch ("https://jsonplaceholder.typicode.com/posts")
//        console.log(await res.json());
//    } 
//   catch (error) {
//         console.error(error.message);
//     }
//   }
  
fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error(error));


fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error(error));
