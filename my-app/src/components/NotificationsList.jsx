import React from 'react';

function NotificationsList() {
  const notifications = [
    { id: 1, message: 'New user registered.', date: '2025-09-25' },
    { id: 2, message: 'Poll "Favorite Color" closed.', date: '2025-09-26' },
    { id: 3, message: 'Survey response received.', date: '2025-09-27' },
  ];

  return (
    <div className="bg-white shadow-md rounded-lg p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Notifications</h2>
      <ul className="space-y-4">
        {notifications.map((notification) => (
          <li key={notification.id} className="border-b pb-2">
            <p className="text-gray-600">{notification.message}</p>
            <p className="text-sm text-gray-500">Received on: {notification.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NotificationsList;