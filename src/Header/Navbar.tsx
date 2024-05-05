import React from 'react'
import './Header.css'


interface Props{
    setPage:Function
}

function Navbar(props:Props) {
  return (
    <div className='navbar'>
      <div className='left-btn'>
        <button className='nav-btn' onClick={()=>props.setPage("homePage")}>Hem</button>
        <button className='nav-btn' onClick={()=>props.setPage("about")}>Om oss</button>
        <button className='nav-btn' onClick={()=>props.setPage("planing")}>Planering</button>
        <button className='nav-btn' onClick={()=>props.setPage("statistics")}>Statestik</button>
        </div>
        <h2>Timetracker</h2>
        <div className='right-btn'>
        <button className='nav-btn' onClick={()=>props.setPage("admin")}>Admin</button>
        <button className='nav-btn' onClick={()=>props.setPage("login")}>Logga in</button>
        </div>
      
    </div>
  )
}

export default Navbar
