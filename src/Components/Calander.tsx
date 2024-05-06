
import Calendar from 'react-calendar';

interface Props{
  date:string,
  setDate:Function
}

function Calander(props:Props) {

  return (
    <div>
            <Calendar

minDate={new Date()}

onClickDay={(clickedDay)=>{props.setDate(clickedDay.toLocaleDateString('sv-se'))}}
value={new Date()}
/>
    </div>
  )
}

export default Calander
