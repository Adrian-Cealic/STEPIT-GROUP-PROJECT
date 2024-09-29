import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import appointmentsData from '../data/appointments.json';

function AppointmentsPage() {
  const [tab, setTab] = useState('Complete');
  const navigate = useNavigate();

  const filteredAppointments = appointmentsData.filter(app => app.status === tab);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">All Appointments</h1>
      <div className="flex mb-4">
        {['Complete', 'Upcoming', 'Cancelled'].map(status => (
          <button
            key={status}
            className={`mr-2 px-4 py-2 rounded-lg ${
              tab === status ? 'bg-blue-500 text-white' : 'bg-gray-200'
            }`}
            onClick={() => setTab(status)}
          >
            {status}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredAppointments.map(app => (
          <div key={app.id} className="p-4 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-bold">{app.doctor}</h3>
            <p className="text-gray-500">{app.specialty}</p>
            <p className="text-sm text-gray-400">{app.date} at {app.time}</p>

            {tab === 'Complete' && (
              <div>
                <button
                  className="mt-2 bg-blue-500 text-white rounded-lg px-4 py-2 mr-2"
                  onClick={() => navigate(`/review/${app.id}`)}
                >
                  Add Review
                </button>
                <button
                  className="mt-2 bg-green-500 text-white rounded-lg px-4 py-2"
                  onClick={() => navigate(`/rebook/${app.id}`)}
                >
                  Re-Book
                </button>
              </div>
            )}

            {tab === 'Upcoming' && (
              <div className="flex items-center mt-2">
                <button
                  className="bg-blue-500 text-white rounded-lg px-4 py-2 mr-2"
                  onClick={() => navigate(`/appointment/${app.id}`)}
                >
                  Details
                </button>

                <button
                  className={`rounded-full border-2 border-black p-2 ${app.completed ? 'bg-blue-500 text-white' : 'bg-white text-black'}`}
                  onClick={() => {
                    app.completed = !app.completed;
                  }}
                >
                  ✓
                </button>

                <button
                  className="bg-red-500 text-white rounded-lg px-4 py-2 ml-2"
                  onClick={() => navigate(`/cancel/${app.id}`)}
                >
                  X
                </button>
              </div>
            )}

            {tab === 'Cancelled' && (
              <button
                className="mt-2 bg-blue-500 text-white rounded-lg px-4 py-2"
                onClick={() => navigate(`/review/${app.id}`)}
              >
                Add Review
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default AppointmentsPage;
