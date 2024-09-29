import React from 'react'

import Calendar from '../assets/Calendar.svg'
import Info from '../assets/Info.svg'
import Like from '../assets/Like.svg'
import Question from '../assets/Question.svg'
import { useParams,Link } from 'react-router-dom'

const DoctorCard = ({ field, doctorName }) => {
    return (
        <div className='flex items-center bg-[#CAD6FF] rounded-[17px] max-w-[600px] max-h-[200px]'>
            <div className="py-[12px] pl-[11px] pr-[9px]">
                <img className='rounded-[100px]' src="https://i.ibb.co/BPwXDc5/18f72cca9421c8847e068a8451cdf5c4.png" alt="" />
            </div>
            <div className="">
                <div className="">
                    <h1 className='text-[#2260FF]'>{doctorName}</h1>
                    <span>{field}</span>
                </div>
                <div className="flex flex-row items-center gap-[5px] mt-[20px]">
                    {/* <Link to={`/Doctors/${}`}>
                        <button className='bg-[#2260FF] text-white rounded-[18px] px-4 py-1 mr-[10px]'>
                            Info
                        </button>
                    </Link> */}
                    <button className='bg-white rounded-full p-3'>
                        <img src={Calendar} alt="" />
                    </button>
                    <button className='bg-white rounded-full px-4 py-3.5'>
                        <img src={Info} alt="" />
                    </button>
                    <button className='bg-white rounded-full p-3'>
                        <img src={Like} alt="" />
                    </button>
                    <button className='bg-white rounded-full px-3.5 py-3'>
                        <img src={Question} alt="" />
                    </button>

                </div>
            </div>
        </div>
    )
}

export default DoctorCard
