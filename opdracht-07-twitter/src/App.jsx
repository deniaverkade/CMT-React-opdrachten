import { useState } from "react";

import './App.css'
import MessageList from './components/MessageList'
import CreateMessage from "./components/CreateMessage";

function App() {

  const [textInput, setTextInput] = useState("");
  const [message, setMessage] = useState([]);
  const name = "Denia";



  return (
    <>

      <CreateMessage textInput={textInput} setTextInput={setTextInput} message={message} setMessage={setMessage} />
      <MessageList name={name} message={message} />

    </>
  )
}

export default App
