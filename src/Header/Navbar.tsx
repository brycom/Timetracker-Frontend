
import { useState } from 'react'
import './Header.css'


interface Props{
    setPage:Function
    setLogin:Function
    login:boolean
    logedin:boolean
    setLogedin:Function
}

function Navbar(props:Props) {
  const[loginButton,setLoginButton] = useState<boolean>(false);
  function logOut(){
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    props.setLogedin(false)
    props.setPage("homePage")

  }
  return (
    <div className='navbar'>
      <div className='left-btn'>
        <button className='nav-btn' onClick={()=>props.setPage("homePage")}>Hem</button>
        {props.logedin === true &&<button className='nav-btn' onClick={()=>props.setPage("planing")}>Planering</button>}
        {props.logedin === true &&<button className='nav-btn' onClick={()=>props.setPage("statistics")}>Statestik</button>}
        </div>
        <h2>Timetracker</h2>
        <div className='right-btn'>
       {props.logedin === true && <button className='nav-btn' onClick={()=>props.setPage("admin")}>Admin</button>}
        {props.logedin === false &&<button className='nav-btn' onClick={()=>{
          if(props.login === false){
            props.setLogin(true)
          console.log("if")}
          if(props.login === true){
            console.log("else")
            props.setLogin(false)
          }}}>Logga in</button>}
        {props.logedin === true &&<button className='nav-btn' onClick={()=>logOut()}>Logga out</button>}
        </div>
      
    </div>
  )
}

export default Navbar
