import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Data, DataItem } from '../../../interfaces/Data';
import { DataLineChart } from '../../../interfaces/LineChart';

type LineChartProps = {
  data: Data
  title: string
}
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = (title: string) => {
  return {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: title,
      },
    },
  };
}

const LineChart:React.FC<LineChartProps> = ({data, title}) => {
  const [dataChart, setDataChart] = useState<DataLineChart> ({
    labels: ['0', '1', '2', '3', '4', '5'],
    datasets: [
      {
        label: 'Blue',
        data: [0,0,0,0,0,0],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
      {
        label: 'Orange',
        data: [0,0,0,0,0,0],
        borderColor: 'rgb(256,165, 0)',
        backgroundColor: 'rgba(256,165, 0, 0.5)',
      },
    ]
  })

  useEffect(() => {
    setDataChart({
      labels: data.data.map((item: DataItem) => item.name),
      datasets: [
        {
          label: 'Blue',
          data: data.data.map((item: DataItem) => item.blue),
          borderColor: 'rgb(53, 162, 235)',
          backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
        {
          label: 'Orange',
          data: data.data.map((item: DataItem) => item.orange),
          borderColor: 'rgb(256,165, 0)',
          backgroundColor: 'rgba(256,165, 0, 0.5)',
        },
      ]
    })
  }, [data])
  return (
    <div className='w-50'>
      <Line options={options(title)} data={dataChart}/>
    </div>
  );
}

export default LineChart;
