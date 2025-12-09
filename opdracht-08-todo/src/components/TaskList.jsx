import Task from "./Task";


const TaskList = ({newtask}) => {

    return (<>
        {newtask.map((nt) => (
            <Task newtask={nt} />)

        )}
    </>);
}

export default TaskList;