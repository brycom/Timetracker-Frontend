
import { useEffect, useState } from 'react'
import '../Css/Tasks.css'

interface Props{
    setUpdateTasks:Function
    updateTasks:boolean
}

interface task{
    category: string 
    date: string 
    description: string
    endTime: string
    headline: string
    id:string 
    startTime: string
    timeSpent:number
}

 function Tasks(props: Props) {

    const [tasks, setTasks] = useState<task[]>([]);

    useEffect(() => {
        fetch("https://oyster-app-oquaf.ondigitalocean.app/task/6638a6e076d5ea6b30c71bdd")
        .then((res)=>res.json())
        .then((data)=>
            setTasks(data),
        props.setUpdateTasks(false)
    )
    }, [props.updateTasks]); 

  return (
    <div>
      <ul className='task-ul'>{tasks.map((task) =>(
    
        <li className='task-li' key={task.id}>
            <div id='headline'>
            <h3>{task.category}</h3>
            <h3>{task.headline}</h3>
            </div>
            <p id='description'>{task.description}</p>
            <div id='time'>
            <h5>Start-tid: {task.startTime}</h5>
            <h5>Slut-tid: {task.endTime}</h5>
            </div>
      </li>))}
      </ul>
    </div>
  )
}

export default Tasks
