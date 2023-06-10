import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const DonationChart = () => {
  const [donationData, setDonationData] = useState({
                                                      pending: [],
                                                      inProgress : [],
                                                      completed : []
          })

  const data = [
    { status: 'Pending', count: donationData.pending.length },
    { status: 'In Progress', count: donationData.inProgress.length },
    { status: 'Completed', count: donationData.completed.length},
  ];

  useEffect(()=>{
   const results = sessionStorage.getItem('donations')
   if(results !== null) {
      const donations = JSON.parse(results)
      const pending = donations.filter((item: { donationStatus: string; })=> item.donationStatus === "Pending");
      const inProgress = donations.filter((item: { donationStatus: string; })=> item.donationStatus === "In Progress");
      const completed = donations.filter((item: { donationStatus: string; })=> item.donationStatus === "Completed");
      setDonationData({pending, inProgress, completed})
   }
  }, [])

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
