import { useState } from "react";
import Book from "./Book";
import BookCounter from "./BookCounter";

const BookList = () => {

const [books, setBooks] = useState([
        {id:1, cover: "./public/images/book-1.png", title: "Harry Potter", author: "J.K. Rowling",},
        {id:2, cover: "./public/images/book-2.png", title: "Fantasia VI", author: "Geronimo Stilton",},
        {id:3, cover: "./public/images/book-3.png", title: "The Hunger Games", author: "Suzanne Collins",},
    ])

  return ( 
    <>
    <div>
      <BookCounter aantal={books.length}/>
    </div>
    <div className="booklist-container">
      {books.map(book => (
            <div key={book.id} className="book-container">
              
            <Book cover={book.cover} title={book.title} author={book.author}/>
            </div>
            ))}

      

    </div>
    </>
   );
}
 
export default BookList;