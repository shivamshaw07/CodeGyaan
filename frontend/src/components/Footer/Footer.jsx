import React from 'react'
import { LiaFreeCodeCamp, LiaLinkedin } from 'react-icons/lia'
import { MdMail, MdPhone } from 'react-icons/md'
import { RiGithubFill, RiLinkedinBoxFill, RiTwitterFill } from 'react-icons/ri'

const Footer = () => {
  return (
    <div className='bg-black max-w-[100vw] py-20'>
        <div className='w-[85%] mx-auto flex justify-around items-start'>
            <div className='text-white flex flex-col justify-start items-start gap-4 text-white/50'>
                <h1 className='text-3xl font-bold text-white flex justify-start items-center'><LiaFreeCodeCamp className='text-[44px] mr-1'/>Code<span className='text-glod-color'>Gyaan.</span></h1>
                <div className='flex justify-center items-center gap-3'>
                    <MdMail/>
                    <div>support@codegyaan.com</div>
                </div>
                <div className='flex justify-center items-center gap-3'>
                    <MdPhone/>
                    <div>+91 9142574541</div>
                </div>
                <div className='flex justify-center items-center gap-4 text-2xl text-white'><RiLinkedinBoxFill/><RiTwitterFill/><RiGithubFill/></div>
            </div>
            <div className='text-white flex flex-col justify-start items-start gap-4 text-white/50'>
                <h1 className='text-2xl text-white font-bold w-full border-b-4 border-glod-color pb-3'>Company.</h1>
                <div className='flex gap-20'>
                    <div className='flex flex-col gap-4'>
                        <div>About us</div>
                        <div>FAQ</div>
                        <div>Privacy policy</div>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <div>Conatct us</div>
                        <div>Job Assurance</div>
                        <div>Terms and condition</div>
                    </div>
                </div>
            </div>
            <div className='text-white flex flex-col justify-start items-start gap-4 text-white/50'>
                <h1 className='text-2xl text-white font-bold w-full border-b-4 border-glod-color pb-3'>Products.</h1>
                <div className='flex gap-20'>
                    <div className='flex flex-col gap-4'>
                        <div>CodeGyaan Lab</div>
                        <div>Experience Portal</div>
                        <div>Hall of Fame</div>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <div>Job Portal</div>
                        <div>Become an affiliate</div>
                        <div>Blog</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer