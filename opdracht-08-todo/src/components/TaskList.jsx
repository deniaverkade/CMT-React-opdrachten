import tasks from "../data.js";
import { useState } from "react";



const TaskList = () => {

const [tasks, setTasks] = useState(tasks);


    return (<>
    <form>
    <input name="taskcreate" type="text" placeholder="Voer hier uw taak in."/>
    <br></br><input type="submit" value="Toevoegen"/>
    </form>
    <div className="container">
        <h2>Aantal taken:</h2>
    </div>
    </>);
}

export default TaskList;