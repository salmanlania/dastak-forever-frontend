import React from "react";
import { assets } from '../assets/assets'
import { useNavigate } from "react-router-dom";

const ParallaxBanner = () => {
  const navigate = useNavigate()
  return (
    <div
      className="relative h-[400px] sm:h-[900px] !bg-fixed !bg-center !bg-cover flex items-center justify-center"
      style={{
        // backgroundImage: assets.hero_img
        backgroundImage: `url(${assets.hero_img})`
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 !bg-black/40"></div>

      {/* Text Content */}
      <div className="relative text-center !text-white z-10 px-4">
        <h2 className="text-2xl sm:text-4xl font-bold mb-4">
          FASHIONABLE AND TRENDY CLOTHES FOR YOU
        </h2>
        <button onClick={() => navigate('/products')} className="!bg-[#C9A227] !hover:bg-[#b08e20] text-white px-6 py-3 text-sm sm:text-base rounded-full transition-all duration-300">
          SHOP NOW
        </button>
      </div>
    </div>
  );
};

export default ParallaxBanner;
