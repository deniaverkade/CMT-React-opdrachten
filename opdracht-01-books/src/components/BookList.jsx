import { useState } from "react";
import Book from "./Book";
import BookCounter from "./BookCounter";
import booksData from "../data.js";


const BookList = () => {

const [books, setBooks] = useState(booksData);
const [searchInput, setSearchInput] =useState("");

 const searchHandler = (e) => {
        console.log(e.target.value);
        let newSearch = e.target.value;
        setSearchInput(newSearch);
      
        const filteredBooks = booksData.filter((book)=>
        book.title.toLowerCase().includes(newSearch.toLowerCase())
    )

    setBooks(filteredBooks);
    };

  return ( 
    <>
    <div>
      <BookCounter aantal={books.length}/>

    </div>
     <div className="search">
            <input type="text" placeholder="Zoek hier uw boek" name="search" onChange={searchHandler} value={searchInput}/>

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