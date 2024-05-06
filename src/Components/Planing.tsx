
import Calander from './Calander'
import Tasks from './Tasks'
import '../Css/Planing.css'
import { useEffect } from 'react';
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
  tasks:task[]
  setTasks:Function
  selectedTask:task
  setselectedTask:Function
  startTime: string
  setStartTime:Function
  date: string
  setDate:Function
  updateTasks:boolean
  setUpdateTasks:Function
  newTask:task
  setNewTask:Function



}

function Planing(props:Props) {




  useEffect(() => {
    getDefaultTasks();
  }, []);

  useEffect(() => {
    props.setNewTask({...props.newTask, date: props.date})
  }, [props.date]);


  function getDefaultTasks(){
    fetch("https://oyster-app-oquaf.ondigitalocean.app/defaulttasks")
    .then((res)=>res.json())
    .then((data)=>{
      props.setTasks(data)

    })
  }

  function addDefaultTask(){

    if (
      props.newTask.category === '' ||
      props.newTask.date === '' ||
      props.newTask.headline === '' ||
      props.newTask.description === '' ||
      props.newTask.startTime === ''
    ) {
      alert('Du måste fylla i alla fält');
      return;
    }

  
    
    fetch("https://oyster-app-oquaf.ondigitalocean.app/task", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        category: props.newTask.category,
        headline: props.newTask.headline,
        description: props.newTask.description,
        date: props.newTask.date,
        endTime: props.newTask.endTime,
        startTime: props.startTime,
        timeSpent: 0
      })
    })
   .then((res) =>{ res.json()
    getDefaultTasks();
    props.setNewTask({
      category: '',
      date: props.date,
      description: '',
      endTime: new Date().toLocaleTimeString('sv-se'),
      headline: '',
      id: '',
      startTime: '',
      timeSpent: 0
    })
   })
  }

  function addTaskToUser(){
    if (
      props.newTask.category === '' ||
      props.newTask.date === '' ||
      props.newTask.headline === '' ||
      props.newTask.description === '' ||
      props.newTask.startTime === ''
    ) {
      alert('Du måste fylla i alla fält');
      return;
    }
    fetch("https://oyster-app-oquaf.ondigitalocean.app/task/6638a6e076d5ea6b30c71bdd", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        category: props.newTask.category,
        headline: props.newTask.headline,
        description: props.newTask.description,
        date: props.newTask.date,
        endTime: props.newTask.endTime,
        startTime: props.newTask.startTime,
        timeSpent: 0
      })
    })
   .then((res) =>{ res.json()
    ,props.setUpdateTasks(true)
  ,    props.setNewTask({
    category: '',
    date: props.date,
    description: '',
    endTime: new Date().toLocaleTimeString('sv-se'),
    headline: '',
    id: '',
    startTime: new Date().toLocaleTimeString('sv-se'),
    timeSpent: 0
  })})
  }








  return (
    <>
      <div id='top-section'>
      <div id='default-div'>
        <h2>Att göra:</h2>
        <ul id='default-tasks'>
          {props.tasks.map((task)=>(
            <li key={task.id} onClick={()=>props.setselectedTask(task)}>
              <h4>{task.headline}</h4>
              <p>Categori: {task.category}</p>

            </li>
          ))}
        </ul>
        <input type="text" placeholder='Vald upgift:' value={props.selectedTask?.headline} />
        <div id='default-tasks-btn-div'>
          <button id='start-btn'>Starta</button>
          <button id='stop-btn'>Avsluta</button>
          </div>
      </div>
        <form onSubmit={(e)=>{addDefaultTask(), e.preventDefault()}} id='custom-task'>
          <h2>Skapa ny upgift:</h2>
          <input required name="category" type="text" placeholder='Kategori:' value={props.newTask?.category} onChange={(e)=>props.setNewTask({...props.newTask, category: e.target.value})} />
          <input required name='headline' type="text" placeholder='Rubrik:' value={props.newTask?.headline} onChange={(e)=>props.setNewTask({...props.newTask, headline: e.target.value})} />
          <input required name='description' type="text" placeholder='Beskrivning:' value={props.newTask?.description} onChange={(e)=>props.setNewTask({...props.newTask, description: e.target.value})} />
          <input required name='date' type="date" value={props.newTask?.date} onChange={(e)=>props.setNewTask({...props.newTask, date: e.target.value})}/>
          <input required name='time' type="time" step="any" value={props.newTask?.startTime} onChange={(e)=>props.setNewTask({...props.newTask, startTime: e.target.value})} />
          <div id='new-task-btn-div'>
          <button type='submit' id='add-btn'>Lägg till</button>
          <button type='button' onClick={addTaskToUser} id='custom-btn'>Starta</button>
          </div>
        </form>
      < Calander date={props.date} setDate={props.setDate}/>
      </div>
      <div id='bottom-section'>
      <Tasks updateTasks={props.updateTasks} setUpdateTasks={props.setUpdateTasks}/>
      </div>
      </>
  
  )
}

export default Planing
