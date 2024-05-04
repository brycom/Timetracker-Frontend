import React from 'react'
import Navbar from '../Header/Navbar'
import Tasks from './Tasks'
import '../Css/Statistics.css'

function Statistics() {
  return (
    <>
    <div className='top-section'>
    
        <div className='ul-container'>
        <input type="text" placeholder='Vecka:' />
          <h3>total tid loggad: 7,6t (648min)</h3>
          <ul className='time-per-category'>
            <li>porgramering: 4,3t (258min)</li>
            <li>Städning 1.5t (90min)</li>
            <li>Träning 5t (300min)</li>
          </ul>
        </div>
          <Tasks/>
        </div>
        <div className='bottom-section'>
          <h1>Chart!!!</h1>
      </div>
    
    </>
  )
}

export default Statistics
