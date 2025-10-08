import Book from "./Book";

const BookList = () => {
  return ( 
    <>
    <div className="booklist-container">
      <Book cover="./public/images/book-1.png" title="Harry Potter" author="J.K. Rowling"/>
      <Book cover="./public/images/book-2.png" title="Fantasia VI" author="Geronimo Stilton"/>
      <Book cover="./public/images/book-3.png" title="The Hunger Games" author="Suzanne Collins"/>
    </div>
    </>
   );
}
 
export default BookList;