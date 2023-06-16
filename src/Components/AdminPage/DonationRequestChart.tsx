import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import { DonationRequestChartProps } from '../Shared_util/Constants/Types';
// import { PieLabelRenderProps } from 'recharts';





const DonationRequestChart: React.FC<DonationRequestChartProps> = ({ donations, requests }) => {


    const data = [
        { name: 'Requests', value: requests.length },
        { name: 'Donations', value: donations.length },
    ];

    const COLORS = ['#56C0C8', '#4f646f'];

    return (

        <PieChart width={400} height={300}>
            <Pie
                data={data}
                dataKey="value"
                cx={200}
                cy={150}
                outerRadius={100}
                labelLine={false}
                fill="#8884d8"
            >
                {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
            </Pie>
            <Tooltip />
            <Legend style={{ display: 'flex', gap: '20px' }} />
        </PieChart>

    );
}

export default DonationRequestChart;
