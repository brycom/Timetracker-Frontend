import { useState } from 'react'
import "../Css/Register.css"

interface Props{
    setPage:Function
}

function Register(props:Props) {
    const [username,setUsername] = useState<string>("");
    const [firstName,setFirstName] = useState<string>("");
    const [lastName,setLastName] = useState<string>("");
    const [email,setEmail] = useState<string>("");
    const [password,setPassword] = useState<string>("");
    const [tryAgain,setTryAgain] = useState<boolean>(false);

    function Reg(){

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: username,
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password
        })
    }

    fetch('https://clownfish-app-o82ul.ondigitalocean.app/user/user', requestOptions)
    .then(res => {
        if (!res.ok) {
          throw new Error('');
        }
         res.json();})
    .then((data)=>{

            console.log(data);
            props.setPage("Home")

    }).catch((error) => {
        console.error('There was a problem with the fetch operation:', error);
        setPassword("");
        setTryAgain(true);
      });

}

  return (
    <div>
        <form onSubmit={(e)=>{
            Reg()
            e.preventDefault()

        }}>
            <input required type="text" name="username" placeholder="Username" value={username} onChange={(e)=>setUsername(e.target.value)} />
            <input required type="text" name='firsname' placeholder='Firstname' value={firstName} onChange={(e)=>setFirstName(e.target.value)}  />
            <input required type="text" name='lastname' placeholder='Lastname' value={lastName} onChange={(e)=>setLastName(e.target.value)} />
            <input required type="text" name='email' placeholder='Email' value={email} onChange={(e)=>{setEmail(e.target.value)}} />
            <input required type="password" name="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
            <input type="submit" value="Register" />
            
            {tryAgain &&  <p>Användaren finns redan!</p>}
        </form>
      
    </div>
  )
}


export default Register

