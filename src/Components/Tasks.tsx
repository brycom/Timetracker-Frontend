
import { useEffect, useState } from 'react'
import '../Css/Tasks.css'


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
interface Props{
    setUpdateTasks:Function
    updateTasks:boolean
    selectedTask:task
    setSelectedTask:Function
}

 function Tasks(props: Props) {
  const jwtToken = localStorage.getItem('token');
  const user = localStorage.getItem('user')

    const [tasks, setTasks] = useState<task[]>([]);

    useEffect(() => {
        fetch("https://clownfish-app-o82ul.ondigitalocean.app/user/task/"+ user, {
          headers:{
          'Authorization': `Bearer ${jwtToken}`
        }})
        .then((res)=>res.json())
        .then((data)=>{
            setTasks(data);
        props.setUpdateTasks(false);
        console.log(data);}
    )
    }, [props.updateTasks]); 

  return (
    <div>
<ul className='task-ul'>
  {tasks.map((task) => (
    <li onClick={() => props.setSelectedTask(task)} className='task-li' key={task.id}>
      <div id='headline'>
        <h3>{task.category}</h3>
        <h3>{task.headline}</h3>
      </div>
      <p id='description'>{task.description}</p>
      <div id='time'>
        <h5>Start-tid: {task.startTime}</h5>
        <h5>Slut-tid: {task.endTime}</h5>
      </div>
    </li>
  ))}
</ul>

    </div>
  )
}

export default Tasks
