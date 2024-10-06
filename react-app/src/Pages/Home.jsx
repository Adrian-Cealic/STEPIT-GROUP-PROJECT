import React from 'react'
import Noti from '../assets/Notifications.svg'
import Settings from '../assets/Settings.svg'
import HomePfp from '../assets/HomePfp.png'
import Filter from '../assets/Filter.svg'
import Heart from '../assets/Heart.svg'
import Lupa from '../assets/Lupa.svg'
import Doctor from '../assets/Doctor.svg'

const Home = () => {
  return (
    <div className=' px-4'>
        <div className='flex justify-between py-6'>
          <div className='flex justify-center items-center gap-3'>
            <div className=''>
                <img src={HomePfp} alt="" className='rounded-full w-[60px]'/>
            </div>
            <div>
                <p className='text-[#2260FF] font-light'>Hi, WelcomeBack</p>
                <p className='text-xl'>John Doe</p>
            </div>
          </div>
            <div className='flex gap-2 justify-center items-center'>
                <div className='bg-[#CAD6FF] rounded-full h-[40px] w-[40px] flex items-center justify-center'>
                    <img className='w-[24px]' src={Noti} alt="" />
                </div>
                <div className='bg-[#CAD6FF] rounded-full h-[40px] w-[40px] flex items-center justify-center'>
                    <img className='w-[24px]' src={Settings} alt="" />
                </div>
            </div>
        </div>

        <div className='flex gap-4'>
            <div className='flex gap-2'>
                <div className='flex flex-col justify-center items-center'>
                    <img src={Doctor} alt="" className='h-[25px] w-[25px]' />
                    <p className='text-[#2260FF]'>Doctors</p>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <img src={Heart} alt="" className='h-[25px] w-[25px]'/>
                    <p className='text-[#2260FF]'>Favourite</p>
                </div>
            </div>
            
            <div className='bg-[#CAD6FF] flex justify-between items-center rounded-3xl px-1 w-full'>
                <div>
                    <img src={Filter} alt="" className='h-[35px] w-[35px]' />
                </div>
                <div>
                    <img src={Lupa} alt="" className='mr-2 h-[25px] w-[25px]'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home