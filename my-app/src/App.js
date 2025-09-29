import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import MainDashboard from './components/MainDashboard';
import CreateUserForm from './components/CreateUserForm';
import CreatePollForm from './components/CreatePollForm';
import CreateSurveyForm from './components/CreateSurveyForm';
import ComplaintsList from './components/ComplaintsList';
import NotificationsList from './components/NotificationsList';
import Settings from './components/Settings';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <div className="flex min-h-screen">
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <div className="flex-1 flex flex-col lg:ml-64">
          <Header toggleSidebar={toggleSidebar} />
          <main className="flex-1 p-4 bg-gray-100 overflow-y-auto">
            <Routes>
              <Route path="/" element={<MainDashboard />} />
              <Route path="/create-user" element={<CreateUserForm />} />
              <Route path="/create-poll" element={<CreatePollForm />} />
              <Route path="/create-survey" element={<CreateSurveyForm />} />
              <Route path="/complaints" element={<ComplaintsList />} />
              <Route path="/notifications" element={<NotificationsList />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;