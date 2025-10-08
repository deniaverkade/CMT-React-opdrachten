const Book = ({cover,title,author}) => {
    return ( 
        <>
        <div className="book-container">
            <img src={cover}/>
            <h2>{title}</h2>
            <h3>{author}</h3>
        </div>
        </>
     );
}
 
export default Book;