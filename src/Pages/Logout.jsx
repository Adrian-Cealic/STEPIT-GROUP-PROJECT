import React from 'react';
import { AiOutlineLeft } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    //logout
    localStorage.removeItem('authToken');
    sessionStorage.removeItem('authToken');//sessionStorage

    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        <div className="bg-blue-100 flex items-center justify-between p-4">
          <AiOutlineLeft 
            className="text-blue-600 w-6 h-6 cursor-pointer" 
            onClick={() => navigate('/')} 
          />
          <h2 className="text-lg font-bold text-blue-600">Logout</h2>
        </div>

        <div className="p-6 text-center">
          <h3 className="text-gray-800 text-lg font-semibold mb-4">
            Are you sure you want to log out?
          </h3>

          <div className="flex justify-between space-x-4">
            <button
              onClick={() => navigate('/')}
              className="px-4 py-2 bg-gray-300 rounded-full"
            >
              Cancel
            </button>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-blue-500 text-white rounded-full"
            >
              Yes, Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logout;
