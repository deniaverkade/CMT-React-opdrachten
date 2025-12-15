import { useState } from 'react';
import questions from '../data.js';
import FlashCard from './FlashCard';


const FlashCardList = () => {

    const [answerVisible, setAnswerVisible] = useState(false);
    const [cardNumber, setCardNumber] = useState(1);

    let filteredCard = questions.filter(q => q.id === cardNumber);

    const goBack = () => {
        {cardNumber > 1 ? setCardNumber(cardNumber-1) : setCardNumber(cardNumber+0)}
        setAnswerVisible(false);
    };

    const toNext = () => {
      {cardNumber < 20 ? setCardNumber(cardNumber+1) : setCardNumber(cardNumber+0)}
      setAnswerVisible(false);
    };

    const answerHandler = () => {
        {answerVisible ? <p>Antwoord is al zichtbaar!</p> : setAnswerVisible(true)}
    };

  {isLoggedIn ? ( isAdmin ? (<AdminPanel />) : (  <UserPanel />)) : (<LoginForm />)}

    return (<>

        <div>
            <FlashCard key={filteredCard.id} question={filteredCard.question} answer={filteredCard.answer} visibleA={answerVisible}/>
            <div>
                {cardNumber === 1 ? <button>Vorige</button> : <button onClick={goBack}>Vorige</button> }
                <button onClick={answerHandler}>Toon Antwoord</button>
                {cardNumber === 20 ? <button>Volgende</button> : <button onClick={toNext}>Volgende</button> }

            </div>
        </div>
    </>);
}

export default FlashCardList;