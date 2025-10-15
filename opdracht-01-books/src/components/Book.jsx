import { useState } from "react";

const Book = ({cover,title,author}) => {
    const [aantalKeerGelezen, setAantalKeerGelezen] = useState(0);
    const verhoogTeller =  () => {
        setAantalKeerGelezen(aantalKeerGelezen+1)
    }
    return ( 
        <>
            <img src={cover}/>
            <h2>{title}</h2>
            <h3>{author}</h3>
            <button onClick={verhoogTeller}>Aantal keer gelezen: {aantalKeerGelezen}</button>
        </>
     );
}
 
export default Book;
