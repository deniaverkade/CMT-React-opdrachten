const Task = ({ newtask }) => {
    return (<>
        <div class="mt-10 mb-10" >
            <p class="bg-white h-20 text-5xl p-3 font-arial font-semibold w-180 z-1 absolute">{newtask}</p></div>
        <img class="h-20 z-2 absolute ml-180" src="/img/check.svg" />
        <img class="h-20 z-2  ml-200" src="/img/trash.svg" />
    </>);
}

export default Task;