
import{Chart as ChartJS, BarElement, CategoryScale,LinearScale, Tooltip,Legend} from 'chart.js'
import {Bar} from 'react-chartjs-2'

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend)

interface tpc{
    category: string,
    timeSpent: number
  }

interface Props{
    timePerCategory: tpc[];
    startDate: string;
    endDate: string;
}

function Chart(props:Props) {
    const tramsForTsXSkit = props.endDate;
    console.log(tramsForTsXSkit)
 const data = {
    labels : ['mon','Tue','Wed','Thu','Fri','Sat'],
    datasets: [
/*         props.timePerCategory.map(
            (tpc)=>{
             
                    label: tpc.category,
                    data: [tpc.timeSpent], 
                    backgroundColor: 'rgba(5, 28, 133, 0.541)'
                
            }
        ) */
        {
            label: 'Städa',
            data: [4,1, 3, 5, 8, 10], // Tid för att städa för varje dag
            backgroundColor: 'rgba(5, 28, 133, 0.541)'
        },
        {
            label: 'Programmera',
            data: [2, 14, 12, 10, 8, 8], // Tid för att programmera för varje dag
            backgroundColor: 'rgba(133, 5, 5, 0.700)'
        },
        {
            label: 'Träna',
            data: [1, 1, 1, 1, 2, 0], // Tid för träning för varje dag
            backgroundColor: 'rgba(100, 185, 3, 0.733)'
        }
    ]
 }
 const options = {}

  return (
 
  <div id='chart'>
  <Bar data={data}
  options={options}
  ></Bar>
  </div>
 
  

  );
}

export default Chart;
