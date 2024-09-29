import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import appointmentsData from '../data/appointments.json';

function AppointmentDetails() {
  const { id } = useParams(); 
  const navigate = useNavigate();

  const appointment = appointmentsData.find(app => app.id === parseInt(id));

  if (!appointment) {
    return <div>Appointment not found!</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <button
        className="mb-4 bg-gray-300 text-gray-700 px-4 py-2 rounded-lg"
        onClick={() => navigate(-1)}
      >
        Go Back
      </button>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">{appointment.doctor}</h2>
        <p className="text-gray-500 mb-2">Specialty: {appointment.specialty}</p>
        <p className="text-gray-400 mb-2">Date: {appointment.date}</p>
        <p className="text-gray-400 mb-2">Time: {appointment.time}</p>

        <div className="mt-4">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-lg mr-2"
            onClick={() => navigate(`/review/${appointment.id}`)}
          >
            Review Appointment
          </button>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded-lg"
            onClick={() => navigate(`/cancel/${appointment.id}`)}
          >
            Cancel Appointment
          </button>
        </div>
      </div>
    </div>
  );
}

export default AppointmentDetails;
