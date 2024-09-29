import React from 'react'
import seePass from '../assets/seePassword.svg'

const SignUp = () => {
  return (
    <>
      <div className='container mx-auto flex flex-col items-center'>
        <h1 className='text-3xl text-[#2260FF] mt-10 font-[600]'>New Account</h1>
        <div className='container mx-auto flex flex-col items-center mt-10 gap-2'>
            <div className='mb-3 h-[70px]'>
                <h1 className='text-xl font-[500]'>Full name</h1>
                <input type='text' className='w-[300px] h-[45px] bg-[#ECF1FF] text-[#809CFF] rounded-lg outline-none' placeholder='Name' />
            </div>
            <div className='mb-3 h-[70px]'>
                <h1 className='text-xl font-[500]'>Password</h1>
                <input type='password' className='w-[300px] h-[45px] bg-[#ECF1FF] text-[#809CFF] rounded-lg outline-none' placeholder='Password' />
                <img src={seePass} className='relative -top-[25px] left-[310px]' alt="" />
            </div>
            <div className='mb-3 h-[70px]'>
                <h1 className='text-xl font-[500]'>Email</h1>
                <input type='email' className='w-[300px] h-[45px] bg-[#ECF1FF] text-[#809CFF] rounded-lg outline-none' placeholder='Email' />
            </div>
            <div className='mb-3 h-[70px]'>
                <h1 className='text-xl font-[500]'>Mobile Number</h1>
                <input type='text' className='w-[300px] h-[45px] bg-[#ECF1FF] text-[#809CFF] rounded-lg outline-none' placeholder='Phone' />
            </div>
            <div className='mb-3 h-[70px]'>
                <h1 className='text-xl font-[500]'>Date Of Birth</h1>
                <input type='date' className='w-[300px] h-[45px] bg-[#ECF1FF] text-[#809CFF] rounded-lg outline-none' placeholder='DD/MM/YYYY' />
            </div>
        </div>
        <button className='mt-5 text-lg text-white w-[300px] h-[50px] rounded-full bg-[#2260FF]'>Sign Up</button>
        <span className='mt-5'>Alredy have an account? <a href="" className='text-blue-800'>Log In</a></span>
      </div> 
    </>
  )
}

export default SignUp
