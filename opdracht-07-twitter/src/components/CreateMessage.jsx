

const CreateMessage = ({textInput, setTextInput, message, setMessage}) => {

    const userInputHandler = (e) => {
        setTextInput(e.target.value);
    };

    const submitMessageHandler = (e) => {
        e.preventDefault();

        setMessage([...message, textInput])
        setTextInput("");



    };

    return (<>
        <form action="">
        <textarea name="" id="" cols="50" rows="5" onChange={userInputHandler} value={textInput}>
            
        </textarea><br></br>
        <button onClick={submitMessageHandler}>Toevoegen</button>
        </form>
    </>);
}

export default CreateMessage;