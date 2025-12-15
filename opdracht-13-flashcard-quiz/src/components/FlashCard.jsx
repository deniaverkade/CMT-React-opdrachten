
const FlashCard = ({question, answer, key, visibleA,}) => {

    

    return ( <>
    <div key={key}>
        <h1>Flashcard: {key}</h1>
        {visibleA ? <h1>{answer}</h1> : <h1>{question}</h1>}
    </div>
    
    </> );
}
 
export default FlashCard;