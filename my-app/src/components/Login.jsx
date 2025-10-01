import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-indigo-600 text-white text-center py-8">
        <h1 className="text-4xl font-bold">Log In to Rayan Tailwind</h1>
        <p className="text-xl mt-2">Access your account to manage polls and surveys.</p>
      </header>

      {/* Login Form */}
      <main className="flex-1 flex items-center justify-center py-8">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Log In</h2>
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-gray-700 font-semibold mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <button
              className="w-full py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 font-semibold"
            >
              Log In
            </button>
          </div>
          <p className="text-center text-gray-600 mt-4">
            Don't have an account?{' '}
            <Link to="/signup" className="text-indigo-600 hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
}

export default Login;