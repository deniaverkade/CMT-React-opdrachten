

const FlashCard = ({ question, answer, cardID, visibleA }) => {



    return (<>

        <section class="transition duration-150 ease-in-out">
            {visibleA ?
                <div class="card-back bg-amber-400 w-150 border-amber-800 border-8 rounded-3xl h-75 mt-50 ml-165 ">
                    <h1>Flashcard: {cardID}</h1>
                    <h1>{answer}</h1>
                </div> :
                <div class="card-front bg-amber-400  w-150 border-amber-800 border-8 rounded-3xl h-75 mt-50 ml-165 ">
                    <h1>Flashcard: {cardID}</h1>
                    <h1>{question}</h1>
                </div>}
        </section>




    </>);
}

export default FlashCard;