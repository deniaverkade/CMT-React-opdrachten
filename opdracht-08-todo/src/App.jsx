import './App.css'
import CreateTask from './components/CreateTask';
import TaskList from './components/TaskList'
import { useState } from "react";


function App() {

  const [textInput, setTextInput] = useState("");
  const [newtask, setNewtask] = useState([]);


  return (
    <>
      <div class="ml-130">
        <h1 class="text-white text-9xl font-arial font-bold">To Do List</h1>
        <CreateTask textInput={textInput} setTextInput={setTextInput} newtask={newtask} setNewtask={setNewtask} />
        <TaskList newtask={newtask} />
      </div>
    </>
  )
}

export default App
