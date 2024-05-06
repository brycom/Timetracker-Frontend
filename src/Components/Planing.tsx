
import Calander from './Calander'
import Tasks from './Tasks'
import '../Css/Planing.css'
import { useEffect, useState } from 'react';

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

function Planing() {
  const [tasks, setTasks] = useState<task[]>([]);
  const[selectedTask, setselectedTask] = useState<task>();
  const[startTime, setStartTime] = useState<string>(new Date().toLocaleTimeString('sv-se'));
  const[date, setDate] = useState<string>(new Date().toLocaleDateString('sv-se'));
  const[updateTasks, setUpdateTasks] = useState<boolean>(false)
  const[newTask, setNewTask] = useState<task>(
    {
      category: '',
      date: date,
      description: '',
      endTime: new Date().toLocaleTimeString('sv-se'),
      headline: '',
      id: '',
      startTime: new Date().toLocaleTimeString('sv-se'),
      timeSpent: 0
    }
  );

  useEffect(() => {
    getDefaultTasks();
  }, []);

  useEffect(() => {
    setNewTask({...newTask, date: date})
  }, [date]);


  function getDefaultTasks(){
    fetch("https://oyster-app-oquaf.ondigitalocean.app/defaulttasks")
    .then((res)=>res.json())
    .then((data)=>{
      setTasks(data)

    })
  }

  function addDefaultTask(){

    if (
      newTask.category === '' ||
      newTask.date === '' ||
      newTask.headline === '' ||
      newTask.description === '' ||
      newTask.startTime === ''
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
        category: newTask.category,
        headline: newTask.headline,
        description: newTask.description,
        date: newTask.date,
        endTime: newTask.endTime,
        startTime: startTime,
        timeSpent: 0
      })
    })
   .then((res) =>{ res.json()
    getDefaultTasks();
    setNewTask({
      category: '',
      date: date,
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
      newTask.category === '' ||
      newTask.date === '' ||
      newTask.headline === '' ||
      newTask.description === '' ||
      newTask.startTime === ''
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
        category: newTask.category,
        headline: newTask.headline,
        description: newTask.description,
        date: newTask.date,
        endTime: newTask.endTime,
        startTime: newTask.startTime,
        timeSpent: 0
      })
    })
   .then((res) =>{ res.json()
    ,setUpdateTasks(true)
  ,    setNewTask({
    category: '',
    date: date,
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
          {tasks.map((task)=>(
            <li key={task.id} onClick={()=>setselectedTask(task)}>
              <h4>{task.headline}</h4>
              <p>Categori: {task.category}</p>

            </li>
          ))}
        </ul>
        <input type="text" placeholder='Vald upgift:' value={selectedTask?.headline} />
        <div id='default-tasks-btn-div'>
          <button id='start-btn'>Starta</button>
          <button id='stop-btn'>Avsluta</button>
          </div>
      </div>
        <form onSubmit={(e)=>{addDefaultTask(), e.preventDefault()}} id='custom-task'>
          <h2>Skapa ny upgift:</h2>
          <input required name="category" type="text" placeholder='Kategori:' value={newTask?.category} onChange={(e)=>setNewTask({...newTask, category: e.target.value})} />
          <input required name='headline' type="text" placeholder='Rubrik:' value={newTask?.headline} onChange={(e)=>setNewTask({...newTask, headline: e.target.value})} />
          <input required name='description' type="text" placeholder='Beskrivning:' value={newTask?.description} onChange={(e)=>setNewTask({...newTask, description: e.target.value})} />
          <input required name='date' type="date" value={newTask?.date} onChange={(e)=>setNewTask({...newTask, date: e.target.value})}/>
          <input required name='time' type="time" step="any" value={newTask?.startTime} onChange={(e)=>setNewTask({...newTask, startTime: e.target.value})} />
          <div id='new-task-btn-div'>
          <button type='submit' id='add-btn'>Lägg till</button>
          <button type='button' onClick={addTaskToUser} id='custom-btn'>Starta</button>
          </div>
        </form>
      < Calander date={date} setDate={setDate}/>
      </div>
      <div id='bottom-section'>
      <Tasks updateTasks={updateTasks} setUpdateTasks={setUpdateTasks}/>
      </div>
      </>
  
  )
}

export default Planing
