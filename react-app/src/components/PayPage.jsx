import React, { useState } from 'react'
import { LiaAngleLeftSolid, LiaAngleRightSolid } from "react-icons/lia";
import { CiCreditCard1 } from "react-icons/ci";
import {Link} from "react-router-dom"
import Apple from "../assets/Apple.svg"
import PayPal from "../assets/PayPal.svg"
import Google from "../assets/Google.svg"
import Half from '../assets/HalfScreen.jpg'
const PayPage = () => {

    const [selectedOption, setSelectedOption] = useState('');

    const HandleOptionSelect = (option) =>{
        setSelectedOption(option);
    }

  return (
    <div className='lg:flex'>
        <div className='hidden lg:block w-1/2 border-r border-[#2260FF] h-screen '>
        <div className='relative'>
            <img src={Half} alt="" className='w-full' />
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
        </div>
            
        </div>  
    <div className='lg:w-1/2'>     
     <div className='flex items-center justify-between text-[#2260FF] px-4 py-8 '>
        <Link to={"/"}><LiaAngleLeftSolid size={25}  className=''/></Link>
        <p className=' text-2xl font-medium flex-grow text-center'>Payment Method</p>
        {selectedOption
        
        ? (
                    <Link to={"/pay2"}>
                        <LiaAngleRightSolid
                            size={25}
                            className="text-[#2260FF]"
                            style={{ cursor: 'pointer', opacity: 1 }}
                        />
                    </Link>
                ) : (
                    <LiaAngleRightSolid
                        size={25}
                        className="text-gray-400"
                        style={{ cursor: 'not-allowed', opacity: 0.5 }}
                    />
                )}
        
    </div>
    
    <div className=' px-6 text-xl font-light'>
        <p className=' mb-3'>Credit & Debit Card</p>
        <div className='w-full' onClick={() => HandleOptionSelect('Card')}>
            <div className='bg-[#ECF1FF] rounded-3xl  py-2 px-4 flex items-center justify-between'>
               <div className='text-[#809CFF] flex'>
                <CiCreditCard1 size={30} className='text-[#2260FF]'/>
                <p className='ml-2'>Add New Card</p>
               </div> 
               <div className='rounded-full border border-[#2260FF] w-5 h-5 flex items-center justify-center'>
               {selectedOption === 'Card' && (
                <div className='rounded-full bg-[#2260FF] w-3 h-3'></div>
              )}
               </div>
            </div>
            
        </div>
    </div>


    <div className=' px-6 text-xl font-light'>
        <p className=' mb-3'>More Payment Options</p>
        <div className='w-full mb-3' onClick={() => HandleOptionSelect('Apple')}>
            <div className='bg-[#ECF1FF] rounded-3xl py-2 px-4 flex items-center justify-between'>
               <div className='text-[#809CFF] flex'>
                <img src={Apple} alt="" />
                <p className='ml-2'>Apple Pay</p>
               </div> 
               <div className='rounded-full border border-[#2260FF] w-5 h-5 flex items-center justify-center'>
               {selectedOption === 'Apple' && (
                <div className='rounded-full bg-[#2260FF] w-3 h-3'></div>
              )}
               </div>
            </div>
            
        </div>
        <div className='w-full mb-3' onClick={() => HandleOptionSelect('PayPal')}>
            <div className='bg-[#ECF1FF] rounded-3xl py-2 px-4 flex items-center justify-between'>
               <div className='text-[#809CFF] flex'>
                <img src={PayPal} alt="" />
                <p className='ml-2'>PayPal</p>
               </div> 
               <div className='rounded-full border border-[#2260FF] w-5 h-5 flex items-center justify-center'>
               {selectedOption === 'PayPal' && (
                <div className='rounded-full bg-[#2260FF] w-3 h-3'></div>
              )}
               </div>
            </div>
            
        </div>

        <div className='w-full' onClick={() => HandleOptionSelect('Google')}>
            <div className='bg-[#ECF1FF] rounded-3xl py-2 px-4 flex items-center justify-between'>
               <div className='text-[#809CFF] flex'>
                <img src={Google} alt="" />
                <p className='ml-2'>Google Pay</p>
               </div> 
               <div className='rounded-full border border-[#2260FF] w-5 h-5 flex items-center justify-center'>
               {selectedOption === 'Google' && (
                <div className='rounded-full bg-[#2260FF] w-3 h-3'></div>
              )}
               </div>
            </div>
            
        </div>
    </div>
    </div>
    </div>
  )
}

export default PayPage