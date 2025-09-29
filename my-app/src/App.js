import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import MainDashboard from './components/MainDashboard';
import { FaBars } from 'react-icons/fa';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      
      {/* Header and Main Content */}
      <div className={`flex-1 flex flex-col transition-all duration-300 ${isSidebarOpen ? 'lg:ml-64' : 'ml-0 lg:ml-64'}`}>
        {/* Header with Hamburger and User Icon */}
        <div className="bg-white shadow-md p-4 flex items-center">
          <button className="lg:hidden text-gray-800 mr-4" onClick={toggleSidebar}>
            <FaBars size={24} />
          </button>
          <div className="flex-1"></div> {/* Spacer to push user icon right */}
          <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
            <span className="text-xl">👤</span>
          </div>
        </div>
        <MainDashboard />
      </div>
    </div>
  );
}

export default App;