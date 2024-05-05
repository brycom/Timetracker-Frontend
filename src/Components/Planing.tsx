import React from 'react'
import Calander from './Calander'
import Tasks from './Tasks'
import '../Css/Planing.css'

function Planing() {
  return (
    <>
      <div id='top-section'>
      <div id='default-div'>
        <h2>Att göra:</h2>
        <ul id='default-tasks'>
          <li>Här kommer det snart saker</li>
          <li>Här kommer det snart saker</li>
          <li>Här kommer det snart saker</li>
          <li>Här kommer det snart saker</li>
          <li>Här kommer det snart saker</li>
          <li>Här kommer det snart saker</li>
          <li>Här kommer det snart saker</li>
          <li>Här kommer det snart saker</li>
          <li>Här kommer det snart saker</li>
          <li>Här kommer det snart saker</li>
          <li>Här kommer det snart saker</li>
        </ul>
        <input type="text" placeholder='Vald upgift:' />
        <div>
          <button id='start-btn'>Starta</button>
          <button id='stop-btn'>Avsluta</button>
          </div>
      </div>
        <form action="" id='custom-task'>
          <h2>Skapa ny upgift:</h2>
          <input type="text" placeholder='Kategori:' />
          <input type="text" placeholder='Rubrik:' />
          <input type="text" placeholder='Beskrivning:' />
          <input type="date" value={new Date().toLocaleDateString()}/>
          <input type="time" value={"19:00"} />
          <button id='add-btn'>Lägg till</button>
        </form>
      < Calander/>
      </div>
      <div id='bottom-section'>
      <Tasks/>
      </div>
      </>
  
  )
}

export default Planing
