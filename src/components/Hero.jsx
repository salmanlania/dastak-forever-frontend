import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const Hero = () => {
  const navigate = useNavigate()
  return (
    <section className="flex flex-col sm:flex-row items-stretch overflow-hidden !bg-gradient-to-r !from-[#1A1A1A] !to-[#E8DED1] overflow-hidden">
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
            <button onClick={()=>navigate('/product')} className="!bg-[#C9A227] !text-white px-6 py-3 rounded-full font-semibold tracking-wide hover:!bg-[#B5835A] hover:scale-105 transition-transform duration-300">
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