import { useState } from "react";

const Book = ({cover,title,author}) => {
    return ( 
        <>
            <img src={cover}/>
            <h2>{title}</h2>
            <h3>{author}</h3>
        </>
     );
}
 
export default Book;
