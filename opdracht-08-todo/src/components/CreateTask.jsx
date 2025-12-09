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
            <div>
                <textarea name="" id="" cols="50" rows="5" onChange={userInputHandler} value={textInput} placeholder="What to do?" class="bg-white h-20 text-5xl p-3 font-arial font-semibold w-200 relative z-1 mt-10">

                </textarea>


                <button onClick={submitMessageHandler}><img class="h-20 z-2" src="/img/plus.svg" /></button></div>
        </form>
    </>);
}

export default CreateTask;