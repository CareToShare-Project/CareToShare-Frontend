import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { DonationChartProps } from '../Shared_util/Constants/Types';
import { status } from '../Shared_util/Constants/Status';

const DonationChart: React.FC<DonationChartProps> = ({ donations }) => {
  const rejected = donations.filter(item => item.donationStatus === status.rejected);
  const inProgress = donations.filter(item => item.donationStatus === status.inProgress);
  const accepted = donations.filter(item => item.donationStatus === status.accepted)


  const data = [
    { status: status.rejected, count: rejected.length },
    { status: status.inProgress, count: inProgress.length },
    { status: status.accepted, count: accepted.length },
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
