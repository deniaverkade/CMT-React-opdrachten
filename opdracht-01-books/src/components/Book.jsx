import { useState } from "react";

const Book = () => {

    const [books, setBooks] = useState([
        {id:1, cover: "./public/images/book-1.png", title: "Harry Potter", author: "J.K. Rowling",},
        {id:2, cover: "./public/images/book-2.png", title: "Fantasia VI", author: "Geronimo Stilton",},
        {id:3, cover: "./public/images/book-3.png", title: "The Hunger Games", author: "Suzanne Collins",},
    ])



    return ( 
        <>
        
            {books.map(book => (
            <div key={book.id} className="book-container">
            <img src={book.cover}/>
            <h2>{book.title}</h2>
            <h3>{book.author}</h3>
            </div>
            ))}

       
        </>
     );
}
 
export default Book;