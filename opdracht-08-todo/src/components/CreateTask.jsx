const CreateTask = ({ textInput, setTextInput, newtask, setNewtask }) => {

    const userInputHandler = (e) => {
        setTextInput(e.target.value);
    };

    const submitMessageHandler = (e) => {
        e.preventDefault();

        setNewtask([...newtask, textInput])
        setTextInput("");



    };

    return (<>
        <form action="">
            <textarea name="" id="" cols="50" rows="5" onChange={userInputHandler} value={textInput}>

            </textarea><br></br>
            <button onClick={submitMessageHandler}>Nieuwe taak toevoegen</button>
        </form>
    </>);
}

export default CreateTask;