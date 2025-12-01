import { useState } from "react";

import './App.css'
import Message from './components/Message'
import MessageList from './components/MessageList'

function App() {

      const [textInput, setTextInput] = useState("");
    const [message, setMessage] = useState([]);
    const name ="hallo";

    const userInputHandler = (e) => {
        setTextInput(e.target.value);
    };

    const submitMessageHandler = (e) => {
        e.preventDefault();

        setMessage([...message,textInput])
        setTextInput("");
    };

  return (
    <>
    <form action="">
        <textarea name="" id="" cols="50" rows="5" onChange={userInputHandler}>
            
        </textarea>
        
        </form><button onClick={submitMessageHandler}>Toevoegen</button>
      {message.map(m =>{
        <MessageList key={m.index } name={name} message={m}/>}
        
      )}
      
    </>
  )
}

export default App
