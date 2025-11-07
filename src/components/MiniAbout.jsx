import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const MiniAbout = () => {
  const navigate = useNavigate();

  return (
    <section className="!bg-[#FAF9F6] py-16 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-1/2">
          <img
            src={assets.about_img}
            alt="About Dasthakat"
            className="rounded-2xl shadow-lg object-cover w-full h-[400px] md:h-[480px]"
            loading="lazy"
          />
        </div>

        <div className="w-full md:w-1/2 !text-center md:!text-left">
          <h2 className="font-playfair !text-3xl sm:!text-4xl !text-[#1A1A1A] mb-4">
            About <span className="!text-[#C9A227]">Dasthakat</span>
          </h2>
          <p className="!text-gray-600 !text-sm sm:!text-base leading-relaxed mb-5">
            Born from a passion for modern modest fashion, <b>Dasthakat</b> blends
            elegance with everyday comfort. Each abaya is crafted to reflect
            sophistication, confidence, and timeless design — empowering women
            to express their individuality with grace.
          </p>
          <p className="!text-gray-600 !text-sm sm:!text-base leading-relaxed mb-8">
            We’re more than a brand — we’re a movement redefining modest fashion
            for the modern era.
          </p>

          <button
            onClick={() => navigate("/about")}
            className="!bg-[#C9A227] !text-white px-8 py-3 font-semibold tracking-wide rounded-full hover:!bg-[#B5835A] hover:scale-105 transition-all duration-300"
          >
            Know More
          </button>
        </div>
      </div>
    </section>
  );
};

export default MiniAbout;