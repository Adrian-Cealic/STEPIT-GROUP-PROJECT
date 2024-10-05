import React from 'react'
import {Link} from "react-router-dom"
import { LiaAngleLeftSolid } from "react-icons/lia";
import Pfp from '../assets/PayPfp.png'
import Badge from '../assets/Badge.svg'
import Star from '../assets/Star.svg'
import Reviews from '../assets/Reviews.svg'
import Half from '../assets/HalfScreen.jpg'
const PayPage3 = () => {
  return (
    <div className='lg:flex'>
      <div className='hidden lg:block w-1/2 border-r border-[#2260FF] h-screen '>
        <div className='relative'>
            <img src={Half} alt="" className='w-full' />
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
        </div>
            
        </div>
        <div className='lg:w-1/2'>
        <div className='bg-[#2260FF] text-white'>

            <div className='flex items-center bg-[#2260FF]  px-4 pt-8 pb-12 justify-between'>
             <Link to={"/pay2"}>
              <LiaAngleLeftSolid size={25} />
             </Link>
             <p className='text-2xl font-medium flex-grow text-center'>Payment</p>
             <div className='w-6'></div>
            </div>

            <div className='flex justify-center items-center text-5xl pb-12 font-bold'>
              <p>$ 100.00</p>
            </div>    
        </div>

        <div className='flex py-6 mx-4 border-b border-[#2260FF]'>
            <img src={Pfp} alt="" className='rounded-full h-full mr-4' />
            <div>
                <div className='flex'>
                  <p className='text-[#2260FF] text-xl mr-4'>Dr. Olivia Turner, M.D.</p>
                  <img src={Badge} alt="" className='h-[30px] w-[30px]'/>
                </div>
                <p className='font-light mb-2'>Dermato-Endocrinology</p>
                <div className='flex gap-3'>
                  <div className='flex bg-[#CAD6FF] gap-1 px-2 rounded-2xl w-[60px]'>
                    <img src={Star} alt="" />
                    <span>5</span>
                  </div>
                  <div className='flex bg-[#CAD6FF] gap-1 px-2 rounded-2xl w-[60px]'>
                    <img src={Reviews} alt="" />
                    <span>60</span>
                  </div>
                </div>
            </div>
        </div>
        <div className='flex justify-between px-4 mx-4 border-b border-[#2260FF] py-4'>
          <div className='text-[#4378FF] flex flex-col gap-4  '>
              <p>Date / Hour</p>
              <p>Duration</p>
              <p>Booking for</p>
          </div>
          <div className='text-end flex flex-col gap-4'>
              <p> 24-06 / 10:00 A.M. </p>
              <p>30 minutes</p>
              <p>Another person</p>
          </div>
        </div>

        <div className='flex justify-between px-4 mx-4 border-b border-[#2260FF] py-4'>
          <div className='text-[#4378FF] flex flex-col gap-4  '>
              <p>Amount</p>
              <p className='mb-6'>Duration</p>
              <p>Total</p>
          </div>
          <div className='text-end flex flex-col gap-4'>
              <p> $100.00 </p>
              <p className='mb-6'>30 minutes</p>
              <p>$100.00</p>
          </div>
        </div>

        <div className='flex justify-between px-4 mx-4 border-b border-[#2260FF] py-4'>
          <div className='text-[#4378FF]'>
            <p>Payment Method</p>
          </div>
          <div className='text-end flex gap-1'>
            <p>Card</p>
            <p className='text-[#4378FF] underline font-light'><Link to={"/pay1"}>Change</Link></p>
          </div>
        </div>

        <Link to={"/pay4"} className='flex items-center justify-center mb-4'>
            <button className='text-2xl text-white rounded-3xl py-3 px-2 flex items-center justify-center bg-[#2260FF] w-[300px] mt-6'>Pay Now</button>
        </Link>
        </div>
    </div>
  )
}

export default PayPage3