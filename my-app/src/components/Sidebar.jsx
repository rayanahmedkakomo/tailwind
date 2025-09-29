import React from 'react';
import { FaBars, FaCog } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Sidebar({ isOpen, toggleSidebar }) {
  return (
    <div
      className={`fixed top-0 left-0 w-64 bg-gray-800 text-white h-screen p-4 flex flex-col transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0 z-50`}
    >
      {/* Top Section: Hamburger, Org Name, and Most Buttons */}
      <div>
        {/* Hamburger Icon for Small Screens */}
        <div className="lg:hidden mb-4">
          <button onClick={toggleSidebar} className="text-white">
            <FaBars size={24} />
          </button>
        </div>
        {/* Org Name */}
        <h1 className="text-2xl font-bold mb-8">Rayan Tailwind</h1>
        {/* Buttons */}
        <Link to="/" className="mb-4 py-2 px-4 bg-indigo-600 hover:bg-indigo-700 rounded block text-center">
          Home
        </Link>
        <Link to="/create-user" className="mb-4 py-2 px-4 bg-indigo-600 hover:bg-indigo-700 rounded block text-center">
          Create User
        </Link>
        <Link to="/create-poll" className="mb-4 py-2 px-4 bg-indigo-600 hover:bg-indigo-700 rounded block text-center">
          Create Poll
        </Link>
        <Link to="/create-survey" className="mb-4 py-2 px-4 bg-indigo-600 hover:bg-indigo-700 rounded block text-center">
          Create Survey
        </Link>
        <Link to="/complaints" className="mb-4 py-2 px-4 bg-indigo-600 hover:bg-indigo-700 rounded block text-center">
          Complaints
        </Link>
        <Link to="/notifications" className="mb-4 py-2 px-4 bg-indigo-600 hover:bg-indigo-700 rounded block text-center">
          Notifications
        </Link>
      </div>
      {/* Bottom Section: Settings Button */}
      <div className="mt-auto">
        <Link to="/settings" className="py-2 px-4 flex items-center text-white hover:text-gray-300">
          <FaCog size={20} className="mr-2" />
          Settings
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;