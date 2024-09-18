import React from 'react';

const DoctorCard = ({ doctor }) => {
  return (
    <div className="doctor-card">
      <h2 className="text-xl font-bold text-blue-500">{doctor.name}</h2>
      <p className="text-gray-700">{doctor.title}</p>
      <button className="doctor-card-button">Info</button>
    </div>
  );
};

export default DoctorCard;