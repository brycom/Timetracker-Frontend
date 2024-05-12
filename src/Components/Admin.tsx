import { useEffect, useState } from "react";



interface Task{
  category: string 
date: string 
description: string
endTime: string
headline: string
id:string 
startTime: string
timeSpent:number
active: boolean

}
interface User{
  username: string;
  tasks: Task[];
  defaultTask: Task[];
  totalTimeInMinutes: number;

}


function Admin() {
  const jwtToken = localStorage.getItem("token");
  const[users, setUsers] = useState<User[]>([]);

  useEffect(() => {

    fetch("https://clownfish-app-o82ul.ondigitalocean.app/admin/",{
    headers: {
      Authorization: `Bearer ${jwtToken}`,
    },
  })
  .then((res) => res.json())
    .then((data)=>{
      setUsers(data)
      console.log(data)
    })
  }, []);

  return (
    <div>
      <h1>Förbjuden mark</h1>
      <ul>
        {
          users.map((user) => (
            <li key={user.username}>
              <h3>{user.username}</h3>
              <h5>{(user.totalTimeInMinutes/60).toFixed(1)}t ({user.totalTimeInMinutes} min)</h5></li>
))
        }

      </ul>
    </div>
  )
}

export default Admin
