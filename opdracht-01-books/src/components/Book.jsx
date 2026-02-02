import { useState } from "react";

const Book = ({ cover, title, author, genre, description, year, pages }) => {
    const [aantalKeerGelezen, setAantalKeerGelezen] = useState(0);
    const [liked, setLiked] = useState(false);
    const [isFlipped, setIsFlipped] = useState(false);

    function toggleLike() {
        
        if (liked === false) {event.stopPropagation(); setLiked(true) }
        else {event.stopPropagation();setLiked(false);};
    };

    function handleFlip() {
        if(isFlipped===false){setIsFlipped(true);console.log("niet omgedraaid naar omgedraaid")}
        if(isFlipped===true){setIsFlipped(false);console.log("omgedraaid naar niet omgedraaid")}
    };

    const verhoogTeller = () => {
        setAantalKeerGelezen(aantalKeerGelezen + 1)
    }
    return (
        <article className="book" onClick={handleFlip}>
            <div className="book-inner">
                 {isFlipped ? 
            <div className="book-back">
                <h3>{description}</h3>
                <h3>Uitgekomen in {year}</h3>
                <h3>{pages} pagina's</h3>
            </div>

            : 

            <div className="book-front">
                <img src={cover} />
            <h2>{title}</h2>
            <h3>{author}</h3>
            <h4>{genre}</h4>
            {liked ? <p><button onClick={toggleLike}>❤️</button><span>Toegevoegd aan favorieten.</span></p> : <button onClick={toggleLike}>🤍</button>}
            <button onClick={verhoogTeller}>Aantal keer gelezen: {aantalKeerGelezen}</button>
                </div>}
            </div>
           
            
        </article>
    );
}

export default Book;
