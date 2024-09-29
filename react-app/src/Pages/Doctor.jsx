import React from 'react'
import { useParams } from 'react-router-dom'

const Doctor = ({ doctors }) => {
    const { doctorId } = useParams();

    const doctor = doctors.find(doctor => doctor.id === parseInt(doctorId));

    if (!doctor) {
        return <div>Doctor not found</div>;
    }

    return (
        <div className='container mx-auto'>
            <div className="bg-[#CAD6FF]">

                <div className="py-[12px] pl-[11px] pr-[9px]">
                    <img className='rounded-[100px]' src="https://i.ibb.co/BPwXDc5/18f72cca9421c8847e068a8451cdf5c4.png" alt="" />
                </div>


            </div>

            <h1>{doctor.name}</h1>
            <p>{doctor.field}</p>
            <p>{doctor.experience}</p>
            <p>{doctor.focus}</p>
            <p>{doctor.stars} stars</p>
        </div>
    );
};

export default Doctor;
