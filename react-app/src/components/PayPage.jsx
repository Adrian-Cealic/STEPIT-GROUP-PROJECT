import React, { useState } from 'react'
import { LiaAngleLeftSolid, LiaAngleRightSolid } from "react-icons/lia";
import { CiCreditCard1 } from "react-icons/ci";
import {Link} from "react-router-dom"
const PayPage = () => {

    const [isCircleVisible, setIsCircleVisible] = useState(false);

    const handleClick = () => { 
        setIsCircleVisible(!isCircleVisible);
      };

  return (
    <div>
    <div className='flex items-center justify-between text-[#2260FF] px-4 py-8'>
        <LiaAngleLeftSolid size={25}  className=''/>
        <p className=' text-2xl font-medium flex-grow text-center'>Payment Method</p>
        {isCircleVisible ? (
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
        <div className='w-[300px]' onClick={() => handleClick()}>
            <div className='bg-[#ECF1FF] rounded-3xl py-2 px-4 flex items-center justify-between'>
               <div className='text-[#809CFF] flex'>
                <CiCreditCard1 size={30} className='text-[#2260FF]'/>
                <p className='ml-2'>Add New Card</p>
               </div> 
               <div className='rounded-full border border-[#2260FF] w-5 h-5 flex items-center justify-center'>
               {isCircleVisible ? (
            <div className='rounded-full bg-[#2260FF] w-3 h-3'></div>
          ) : (
            <div className='rounded-full bg-[#ECF1FF] w-3 h-3'></div>
          )}
               </div>
            </div>
            
        </div>
    </div>
    </div>
  )
}

export default PayPage