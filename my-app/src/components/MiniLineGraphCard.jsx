import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function MiniLineGraphCard({ title, color }) {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: title,
        data: [Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100],
        borderColor: color,
        backgroundColor: `${color}33`,
        tension: 0.4,
        pointRadius: 3,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false }, tooltip: { enabled: false } },
    scales: {
      x: { display: false },
      y: { display: false },
    },
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4 flex flex-col">
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <div className="h-24 sm:h-20 w-full">
        <Line data={data} options={options} />
      </div>
    </div>
  );
}

export default MiniLineGraphCard;