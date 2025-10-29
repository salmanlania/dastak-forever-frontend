// import React from 'react'
// import { assets } from '../assets/assets'

// const Hero = () => {
//     return (
//         <div className='flex flex-col sm:flex-row border border-gray-400'>

//             {/* Hero Left Side */}
//             <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
//                 <div className='text-[#414141]'>
//                     <div className='flex items-center gap-2'>
//                         <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
//                         <p className='font-medium text-sm md:text-base'>OUR BESTSELLERS</p>
//                     </div>

//                     <h1 className='prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed'>Latest Arrivals</h1>

//                     <div className='flex items-center gap-2'>
//                         <p className='font-semibold text-sm md:text-base'>SHOP NOW</p>
//                         <p className='w-8 md:w-11 h-[1px] bg-[#414141]'></p>
//                     </div>
//                 </div>
//             </div>

//             {/* Hero Right Side */}
//             <img className='w-full sm:w-1/2' src={assets.hero_img} alt="" />
//         </div>
//     )
// }

// export default Hero

import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row !border-none !bg-gradient-to-r !from-[#1A1A1A] !to-[#E8DED1] overflow-hidden'>

      {/* Left Side */}
      <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0 px-8 sm:px-16'>
        <div className='!text-[#FAF9F6]'>
          
          <div className='flex items-center gap-2'>
            <p className='w-8 md:w-11 h-[2px] !bg-[#C9A227]'></p>
            <p className='font-medium text-sm md:text-base tracking-widest !text-[#E8DED1]'>
              OUR BESTSELLERS
            </p>
          </div>

          <h1 className='font-playfair text-4xl sm:text-5xl lg:text-6xl leading-snug py-4 !text-[#FAF9F6]'>
            Elegance in Every Stitch
          </h1>

          <div className='flex items-center gap-3 mt-2'>
            <button className='!bg-[#C9A227] !text-[#FFFFFF] px-6 py-2 font-semibold tracking-wide hover:!bg-[#B5835A] transition-all duration-300'>
              SHOP NOW
            </button>
            <p className='w-10 h-[1px] !bg-[#C9A227]'></p>
          </div>

        </div>
      </div>

      {/* Right Side */}
      <div className='w-full sm:w-1/2 h-[400px] sm:h-auto'>
        <img
          className='w-full h-full object-cover'
          src={assets.hero_img}
          alt='Dasthakat Abaya Collection'
        />
      </div>

    </div>
  )
}

export default Hero