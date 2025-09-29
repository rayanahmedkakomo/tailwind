import React from 'react';
import { FaBars } from 'react-icons/fa';

function Sidebar({ isOpen, toggleSidebar }) {
  return (
    <div
      className={`fixed top-0 left-0 w-64 bg-gray-800 text-white h-screen p-4 flex flex-col transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0 z-50`}
    >
      {/* Hamburger Icon for Small Screens */}
      <div className="lg:hidden mb-4">
        <button onClick={toggleSidebar} className="text-white">
          <FaBars size={24} />
        </button>
      </div>
      {/* Org Name */}
      <h1 className="text-2xl font-bold mb-8">Rayan Tailwind</h1>
      {/* Buttons */}
      <button className="mb-4 py-2 px-4 bg-indigo-600 hover:bg-indigo-700 rounded">Home</button>
      <button className="mb-4 py-2 px-4 bg-indigo-600 hover:bg-indigo-700 rounded">Users</button>
      <button className="mb-4 py-2 px-4 bg-indigo-600 hover:bg-indigo-700 rounded">Settings</button>
      <button className="mb-4 py-2 px-4 bg-indigo-600 hover:bg-indigo-700 rounded">Reports</button>
      <button className="mb-4 py-2 px-4 bg-indigo-600 hover:bg-indigo-700 rounded">Analytics</button>
      <button className="mb-4 py-2 px-4 bg-indigo-600 hover:bg-indigo-700 rounded">Notifications</button>
      <button className="mb-4 py-2 px-4 bg-indigo-600 hover:bg-indigo-700 rounded">Logout</button>
    </div>
  );
}

export default Sidebar;