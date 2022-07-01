import React, { useEffect, useState } from 'react';
import Box from '../../components/Box';
import BoxItem from '../../components/BoxItem';
import LineChart from '../../components/Chart/LineChart';
import PieChart from '../../components/Chart/PieChart';
import VerticalBarChart from '../../components/Chart/VerticalBarChart';
import { Data, DataItem } from '../../interfaces/Data';
import { DataClick } from '../../interfaces/DataClick';
import { socket } from '../../utils';

function DashboardPage() {
  const [dataClick, setDataClick] = useState<DataClick>({orange: 0, blue:0})
  const [dataChart, setDataChart] = useState<Data>({
    data: [] as unknown as Array<DataItem>
  } as Data)
  useEffect(() => {
    socket.on('get-data-click', async(data) => {
      setDataClick(data);
    })
    socket.on('get-data-chart', async(data: Array<DataItem>) => {
      const dataChart: Array<DataItem> = data as unknown as Array<DataItem>;
      setDataChart({data: dataChart} as Data);
    })
  }, []);

  return (
    <div className='container mx-auto'>
      <div className='mx-auto'>
      <Box>
        <BoxItem className='bg-primary'>{dataClick.blue}</BoxItem>
        <BoxItem className='bg-warning'>{dataClick.orange}</BoxItem>
      </Box>
      </div>
      <div className='d-flex justify-content-center'>
        <LineChart title='Chart Data Click' data={dataChart} />
        <PieChart title="Count data click" data={dataChart}/>
      </div>
      <div className='d-flex justify-content-center'>
        <VerticalBarChart title='Chart Data Click' data={dataChart} />
      </div>
    </div>
  );
}

export default DashboardPage;
