import React, { useState } from 'react';
import { FaUser, FaRobot, FaExpand, FaCompress, FaTimes, FaBars, FaCog } from 'react-icons/fa';

function Chatbot({ isOpen, isMaximized, toggleChat, toggleMaximize }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const mockChats = [
    { id: 1, title: 'Chat with Support - 10/01/2025' },
    { id: 2, title: 'Poll Query - 09/30/2025' },
    { id: 3, title: 'Survey Help - 09/29/2025' },
  ];

  const mockMessages = [
    { id: 1, sender: 'user', text: 'Hi, I need help with creating a poll.', icon: <FaUser /> },
    { id: 2, sender: 'bot', text: 'Sure! Navigate to the "Create Poll" section in the dashboard.', icon: <FaRobot /> },
    { id: 3, sender: 'user', text: 'Can you guide me on analytics?', icon: <FaUser /> },
    { id: 4, sender: 'bot', text: 'Analytics are available under the Dashboard tab, showing real-time data.', icon: <FaRobot /> },
  ];

  if (!isOpen) return null;

  return (
    <div
      className={`fixed z-50 bg-white rounded-lg shadow-lg flex flex-row transition-all duration-300 ${
        isMaximized
          ? 'inset-0 w-full h-full'
          : 'bottom-0 right-0 w-full md:w-1/2 h-full md:rounded-tl-lg'
      }`}
    >
      {/* Sidebar */}
      <div
        className={`w-full md:w-1/4 bg-gray-800 text-white p-4 flex flex-col transition-transform duration-300 h-full ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 absolute md:static z-50`}
      >
        <button className="py-2 px-4 bg-indigo-600 hover:bg-indigo-700 rounded mb-4 text-center">
          New Chat
        </button>
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-2">Recent Chats</h3>
          <ul className="space-y-2">
            {mockChats.map(chat => (
              <li key={chat.id} className="py-1 px-2 hover:bg-gray-700 rounded cursor-pointer">
                {chat.title}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-auto">
          <button className="py-2 px-4 flex items-center text-white hover:text-gray-300 w-full">
            <FaCog size={20} className="mr-2" />
            Settings
          </button>
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="w-full md:w-3/4 flex flex-col h-full">
        {/* Toolbar */}
        <div className="flex justify-between items-center p-2 bg-gray-100 border-b border-gray-200">
          <div className="flex items-center">
            <button
              onClick={toggleSidebar}
              className="p-2 text-gray-600 hover:text-indigo-600 md:hidden"
            >
              <FaBars size={20} />
            </button>
            <h2 className="text-lg font-bold ml-2">Rayan Tailwind Chatbot</h2>
          </div>
          <div className="flex space-x-1">
            <button
              onClick={toggleMaximize}
              className="p-2 text-gray-600 hover:text-indigo-600"
            >
              {isMaximized ? <FaCompress size={20} /> : <FaExpand size={20} />}
            </button>
            <button
              onClick={toggleChat}
              className="p-2 text-gray-600 hover:text-indigo-600"
            >
              <FaTimes size={20} />
            </button>
          </div>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 p-4 overflow-y-auto">
          {mockMessages.map(message => (
            <div
              key={message.id}
              className={`flex items-start mb-4 ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`flex items-center ${message.sender === 'user' ? 'flex-row-reverse' : ''}`}>
                <span className="text-2xl mx-2">{message.icon}</span>
                <div
                  className={`p-3 rounded-lg ${
                    message.sender === 'user' ? 'bg-indigo-100 text-gray-800' : 'bg-gray-200 text-gray-800'
                  } max-w-xs`}
                >
                  {message.text}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Input Area */}
        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Type your message..."
              className="flex-1 p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button className="py-2 px-4 bg-indigo-600 text-white rounded-r-md hover:bg-indigo-700">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chatbot;