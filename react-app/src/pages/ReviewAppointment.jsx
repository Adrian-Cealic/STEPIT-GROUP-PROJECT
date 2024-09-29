import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import appointmentsData from '../data/appointments.json';

const ReviewAppointment = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const appointment = appointmentsData.find(app => app.id === parseInt(id));
    
    const [rating, setRating] = useState(0);
    const [comments, setComments] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Rating:', rating, 'Comments:', comments);
        navigate('/appointments');
    };

    return (
        <div className="container mx-auto px-4">
            <h1 className="text-2xl font-bold my-4">Review Appointment</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <h3 className="font-semibold">{appointment.title}</h3>
                    <p>{appointment.date}</p>
                </div>

                <div className="star-rating mb-4">
                    {[1, 2, 3, 4, 5].map(star => (
                        <span
                            key={star}
                            onClick={() => setRating(star)}
                            className={rating >= star ? 'text-yellow-500 cursor-pointer' : 'text-gray-400 cursor-pointer'}
                        >
                            ★
                        </span>
                    ))}
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

                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg">
                    Submit Review
                </button>
            </form>
        </div>
    );
};

export default ReviewAppointment;
