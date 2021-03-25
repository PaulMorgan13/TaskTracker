import {useState} from "react"


const Tasks = () => { 
    const[tasks, setTasks] = useState([
        
    {
        id:1, 
        text: " shopping",
        day:"feb 5th at 2:50pm",
        reminder:"fasle",
    },
    {
        id:2, 
        text: "food shopping",
        day:"feb 5th at 2:50pm",
        reminder:"fasle",
    },

    {
        id:3, 
        text: "wash clothes",
        day:"feb 5th at 2:50pm",
        reminder:"fasle",
    },

    ])




    return (
        <>
        {tasks.map((task) =>(
            <h3 key={task.id}> {task.text} </h3>

           ))}
        </>
    )
}

export default Tasks
