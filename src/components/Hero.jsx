// import { assets } from '../assets/assets'

// const Hero = () => {
//   return (
//     <div className='flex flex-col sm:flex-row !border-none !bg-gradient-to-r !from-[#1A1A1A] !to-[#E8DED1] overflow-hidden'>

//       <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0 px-8 sm:px-16'>
//         <div className='!text-[#FAF9F6]'>
          
//           <div className='flex items-center gap-2'>
//             <p className='w-8 md:w-11 h-[2px] !bg-[#C9A227]'></p>
//             <p className='font-medium text-sm md:text-base tracking-widest !text-[#E8DED1]'>
//               OUR BESTSELLERS
//             </p>
//           </div>

//           <h1 className='font-playfair text-4xl sm:text-5xl lg:text-6xl leading-snug py-4 !text-[#FAF9F6]'>
//             Elegance in Every Stitch
//           </h1>

//           <div className='flex items-center gap-3 mt-2'>
//             <button className='!bg-[#C9A227] !text-[#FFFFFF] px-6 py-2 font-semibold tracking-wide hover:!bg-[#B5835A] transition-all duration-300 text-white transition-all duration-300'>
//               Shop Now
//             </button>
//             <p className='w-10 h-[1px] !bg-[#C9A227]'></p>
//           </div>

//         </div>
//       </div>

//       <div className='w-full sm:w-1/2 h-[400px] sm:h-auto'>
//         <img
//           className='w-full h-full object-cover'
//           src={assets.hero_img}
//           alt='Dasthakat Abaya Collection'
//         />
//       </div>

//     </div>
//   )
// }

// export default Hero
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <section className="flex flex-col sm:flex-row items-stretch overflow-hidden !bg-gradient-to-r from-[#0D1116] via-[#1A1A1A] to-[#E8DED1]">
      <div className="w-full sm:w-1/2 flex items-center justify-center py-16 sm:py-0 px-6 sm:px-16">
        <div className="!text-[#FAF9F6] max-w-lg">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-8 md:w-12 h-[2px] !bg-[#C9A227]"></span>
            <p className="font-medium !text-sm md:!text-base tracking-widest !text-[#E8DED1]">
              OUR BESTSELLERS
            </p>
          </div>

          <h1 className="font-playfair font-semibold !text-4xl sm:!text-5xl lg:!text-6xl leading-tight sm:leading-snug mb-6 !text-[#FAF9F6]">
            Elegance in Every Stitch
          </h1>

          <div className="flex items-center gap-4">
            <button className="!bg-[#C9A227] !text-white px-6 py-3 rounded-full font-semibold tracking-wide hover:!bg-[#B5835A] hover:scale-105 transition-transform duration-300">
              Shop Now
            </button>
            <div className="hidden sm:block w-10 h-[1px] !bg-[#C9A227]"></div>
          </div>
        </div>
      </div>

      <div className="w-full sm:w-1/2 h-[380px] sm:h-auto">
        <img
          src={assets.hero_img}
          alt="Dasthakat Abaya Collection"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default Hero;