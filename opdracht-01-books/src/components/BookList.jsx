import { useState } from "react";
import Book from "./Book";
import BookCounter from "./BookCounter";
import booksData from "../data.js";


const BookList = () => {

  const [books, setBooks] = useState(booksData);
  const [searchInput, setSearchInput] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Alle");
  const [genre, setGenre] = useState([
    {
    genreid: 1,
    genrevalue: "Alle",
  },
    {
    genreid: 2,
    genrevalue: "Fantasy",
  },
  {
    genreid: 3,
    genrevalue: "Sciencefiction",
  },
  {
    genreid: 4,
    genrevalue: "Avontuur",
  },
  {
    genreid: 5,
    genrevalue: "Thriller",
  },
{
    genreid: 6,
    genrevalue: "Romance",
  },]);


  const searchHandler = (e) => {
    console.log(e.target.value);
    let newSearch = e.target.value;
    setSearchInput(newSearch);

    const filteredBooks = booksData.filter((book) =>
      book.title.toLowerCase().includes(newSearch.toLowerCase())
    )

    setBooks(filteredBooks);
  };

  const filterHandler = (e) => {
    console.log(e.target.value);
    let filterValue = e.target.value;
    setSelectedCategory(filterValue);
    {
      !selectedCategory == "Alle" ? setBooks(booksData) : setBooks(booksData.filter((book) =>
        book.genre.toLowerCase().includes(filterValue.toLowerCase())));
    }
  };


  return (
    <>
      <div>
        <BookCounter aantal={books.length} />

      </div>
      <div className="search">
        <input type="text" placeholder="Zoek hier uw boek" name="search" onChangeCapture={searchHandler} value={searchInput} />

      </div>
      <div className="filter">
        <label>Filter op categorie:</label>
        <select id="category" value={selectedCategory} onChange={filterHandler}>
          {genre.map(cat => (
            <option key={cat.genreid} value={cat.genrevalue}>{cat.genrevalue}</option>
          ))}
        </select>
      </div>
      <div className="booklist-container">

        {books.map(book => (
          <div key={book.id} className="book-container">

            <Book cover={book.cover} title={book.title} author={book.author} genre={book.genre} />
          </div>
        ))}



      </div>
    </>
  );
}

export default BookList;