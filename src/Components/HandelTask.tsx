


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
    setUpdateTasks:Function
    

}

function HandelTask(props:Props) {
    const jwtToken = localStorage.getItem('token');
    const user = localStorage.getItem('user')


    function startTask(){
        if(props.selectedTask.category !== undefined){
        const time = new Date().toLocaleTimeString('sv-se',{hour: '2-digit', minute: '2-digit'});
        fetch("https://oyster-app-oquaf.ondigitalocean.app/user/starttask/"+user+"/"+props.selectedTask.id+"/"+time,{
          method:'PATCH',
          headers:{
            'Authorization': `Bearer ${jwtToken}`
          }
        })
        .then(res=>res.json())
        .then((data)=>{
            props.setTasks(data)
            props.setUpdateTasks(true)
        })}
        
      }
      function EndTask(){
        if(props.selectedTask.category !== undefined){
        const time = new Date().toLocaleTimeString('sv-se',{hour: '2-digit', minute: '2-digit'});
        fetch("https://oyster-app-oquaf.ondigitalocean.app/user/stoptask/"+user+"/"+props.selectedTask.id+"/"+time,{
          method:'PATCH',
          headers:{
            'Authorization': `Bearer ${jwtToken}`
          }
        })
        .then(res=>res.json())
        .then((data)=>{
            props.setTasks(data)
            props.setUpdateTasks(true)
        })}
        
      }
  return (
    <div>
        <h1>{props.selectedTask.headline}</h1>
        <p>{props.selectedTask.description}</p>
        <div id='default-tasks-btn-div'>
          <button onClick={startTask} id='start-btn'>Starta</button>
          <button onClick={EndTask} id='stop-btn'>Avsluta</button>
          </div>
    
      
    </div>
  )
}

export default HandelTask
