import React from 'react';

const AppDetailsPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <div className="bg-white shadow-lg rounded-lg p-4">
        <div className="flex items-center mb-4">
          <img
            src="/doctor.jpeg"
            alt="Doctor"
            className="w-24 h-24 rounded-full mr-4"
          />
          <div>
            <h2 className="text-xl font-semibold">Dr. Olivia Turner, M.D.</h2>
            <p className="text-sm text-gray-500">Dermato-Endocrinology</p>
          </div>
        </div>

        <h3 className="text-md text-gray-500 mb-4">March 24, 2024 - 10:30 AM</h3>

        <h3 className="text-lg font-bold">Appointment Details</h3>
        <p className="text-sm text-gray-600 mt-2">
          Booking For: Another Person
        </p>
        <p className="text-sm text-gray-600">Full Name: Jane Doe</p>
        <p className="text-sm text-gray-600">Age: 30</p>
        <p className="text-sm text-gray-600">Gender: Female</p>

        <h3 className="text-lg font-bold mt-4">Problem</h3>
        <p className="text-sm text-gray-600 mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit...
        </p>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 w-full bg-white shadow-lg flex justify-between p-4">
        <button className="text-blue-500">Home</button>
        <button className="text-blue-500">Appointments</button>
        <button className="text-blue-500">Profile</button>
      </div>
    </div>
  );
};

export default AppDetailsPage;
