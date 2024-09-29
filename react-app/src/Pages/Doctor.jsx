import React from 'react'
import { useParams } from 'react-router-dom'
import experience from '../assets/c.svg'
const Doctor = ({ doctors }) => {
    const { doctorId } = useParams();

    const doctor = doctors.find(doctor => doctor.id === parseInt(doctorId));

    if (!doctor) {
        return <div>Doctor not found</div>;
    }

    return (
        <div className='container mx-auto px-20'>
            <div className="bg-[#CAD6FF] flex flex-col justify-center items-center rounded-lg mt-[50px] max-w-[500px]">

                <div className="flex flex-row">

                    <div className="py-[12px] pl-[11px] pr-[9px]">
                        <img className='rounded-[100px]' src="https://i.ibb.co/BPwXDc5/18f72cca9421c8847e068a8451cdf5c4.png" alt="" />
                    </div>
                    <div className="flex flex-col gap-[3px] justify-center text-white">

                        <div className="bg-[#2260FF] flex gap-[6px] rounded-full px-2">
                            <img src={experience} alt="" />
                            <p className='text-wrap px-2 py-1'>{doctor.experience} <br /> of experience</p>
                        </div>
                        <div className="bg-[#2260FF] rounded-full py-4 px-2">
                            <p>Focus: {doctor.focus}</p>
                        </div>
                    </div>
                </div>


                <div className="bg-white rounded-full px-6 py-2 flex flex-col justify-center items-center mb-[20px]">
                    <h1 className='text-[#2260FF]'>{doctor.name}</h1>
                    <p>{doctor.field}</p>

                </div>

            </div>

            <div className="flex flex-col gap-[20px]">

                <div className="">
                    <span className='text-[#2260FF]'>Profile</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <div className="">
                    <span className='text-[#2260FF]'>Career path</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <div className="">
                    <span className='text-[#2260FF]'>Highlights</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </div>
        </div>
    );
};

export default Doctor;
