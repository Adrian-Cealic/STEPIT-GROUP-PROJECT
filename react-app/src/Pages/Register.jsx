import React from 'react'
import Logo from '../assets/logo.svg'

export const Register = () => {
    return (
        <>
            <div className='container mx-auto'>
                <div className='flex flex-col justify-center items-center h-screen gap-[20px]'>
                    <div className='flex flex-col justify-center items-center'>
                        <img className='' src={Logo} alt="" />
                        <span className=''>Skin Firts</span>
                        <p>Dermatology Center</p>
                    </div>

                    <div className='flex flex-col justify-center items-center max-w-[500px]'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates est ipsa quasi quidem magnam animi,
                            totam et iste aliquid a tenetur, illum necessitatibus aspernatur, perspiciatis perferendis obcaecati
                            repellendus nesciunt quis!</p>
                        <div className='flex flex-col gap-[14px] mt-12'>
                            <button className='px-[40px] py-[23px] text-white bg-[#2260FF] rounded-full'>Log In</button>
                            <button className='px-[40px] py-[23px] text-[#2260FF] bg-[#CAD6FF] rounded-full'>Sign Up</button>
                        </div>
                    </div>


                </div>

            </div>
        </>
    )
}
