import React from 'react'
import { Link } from "react-router-dom";
import { LiaAngleLeftSolid } from "react-icons/lia";
import Success from '../assets/Success.svg'
import Calendar from '../assets/Calendar.svg'
import Clock from '../assets/Clock.svg'
const PayPage4 = () => {
  return (
    <div className='h-screen bg-[#2260FF]'>
       <div className='flex items-start text-white px-4 py-8 w-full'>
        <Link to={"/pay3"}>
          <LiaAngleLeftSolid size={25} />
        </Link>
      </div>

      <div className='flex justify-center mt-12 '>
        <img src={Success} alt="" />
      </div>

        <div className='text-white flex justify-center text-center mt-2 flex-col'>
            <p className='text-4xl font-bold py-4'>Congratulations</p>
            <p className='text-2xl'>Payment is Successful</p>
        </div>

      <div className='flex justify-center items-center mt-12 text-white '>
        <div className='border border-white w-[300px] rounded-xl p-6'>
            <p className='text-center font-light mb-2'>You have successfully booked an appointment with</p>
            <p className='font-bold text-2xl text-center mb-2'>Dr. Olivia Turner, M.D.</p>
            <div className='flex justify-center gap-4'>
                <div className='flex'>
                    <img src={Calendar} alt="" />
                    <p>24-06</p>
                </div>
                <div className='flex'>
                    <img src={Clock} alt="" />
                    <p>10:00 A.M.</p>
                </div>
            </div>
        </div>
      </div>
        
     
    </div>
  )
}

export default PayPage4