import React from 'react';

function DashboardCard({ title, value, icon, trend, trendValue, color, progressValue }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 flex flex-col">
      <div className="flex items-center mb-2">
        <span className="text-2xl mr-2" style={{ color }}>{icon}</span>
        <h2 className="text-lg font-semibold">{title}</h2>
      </div>
      <p className="text-2xl font-bold mb-2">{value}</p>
      <div className="flex items-center">
        <span
          className={`text-sm font-medium ${
            trend === 'up' ? 'text-green-500' : 'text-red-500'
          }`}
        >
          {trendValue}
        </span>
        <span className="ml-1 text-gray-500 text-sm">
          {trend === 'up' ? '↑' : '↓'}
        </span>
      </div>
      {progressValue && (
        <div className="mt-2">
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="h-2 rounded-full"
              style={{ width: `${progressValue}%`, backgroundColor: color }}
            ></div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DashboardCard;