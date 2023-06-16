import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { DonationChartProps } from '../Shared_util/Constants/Types';
import { status } from '../Shared_util/Constants/Status';

const DonationChart: React.FC<DonationChartProps> = ({ donations }) => {
  const pending = donations.filter(item => item.donationStatus === status.pending);
  const inProgress = donations.filter(item => item.donationStatus === status.inProgress);
  const completed = donations.filter(item => item.donationStatus === status.completed)


  const data = [
    { status: status.pending, count: pending.length },
    { status: status.inProgress, count: inProgress.length },
    { status: status.completed, count: completed.length },
  ];



  return (
    <BarChart width={900} height={300} data={data}>
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="status" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="count" fill="#56C0C8" barSize={100} />
    </BarChart>
  );
};

export default DonationChart;
