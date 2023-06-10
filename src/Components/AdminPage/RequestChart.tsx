import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


const RequestChart = () => {
  const [requestData, setRequestData] = useState({
                                                  pending : [],
                                                  inProgress : [],
                                                  completed : []
                                                  })
  const data = [
    { status: 'Pending', count: requestData.pending.length },
    { status: 'In Progress', count: requestData.inProgress.length },
    { status: 'Completed', count: requestData.completed.length},
  ];

  useEffect(()=>{
      const results = sessionStorage.getItem('requests')
      if(results !== null){
        const requests = JSON.parse(results)
        const pending = requests.filter((item: { requestStatus: string; })=> item.requestStatus === "Pending");
        const inProgress = requests.filter((item: { requestStatus: string; })=> item.requestStatus === "In Progress");
        const completed = requests.filter((item: { requestStatus: string; })=> item.requestStatus === "Completed");
        setRequestData({pending, inProgress, completed})
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

export default RequestChart;
