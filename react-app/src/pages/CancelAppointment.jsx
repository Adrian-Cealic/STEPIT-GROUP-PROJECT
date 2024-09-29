import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import appointmentsData from '../data/appointments.json';

const CancelAppointment = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const appointment = appointmentsData.find(app => app.id === parseInt(id));

    const [reason, setReason] = useState('');
    const [comments, setComments] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Cancelled Appointment:', id, 'Reason:', reason, 'Comments:', comments);
        navigate('/appointments');
    };

    return (
        <div className="container mx-auto px-4">
            <h1 className="text-2xl font-bold my-4">Cancel Appointment</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <h3 className="font-semibold">{appointment.title}</h3>
                    <p>{appointment.date}</p>
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Reason for Cancellation:</label>
                    <select
                        value={reason}
                        onChange={(e) => setReason(e.target.value)}
                        className="w-full p-2 border rounded-lg"
                    >
                        <option value="">Select a reason</option>
                        <option value="Personal reasons">Personal reasons</option>
                        <option value="Scheduling conflict">Scheduling conflict</option>
                        <option value="Other">Other</option>
                    </select>
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Comments:</label>
                    <textarea
                        value={comments}
                        onChange={(e) => setComments(e.target.value)}
                        className="w-full p-2 border rounded-lg"
                        rows="4"
                    />
                </div>

                <button type="submit" className="bg-red-500 text-white px-4 py-2 rounded-lg">
                    Confirm Cancellation
                </button>
            </form>
        </div>
    );
};

export default CancelAppointment;
