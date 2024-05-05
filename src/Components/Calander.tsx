import React from 'react'
import Calendar from 'react-calendar';

function Calander() {
  return (
    <div>
            <Calendar

minDate={new Date()}
/* tileDisabled={({ date, view }) => view === 'month' && blockDay(date.getDay(), date)} */
/* onClickDay={handleDateChange} */
value={new Date()}
/>
    </div>
  )
}

export default Calander
