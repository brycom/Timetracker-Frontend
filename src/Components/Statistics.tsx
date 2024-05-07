
import Tasks from './Tasks'
import '../Css/Statistics.css'
import Chart from './Chart'
import { useEffect, useState } from 'react'


/* interface task{
  category: string 
date: string 
description: string
endTime: string
headline: string
id:string 
startTime: string
timeSpent:number

} */
interface tpc{
  category: string,
  timeSpent: number
}


interface Props{
  setUpdateTasks:Function
  updateTasks:boolean
}
function Statistics(props:Props) {
  //const [tasks, setTasks] = useState<task[]>()
  const[totalTime, setTotalTime] = useState<number>(0);
  const[user, setUser] = useState<string>();
  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');
  const[timePerCategory, setTimePerCategory] = useState<tpc[]>([]);

useEffect(() => {
  fetch("https://oyster-app-oquaf.ondigitalocean.app/statistics/6638a6e076d5ea6b30c71bdd/2024-05-01/2024-05-06")
  .then((res) => res.json())
  .then((data) => {
     //setTasks(data.tasks)
     setTotalTime(data.totaltime)
     setUser(data.user)
     setTimePerCategory(data.timePerCategory)

   })
}, []);
  return (
    <>
    <div className='top-section'>
    
        <div className='ul-container'>
        <input type="text" placeholder='Vecka:' />
          <h3>{user}</h3>
          <h3>Total tid: {totalTime/60}t ({totalTime} min)</h3>
          <ul className='time-per-category'>
            {timePerCategory.map((tpc,index)=>(
              <li key={index}>
                {tpc.category}:{tpc.timeSpent/60}t ({tpc.timeSpent}min)
              </li>
            ))}
          </ul>
        </div>
          <Tasks setUpdateTasks={props.setUpdateTasks} updateTasks={props.updateTasks}/>
        </div>
        <div className='bottom-section'>
          <h1>Chart!!!</h1>
          <Chart timePerCategory={timePerCategory} startDate={startDate} endDate={endDate}/>
      </div>
    
    </>
  )
}

export default Statistics
