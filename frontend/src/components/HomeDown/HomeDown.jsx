import React from 'react'
import statistic1 from '../../assets/homeDown/statistics1.png'
import statistic2 from '../../assets/homeDown/statistics2.png'
import statistic3 from '../../assets/homeDown/statistics3.png'
import statistic4 from '../../assets/homeDown/statistics4.png'

const HomeDown = () => {
  return (
    <div className='w-full py-5'>
        <div className='w-[85%] mx-auto flex justify-between items-center'>
            <div className='flex justify-start items-start gap-3 bg-[#2c2d30] px-4 py-2 rounded-lg text-white w-[20%] shadow-md shadow-black/40'>
                <div>
                    <img src={statistic1} alt="statistic1" />
                </div>
                <div>
                    <div className='text-xl font-semibold'>55%</div>
                    <div className='text-sm'>Average Salary Hike</div>
                </div>
            </div>
            <div className='flex justify-start items-start w-[20%] gap-3 bg-[#2c2d30] px-4 py-2 rounded-lg text-white shadow-md shadow-black/40'>
                <div>
                    <img src={statistic2} alt="statistic1" />
                </div>
                <div>
                    <div className='text-xl font-semibold'>600+</div>
                    <div className='text-sm'>Different Courses</div>
                </div>
            </div>
            <div className='flex justify-start items-start w-[20%] gap-3 bg-[#2c2d30] px-4 py-2 rounded-lg text-white shadow-md shadow-black/40'>
                <div>
                    <img src={statistic3} alt="statistic1" />
                </div>
                <div>
                    <div className='text-xl font-semibold'>12000+</div>
                    <div className='text-sm'>Carrer Transition</div>
                </div>
            </div>
            <div className='flex justify-start items-start w-[20%] gap-3 bg-black-bg px-4 py-2 rounded-lg text-white shadow-md shadow-black/40'>
                <div>
                    <img src={statistic4} alt="statistic1" />
                </div>
                <div>
                    <div className='text-xl font-semibold'>400+</div>
                    <div className='text-sm'>Hiring Partners</div>
                </div>
            </div>
        </div>        
    </div>
  )
}

export default HomeDown