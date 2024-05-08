
import Tasks from './Tasks'
import '../Css/Statistics.css'
import Chart from './Chart'
import { useEffect, useState } from 'react'


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
interface tpc{
  category: string,
  timeSpent: number
}


interface Props{
  setUpdateTasks:Function
  updateTasks:boolean
  selectedTask:task
  setSelectedTask:Function
}
function Statistics(props:Props) {
  const jwtToken = localStorage.getItem('token');
  const userl = localStorage.getItem('user');
  const currentDate = new Date();
currentDate.setDate(currentDate.getDate() - 7)
  //const [tasks, setTasks] = useState<task[]>()
  const[totalTime, setTotalTime] = useState<number>(0);
  const[user, setUser] = useState<string>();
  const [startDate, setStartDate] = useState<string>(currentDate.toLocaleDateString('sv-se'));
  const [endDate, setEndDate] = useState<string>(new Date().toLocaleDateString('sv-se'));
  const[timePerCategory, setTimePerCategory] = useState<tpc[]>([]);

useEffect(() => {
  fetch("https://clownfish-app-o82ul.ondigitalocean.app/user/statistics/"+userl+"/"+startDate+"/"+endDate,{
    headers: {
      Authorization: `Bearer ${jwtToken}`,
    },
  })
  .then((res) => res.json())
  .then((data) => {
    console.log(data)
     setTotalTime(data.totaltime)
     setUser(data.user)
     setTimePerCategory(data.timePerCategory)

   })
}, [startDate, endDate]);
  return (
    <>
    <div className='top-section'>
    
        <div className='ul-container'>
        <div id='input-div'>
        <label htmlFor="startDate">Startdatum:</label>
        <input value={startDate} onChange={(e)=>setStartDate(e.target.value)}type="date" id="startDate" />
        <label htmlFor="endDate">Slutdatum:</label>
        <input value={endDate} onChange={(e)=> setEndDate(e.target.value)} type="date" id="endDate" />
        </div>
        

          <h3>{user}</h3>
          <h3>Total tid: {(totalTime/60).toFixed(1)}t ({totalTime} min)</h3>
          <ul className='time-per-category'>
            {timePerCategory.map((tpc,index)=>(
              <li key={index}>
                {tpc.category}:{(totalTime/60).toFixed(1)}t ({tpc.timeSpent}min)
              </li>
            ))}
          </ul>
        </div>
          <Tasks setUpdateTasks={props.setUpdateTasks} updateTasks={props.updateTasks} selectedTask={props.selectedTask} setSelectedTask={props.setSelectedTask}/>
        </div>
        <div className='bottom-section'>
          <h1>Chart!!!</h1>
          <Chart timePerCategory={timePerCategory} startDate={startDate} endDate={endDate}/>
      </div>
    
    </>
  )
}

export default Statistics
