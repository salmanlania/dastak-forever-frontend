import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";

const Contact = () => {
  return (
    <div className="!bg-[#F9F6F2] min-h-screen py-12 px-6 md:px-16">

      <div className="!text-center !!text-2xl mb-12">
        <Title text1="CONTACT" text2="US" />
        <p className="!text-gray-600 mt-2 tracking-wide">
          Have questions? We're here to help.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-14 items-center justify-between">

        <img
          className="w-full md:max-w-[450px] rounded-2xl shadow-md border border-[#E6DCCD]"
          src={assets.contact_img}
          alt="contact"
        />

        <div className="w-full md:w-1/2 space-y-6">

          <div>
            <p className="!text-xl font-semibold !text-[#2C2420]">Visit Us</p>
            <p className="!text-gray-600 mt-2">
              Shop #xx, Main Road, Karachi, Pakistan <br/> Near Dolmen Mall / Clifton
            </p>

            <p className="!text-gray-600 mt-2">
              Phone: +92 300 1234567 <br/>
              Email: support@dastakhat.pk
            </p>
          </div>

          <div className="!bg-white p-6 rounded-2xl shadow-sm border border-[#E6DCCD]">
            <p className="!text-lg font-semibold !text-[#2C2420] mb-4">
              Send us a message
            </p>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full py-3 px-4 rounded-xl !bg-[#FAF6F1] outline-none border border-transparent focus:border-[#C4A484]"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full py-3 px-4 rounded-xl !bg-[#FAF6F1] outline-none border border-transparent focus:border-[#C4A484]"
              />

              <textarea
                rows="4"
                placeholder="Message"
                className="w-full py-3 px-4 rounded-xl !bg-[#FAF6F1] outline-none border border-transparent focus:border-[#C4A484]"
              ></textarea>

              <button
                type="submit"
                className="w-full py-3 rounded-full !bg-[#C9A227] !text-[#FFFFFF] !text-sm font-medium hover:!bg-[#B5835A] transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>

      {/* <div className="mt-20 !text-center">
        <p className="!text-xl font-semibold !text-[#2C2420]">Careers at Dastakhat</p>
        <p className="!text-gray-600 mt-1">Join our growing tam!</p>
        <button className="mt-4 border border-[#C4A484] !text-[#C4A484] px-8 py-3 rounded-full hover:!bg-[#C4A484] hover:!text-white transition">
          Explore Jobs
        </button>
      </div> */}

    </div>
  );
};

export default Contact;
