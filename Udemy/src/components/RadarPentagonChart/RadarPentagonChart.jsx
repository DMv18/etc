import { Radar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const RadarPentagonChart = ({ labels = [], datos = [] }) => {
  const data = {
    labels,
    datasets: [
      {
        label: 'Estadísticas base',
        data: datos,
        backgroundColor: 'rgba(34, 202, 236, 0.2)',
        borderColor: 'rgba(34, 202, 236, 1)',
        borderWidth: 2,
        pointBackgroundColor: 'rgba(34, 202, 236, 1)',
      },
    ],
  };

  const options = {
    scales: {
      r: {
        min: 0,
        
        ticks: { stepSize: 25 },
      },
    },
  };

  return <div className='grafico-pentagonal'><Radar data={data} options={options} /></div>;
};

export default RadarPentagonChart;
