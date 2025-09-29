import React from 'react';
import DashboardCard from './DashboardCard';
import MiniLineGraphCard from './MiniLineGraphCard';
import { Bar, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend);

function MainDashboard() {
  const cards = [
    {
      key: 'citizen_engagement',
      title: 'Citizen Engagement',
      value: 'Loading...',
      icon: '👥',
      trend: 'up',
      trendValue: '+12%',
      color: '#0359AE',
    },
    {
      key: 'cross_government_insights',
      title: 'Cross-Government Insights',
      value: '92%',
      icon: '📊',
      trend: 'up',
      trendValue: '+5%',
      color: '#0359AE',
      progressValue: 92,
    },
    {
      key: 'engagement_balance',
      title: 'Engagement Balance',
      value: '78%',
      icon: '⚖️',
      trend: 'up',
      trendValue: '+8%',
      color: '#0359AE',
    },
    {
      key: 'participation_rates',
      title: 'Participation Rates',
      value: '67%',
      icon: '🗳️',
      trend: 'up',
      trendValue: '+15%',
      color: '#0359AE',
    },
    {
      key: 'complaints_resolution',
      title: 'Complaints Resolution',
      value: '85%',
      icon: '⚠️',
      trend: 'up',
      trendValue: '+10%',
      color: '#0359AE',
      progressValue: 85,
    },
    {
      key: 'average_response_time',
      title: 'Average Response Time',
      value: '3.2 days',
      icon: '⏱️',
      trend: 'down',
      trendValue: '-18%',
      color: '#0359AE',
    },
    {
      key: 'query_volume',
      title: 'Query Volume',
      value: '12,345',
      icon: '🏛️',
      trend: 'up',
      trendValue: '+22%',
      color: '#0359AE',
    },
    {
      key: 'satisfaction_rate',
      title: 'Satisfaction Rate',
      value: '4.6/5',
      icon: '📈',
      trend: 'up',
      trendValue: '+0.3',
      color: '#0359AE',
    },
  ];

  const miniLineCards = [
    { key: 'trend_1', title: 'Trend A', color: '#0359AE' },
    { key: 'trend_2', title: 'Trend B', color: '#0359AE' },
    { key: 'trend_3', title: 'Trend C', color: '#0359AE' },
    { key: 'trend_4', title: 'Trend D', color: '#0359AE' },
  ];

  const barData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: 'Activity',
        data: [65, 59, 80, 81, 56],
        backgroundColor: '#0359AE',
      },
    ],
  };

  const pieData = {
    labels: ['Category A', 'Category B', 'Category C'],
    datasets: [
      {
        data: [300, 150, 100],
        backgroundColor: ['#0359AE', '#60A5FA', '#DBEAFE'],
      },
    ],
  };

  const heatmapData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    datasets: [
      {
        label: 'Activity Heatmap',
        data: [
          [1, 10], [1, 20], [1, 30], [1, 40], [1, 50],
          [2, 15], [2, 25], [2, 35], [2, 45], [2, 55],
          [3, 20], [3, 30], [3, 40], [3, 50], [3, 60],
          [4, 25], [4, 35], [4, 45], [4, 55], [4, 65],
          [5, 30], [5, 40], [5, 50], [5, 60], [5, 70],
        ],
        backgroundColor: (ctx) => {
          const value = ctx.raw;
          const intensity = value[1] / 100;
          return `rgba(3, 89, 174, ${intensity})`;
        },
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { position: 'top' } },
  };

  const heatmapOptions = {
    responsive: true,
    maintainAspectRatio: false,
    indexAxis: 'y',
    scales: {
      x: { title: { display: true, text: 'Time' } },
      y: { title: { display: true, text: 'Day' } },
    },
    plugins: { legend: { display: false } },
  };

  return (
    <div className="p-4 bg-gray-100 flex-1 overflow-y-auto max-w-full">
      {/* First Row: 8 Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {cards.map((card) => (
          <DashboardCard
            key={card.key}
            title={card.title}
            value={card.value}
            icon={card.icon}
            trend={card.trend}
            trendValue={card.trendValue}
            color={card.color}
            progressValue={card.progressValue}
          />
        ))}
      </div>

      {/* Second Row: 4 Mini Line Graph Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {miniLineCards.map((card) => (
          <MiniLineGraphCard
            key={card.key}
            title={card.title}
            color={card.color}
          />
        ))}
      </div>

      {/* Third Row: Bar and Pie Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6 max-w-full">
        <div className="bg-white shadow-md rounded-lg p-4 w-full">
          <h2 className="text-lg font-semibold mb-2">Activity Bar Chart</h2>
          <div className="h-64 sm:h-48 w-full">
            <Bar data={barData} options={chartOptions} />
          </div>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4 w-full">
          <h2 className="text-lg font-semibold mb-2">Category Pie Chart</h2>
          <div className="h-64 sm:h-48 w-full">
            <Pie data={pieData} options={chartOptions} />
          </div>
        </div>
      </div>

      {/* Fourth Row: Heatmap */}
      <div className="bg-white shadow-md rounded-lg p-4 w-full">
        <h2 className="text-lg font-semibold mb-2">Activity Heatmap</h2>
        <div className="h-64 sm:h-48 w-full">
          <Bar data={heatmapData} options={heatmapOptions} />
        </div>
      </div>
    </div>
  );
}

export default MainDashboard;