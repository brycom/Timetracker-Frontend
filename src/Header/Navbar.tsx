
import './Header.css'


interface Props{
    setPage:Function
    setLogin:Function
    logedin:boolean
    setLogedin:Function
}

function Navbar(props:Props) {
  function logOut(){
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    props.setLogedin(false)
    props.setPage("homePage")
    //window.location.reload();
  }
  return (
    <div className='navbar'>
      <div className='left-btn'>
        <button className='nav-btn' onClick={()=>props.setPage("homePage")}>Hem</button>
        <button className='nav-btn' onClick={()=>props.setPage("about")}>Om oss</button>
        {props.logedin === true &&<button className='nav-btn' onClick={()=>props.setPage("planing")}>Planering</button>}
        {props.logedin === true &&<button className='nav-btn' onClick={()=>props.setPage("statistics")}>Statestik</button>}
        </div>
        <h2>Timetracker</h2>
        <div className='right-btn'>
       {props.logedin === true && <button className='nav-btn' onClick={()=>props.setPage("admin")}>Admin</button>}
        {props.logedin === false &&<button className='nav-btn' onClick={()=>{props.setLogin(true)}}>Logga in</button>}
        {props.logedin === true &&<button className='nav-btn' onClick={()=>logOut()}>Logga out</button>}
        </div>
      
    </div>
  )
}

export default Navbar
