import React from "react";
import { FaEnvelopeOpenText } from "react-icons/fa";

const Newsletter = () => {
  return (
    <section className="bg-[#1A1A1A] !text-[#FAF9F6] py-16 px-6 sm:px-12 !text-center">
      <div className="max-w-4xl mx-auto">
        <FaEnvelopeOpenText className="!text-[#C9A227] !text-4xl mx-auto mb-4" />
        <h2 className="font-playfair !text-3xl sm:!text-4xl !text-gray-500 font-bold mb-4">
          Stay in Touch with <span className="!text-[#C9A227]">Dasthakat</span>
        </h2>
        <p className="!text-gray-300 !text-sm sm:!text-base mb-8">
          Be the first to know about new arrivals, exclusive offers, and limited edition designs.
        </p>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full sm:w-2/3 px-4 py-3 !rounded-md !text-gray-800 focus:!outline-none focus:!ring-2 focus:!ring-[#C9A227] border"
            required
          />
          <button
            type="submit"
            className="w-full sm:w-auto px-8 py-3 bg-[#C9A227] hover:bg-[#B5835A] !text-white font-semibold rounded-md transition-all duration-300"
          >
            Subscribe
          </button>
        </form>

        <p className="!text-gray-400 !text-xs mt-6">
          We respect your privacy — unsubscribe anytime.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;