import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { RequestChartProps } from '../Shared_util/Constants/Types';


const RequestChart: React.FC<RequestChartProps> = ({requests}) => {
  const pending = requests.filter(item=> item.requestStatus === "Pending");
  const inProgress = requests.filter(item=> item.requestStatus === "In Progress");
  const completed = requests.filter(item=>item.requestStatus === "Completed")
 
  const data = [
    { status: 'Pending', count: pending.length },
    { status: 'In Progress', count: inProgress.length },
    { status: 'Completed', count: completed.length},
  ];


  return (
    <BarChart width={900} height={300} data={data}>
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="status" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="count" fill="#56C0C8" barSize={100}/>
    </BarChart>
  );
};

export default RequestChart;
