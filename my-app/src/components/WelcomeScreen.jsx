import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

function WelcomeScreen() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Go to Dashboard Button (Top-Right) */}
      <div className="fixed top-4 right-4 z-50">
        <Link
          to="/dashboard"
          className="py-2 px-6 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 text-lg font-semibold"
        >
          Go to Dashboard
        </Link>
      </div>

      {/* Welcome Message Header */}
      <header className="bg-gray-800 text-white text-center py-8">
        <h1 className="text-4xl font-bold">Welcome to Rayan Tailwind!</h1>
        <p className="text-xl mt-2">Your trusted platform for polls, surveys, and citizen engagement.</p>
      </header>

      {/* Hero Section */}
      <section className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Empowering Connections</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Rayan Tailwind bridges the gap between organizations and citizens, offering tools to create impactful polls, surveys, and complaint management systems, all backed by real-time analytics.
          </p>
          <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center">
            <span className="text-gray-500">Placeholder Image</span>
          </div>
        </div>
      </section>

      {/* Main Content: Cards */}
      <main className="flex-1 p-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Organization History Card */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Our History</h2>
            <p className="text-gray-600">
              Founded in 2020, Rayan Tailwind has been at the forefront of digital engagement, helping organizations connect with citizens through innovative polls and surveys. We've grown from a small startup to a leading platform, serving thousands of users worldwide.
            </p>
          </div>

          {/* About Us Card */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">About Us</h2>
            <p className="text-gray-600">
              Rayan Tailwind is dedicated to fostering transparent communication between governments, organizations, and citizens. Our tools empower users to create polls, surveys, and manage complaints efficiently.
            </p>
          </div>

          {/* Services Card */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Our Services</h2>
            <ul className="list-disc list-inside text-gray-600">
              <li>Create and manage polls</li>
              <li>Design custom surveys</li>
              <li>Handle citizen complaints</li>
              <li>Real-time analytics and insights</li>
              <li>Notifications and user management</li>
            </ul>
          </div>

          {/* Key Features Card */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Key Features</h2>
            <ul className="list-disc list-inside text-gray-600">
              <li>Intuitive poll and survey creation</li>
              <li>Real-time data visualization</li>
              <li>Secure user management</li>
              <li>Responsive design for all devices</li>
              <li>Automated notifications</li>
            </ul>
          </div>

          {/* Testimonials Card */}
          <div className="bg-white shadow-md rounded-lg p-6 md:col-span-2 lg:col-span-2">
            <h2 className="text-2xl font-bold mb-4">What Our Users Say</h2>
            <div className="space-y-4">
              <div>
                <p className="text-gray-600 italic">"Rayan Tailwind transformed how we engage with our community!"</p>
                <p className="text-gray-500 text-sm mt-1">- Jane Smith, City Council</p>
              </div>
              <div>
                <p className="text-gray-600 italic">"The analytics tools are a game-changer for our organization."</p>
                <p className="text-gray-500 text-sm mt-1">- Mark Johnson, NGO Director</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Socials */}
          <div>
            <h3 className="text-lg font-bold mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-indigo-300"><FaFacebook size={24} /></a>
              <a href="#" className="hover:text-indigo-300"><FaTwitter size={24} /></a>
              <a href="#" className="hover:text-indigo-300"><FaInstagram size={24} /></a>
              <a href="#" className="hover:text-indigo-300"><FaLinkedin size={24} /></a>
            </div>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-bold mb-2">Contact Us</h3>
            <p>Email: info@rayantailwind.com</p>
            <p>Phone: +1 (123) 456-7890</p>
            <p>Address: 123 Main St, City, Country</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-2">Quick Links</h3>
            <ul className="space-y-1">
              <li><a href="#" className="hover:text-indigo-300">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-indigo-300">Terms of Service</a></li>
              <li><a href="#" className="hover:text-indigo-300">FAQ</a></li>
              <li><a href="#" className="hover:text-indigo-300">Support</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default WelcomeScreen;