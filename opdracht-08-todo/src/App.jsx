import './App.css'
import CreateTask from './components/CreateTask';
import TaskList from './components/TaskList'
import { useState } from "react";


function App() {

    const [textInput, setTextInput] = useState("");
    const [newtask, setNewtask] = useState([]);


  return (
    <>
    <CreateTask textInput={textInput} setTextInput={setTextInput} newtask={newtask} setNewtask={setNewtask}/>
      <TaskList newtask={newtask}/>
    </>
  )
}

export default App
