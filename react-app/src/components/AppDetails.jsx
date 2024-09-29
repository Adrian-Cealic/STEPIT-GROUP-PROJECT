import React from 'react';

const AppDetails = ({ date, time }) => {
  return (
    <div className="p-4 md:p-8 lg:p-12 bg-white rounded-lg shadow-lg max-w-sm mx-auto md:max-w-md lg:max-w-lg">
      <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4">Your Appointment</h2>
      <div className="flex items-center mb-4">
        <img 
          src="/assets/doctor-placeholder.jpg" 
          alt="Doctor" 
          className="w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 rounded-full shadow-lg mr-4"
        />
        <div>
          <h3 className="text-md md:text-lg lg:text-xl font-bold">Dr. Olivia Turner, M.D.</h3>
          <p className="text-sm text-gray-500">Dermato-Endocrinology</p>
        </div>
      </div>
      <p className="text-lg md:text-xl lg:text-2xl">Date: {date}</p>
      <p className="text-lg md:text-xl lg:text-2xl">Time: {time}</p>
    </div>
  );
};

export default AppDetails;
