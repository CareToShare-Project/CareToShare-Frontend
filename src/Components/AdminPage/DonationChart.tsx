import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { DonationChartProps } from '../Shared_util/Constants/Types';

const DonationChart:React.FC<DonationChartProps>= ({donations}) => {
  const pending = donations.filter(item=> item.donationStatus === "Pending");
  const inProgress = donations.filter(item=> item.donationStatus === "In Progress");
  const completed = donations.filter(item=>item.donationStatus === "Completed")
  

  const data = [
    { status: 'Pending', count: pending.length},
    { status: 'In Progress', count:inProgress.length },
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

export default DonationChart;
