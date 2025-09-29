import React from 'react';

function Header() {
  return (
    <div className="bg-white shadow-md p-4 flex justify-end">
      {/* User Icon on Top Right */}
      <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
        <span className="text-xl">👤</span> {/* Replace with real icon/image if needed */}
      </div>
    </div>
  );
}

export default Header;