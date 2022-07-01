import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { Data, DataItem } from '../../../interfaces/Data';
import { DataPieChart } from '../../../interfaces/PieChart';


type PieChartProps = {
  data: Data,
  title: string
}

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

const PieChart:React.FC<PieChartProps> = ({data, title}) => {
  const [dataChart, setDataChart] = useState<DataPieChart> ({
    labels: ['Blue', 'Orange'],
    datasets: [{
      label: '# of Votes',
          data: [],
          backgroundColor: [
            'rgba(53, 162, 235, 0.2)',
            'rgba(256,165, 0, 0.2)',
          ],
          borderColor: [
            'rgba(53, 162, 235, 1)',
            'rgba(256,165, 0, 1)',
          ],
          borderWidth: 1,
    },]
  })

  useEffect(() => {
    setDataChart({
      labels: ['Blue', 'Orange'],
      datasets: [
        {
          label: '# of Votes',
          data: [
            data.data.reduce((sum: number, item:DataItem) => {return sum + item.blue}, 0),
            data.data.reduce((sum: number, item:DataItem) => {return sum + item.orange}, 0)
          ],
          backgroundColor: [
            'rgba(53, 162, 235, 0.2)',
            'rgba(256,165, 0, 0.2)',
          ],
          borderColor: [
            'rgba(53, 162, 235, 1)',
            'rgba(256,165, 0, 1)',
          ],
          borderWidth: 1,
        },
      ]
    })
  }, [data])
  return (
    <div className='w-25'>
      <Pie options={options(title)} data={dataChart} />
    </div>
  );
}

export default PieChart;
