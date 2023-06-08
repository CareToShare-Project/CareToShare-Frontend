import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const RequestChart = () => {
  const data = [
    { status: 'Pending', count: 500 },
    { status: 'In Progress', count: 200 },
    { status: 'Completed', count: 100},
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
