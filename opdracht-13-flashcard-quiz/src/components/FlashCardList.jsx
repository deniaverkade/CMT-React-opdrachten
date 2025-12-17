import { useState, useEffect } from 'react';
import FlashCard from './FlashCard';
import questionData from '../data.js';


const FlashCardList = () => {


    const [cardNumber, setCardNumber] = useState(0);
    const [questions, setQuestions] = useState(questionData);
    const [answerVisible, setAnswerVisible] = useState(false);


    return (<>

        <div class="">
            <FlashCard cardID={cardNumber + 1} question={questions[cardNumber].question} answer={questions[cardNumber].answer} visibleA={answerVisible} />
        </div>
        <div class="card flex absolute ml-200 ">
            {cardNumber >= 1 && <button class="mr-4  bg-amber-400 border-amber-900 border-5 transition duration-150 ease-in-out" onClick={() => {
                setCardNumber(cardNumber - 1);
                setAnswerVisible(false);
            }}>Vorige</button>}

            {!answerVisible && <button class="mr-4  bg-amber-400 border-amber-900 border-5 transition duration-150 ease-in-out" onClick={() => { setAnswerVisible(true) }}>Toon Antwoord</button>}

            {cardNumber < 20 && <button class="mr-4  bg-amber-400 border-amber-900 border-5 transition duration-150 ease-in-out" onClick={() => {
                setCardNumber(cardNumber + 1);
                setAnswerVisible(false);
            }}>Volgende</button>}
        </div>

    </>);
}

export default FlashCardList;