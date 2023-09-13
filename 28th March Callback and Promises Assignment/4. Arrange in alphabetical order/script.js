
let obj = [
    {
     "title": "To Kill a Mockingbird",
     "author": "Harper Lee",
     "year": 1960
   },
   {
     "title": "A Great",
     "author": "George Orwell",
     "year": 1949
   },
   {
     "title": "Pride and Prejudice",
     "author": "Jane Austen",
     "year": 1813
   },
   {
     "title": "The Catcher in the Rye",
     "author": "J.M",
     "year": 2010
   },
   {
   "title": "One Hundred Years of Solitude",
   "author": "Gabriel Garcia Marquez",
   "year": 1967
 }
   ]
 
 
 
// Define the callback function that logs the titles to console in alphabetical order
function logTitles(titles) {
   titles.sort();
   titles.forEach(title => console.log(title));
}

// Use the map function to create a new list containing only the titles of the books
const titles = obj.map(book => book.title);
console.log(titles);


// Pass the new list to the callback function
logTitles(titles);