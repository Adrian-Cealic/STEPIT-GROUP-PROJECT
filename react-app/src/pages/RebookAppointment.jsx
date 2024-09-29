import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import appointmentsData from '../data/appointments.json';

const RebookAppointment = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const appointment = appointmentsData.find(app => app.id === parseInt(id));

    const handleRebook = () => {
        console.log('Rebooked Appointment:', id);
        navigate('/appointments');
    };

    return (
        <div className="container mx-auto px-4">
            <h1 className="text-2xl font-bold my-4">Rebook Appointment</h1>
            <div className="mb-4">
                <h3 className="font-semibold">{appointment.title}</h3>
                <p>{appointment.date}</p>
            </div>
            <button
                onClick={handleRebook}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg"
            >
                Confirm Rebook
            </button>
        </div>
    );
};

export default RebookAppointment;
