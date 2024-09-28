// src/components/Dashboard.js
import React from 'react';

function Dashboard() {
  // Funcție pentru deconectare
  const handleLogout = () => {
    localStorage.removeItem('authToken');
    window.location.href = '/';
  };

  return (
    <div className="bg-green-100 min-h-screen flex flex-col items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md text-center">
        <h2 className="text-2xl font-bold mb-4">Bine ai venit la Dashboard!</h2>
        <p className="text-gray-600 mb-6">Aceasta este o pagină protejată.</p>
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Deconectare
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
