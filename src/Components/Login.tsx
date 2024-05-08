import { useState } from "react";
import '../Css/Login.css'
interface Props{
  setLogin:Function
  setLogedin:Function
}

function Login(props:Props) {
  const [username,setUsername] = useState<string>("");
  const [password,setPassword] = useState<string>("");

  function Loginn() {
    //console.log(password)
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: username,
        password: password
      })
    };
    fetch('https://clownfish-app-o82ul.ondigitalocean.app/user/login', requestOptions)
     .then(response => response.json())
     .then((data) => {
       // console.log(data)
        if(data.token){
          localStorage.setItem("token", data.token);
          localStorage.setItem("user", data.user.id);
          props.setLogin(false);
          props.setLogedin(true);
          
        }else{
          alert("Fel användarnamn eller lösenord")
        }
      
     })
     .catch(error => console.log('error', error));
 }
  return (
    <div className="login-div">
      <form onSubmit={(e)=>(Loginn(),e.preventDefault())} action="">
        <input name="username" value={username} onChange={(e)=>setUsername(e.target.value)} type="text" placeholder="Användarnamn:" />
        <input name="password" value={password} onChange={(e)=> setPassword(e.target.value)} type="password" placeholder="Lösenord:" />
        <button type="submit">Logga in!</button>
      </form>
    </div>
  )
}

export default Login
