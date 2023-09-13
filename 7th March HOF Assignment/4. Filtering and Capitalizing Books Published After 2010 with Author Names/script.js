


let books = [
    {
      name: "The India Story",
      writer: "Bimal Jalal",
      year: 2023.
    },
    {
      name: "The London Adventure",
      writer: "Ruskin Bond",
      year: 2023.
    },
    {
      name: "The Graveyard Book",
      writer: "Neil Gaiman",
      year: 2008.
    },
    {
      name: "The Art of Racing in the Rain",
      writer: "Garth Stein",
      year: 2007.
    },
    {
      name: "The Immortal Life of Henrietta Lacks",
      writer: "Rebecca Skloot (Crown)",
      year: 2010.
    },
  ]
  
  let filter = books.filter(book => book.year >= 2010).map(book => ({...book, writer: book.writer.toUpperCase()}));
  console.log(filter);