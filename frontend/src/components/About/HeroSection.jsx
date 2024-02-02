import React from 'react'
import mig1 from '../../assets/aboutus/aboutus1.png'
import mig2 from '../../assets/aboutus/aboutus2.png'
import mig3 from '../../assets/aboutus/aboutus3.f5cfba861877ea03735d.png'

const HeroSection = () => {
  return (
    <>
        <div className='max-w-[85vw] mx-auto flex flex-col justify-center items-center gap-7 py-[10vh]'>
            <h1 className='text-white text-3xl font-bold w-full text-center'>Driving Innovation in Online Education for a <br /> <span className='text-glod-color'>Brighter Future</span>.</h1>
            <p className='text-white/70  w-full text-center'>CodeGyaan is at the forefront of driving innovation in online education. We're passionate about creating a brighter future <br /> by offering cutting-edge courses, leveraging emerging technologies, and nurturing a vibrant learning community.</p>
            <div className='flex justify-between items-center w-full'>
                <img src={mig1} alt="mig1" className='w-[27vw] h-auto shadow-black shadow-2xl' />
                <img src={mig2} alt="mig2" className='w-[27vw] h-auto shadow-black shadow-2xl' />
                <img src={mig3} alt="mig3" className='w-[27vw] h-auto shadow-black shadow-2xl' />
            </div>
            <h1 className='text-white mt-10 text-3xl font-bold w-full text-center'>We are passionate about revolutionizing the way we learn. Our innovative platform <span className='text-glod-color'>combines technology</span>, <span className='text-glod-color'>expertise</span>, and <span className='text-glod-color'>community</span> to create an unparalleled educational experience.</h1>
        </div>
    </>
  )
}

export default HeroSection