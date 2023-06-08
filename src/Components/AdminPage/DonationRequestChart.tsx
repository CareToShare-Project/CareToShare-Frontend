import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
// import { PieLabelRenderProps } from 'recharts';

const data = [
  { name: 'Requests', value: 400 },
  { name: 'Donations', value: 100 },
];

const COLORS = ['#56C0C8', '#4f646f'];



const DonationRequestChart = () => (
  
        <PieChart width={400} height={300}>
            <Pie
                data={data}
                dataKey="value"
                cx={200}
                cy={150}
                outerRadius={100}
                labelLine={false}
                // label={renderCustomizedLabel}
                fill="#8884d8"
            >
                {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
            </Pie>
            <Tooltip />
            <Legend style={{display: 'flex' , gap: '20px'}}/>
         </PieChart>

);

export default DonationRequestChart;
