
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
    const data = {
        labels: ['Här', 'Kommer', 'Din', 'Data', 'När', 'Utvekingen','Är','Färdig'],
        datasets: props.timePerCategory.map(tpc => ({
          label: tpc.category,
          data: [tpc.timeSpent],
          backgroundColor: 'rgba(5, 28, 133, 0.541)',
          borderColor: 'rgba(5, 28, 133, 0.541)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(5, 28, 133, 0.541)',
        })),
      };
      
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
