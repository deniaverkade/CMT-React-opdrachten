const Task = (taakid,taakcontent) => {
    return (<>
    <div className="taskdiv" key={taakid}>
        <p>{taakcontent}</p>
    </div>
    </>);
}

export default Task;