import React from 'react';

function ComplaintsList() {
  const complaints = [
    { id: 1, title: 'Pothole on Main St', description: 'Large pothole causing issues.', date: '2025-09-25' },
    { id: 2, title: 'Broken Streetlight', description: 'Streetlight out at corner of Elm.', date: '2025-09-26' },
    { id: 3, title: 'Noise Complaint', description: 'Loud construction at night.', date: '2025-09-27' },
  ];

  return (
    <div className="bg-white shadow-md rounded-lg p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Citizen Complaints</h2>
      <ul className="space-y-4">
        {complaints.map((complaint) => (
          <li key={complaint.id} className="border-b pb-2">
            <h3 className="text-lg font-semibold">{complaint.title}</h3>
            <p className="text-gray-600">{complaint.description}</p>
            <p className="text-sm text-gray-500">Reported on: {complaint.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ComplaintsList;