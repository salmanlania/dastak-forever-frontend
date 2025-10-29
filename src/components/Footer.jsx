// import React from 'react'
// import { assets } from '../assets/assets'
// import { useNavigate } from 'react-router-dom'

// const Footer = () => {
//   const navigate = useNavigate();

//   const footerAction = (path) => {
//     if (path === 'home') navigate('/');
//     else if (path === 'about') navigate('/about');
//     else if (path === 'return-policy') navigate('/return-policy');
//     else if (path === 'privacy-policy') navigate('/privacy-policy');
//     else if (path === 'delivery') navigate('/delivery');
//   }

//   return (
//     <div>
//       <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 text-sm'>

//         <div>
//           <img className='mb-5 w-32' src={assets.logo} alt="" />
//           <p className='w-full md:w-2/3 text-gray-600'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
//         </div>

//         <div>
//           <p className='text-xl font-medium mb-5'>COMPANY</p>
//           <ul className='flex flex-col gap-1 text-gray-600'>
//             <li style={{ cursor: 'pointer' }} onClick={() => footerAction('home')}>Home</li>
//             <li style={{ cursor: 'pointer' }} onClick={() => footerAction('about')}>About us</li>
//             <li style={{ cursor: 'pointer' }} onClick={() => footerAction('return-policy')}>Return Policy</li>
//             <li style={{ cursor: 'pointer' }} onClick={() => footerAction('delivery')}>Delivery</li> 
//             <li style={{ cursor: 'pointer' }} onClick={() => footerAction('privacy-policy')}>Privacy Policy</li>
//           </ul>
//         </div>

//         <div>
//           <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
//           <ul className='flex flex-col gap-1 text-gray-600'>
//             <li><a href="tel:+92 335 2778111">+92 335 2778111</a></li>
//             <li>dasthakat@gmail.com</li>
//           </ul>
//         </div>

//       </div>

//       <div>
//         <hr />
//         <p className='py-5 text-sm text-center'>Copyright 2024@ Dastakhat.com - All Right Reserved.</p>
//       </div>

//     </div>
//   )
// }

// export default Footer

import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

const Footer = () => {
  const navigate = useNavigate();

  const footerAction = (path) => {
    if (path === "home") navigate("/");
    else if (path === "about") navigate("/about");
    else if (path === "return-policy") navigate("/return-policy");
    else if (path === "privacy-policy") navigate("/privacy-policy");
    else if (path === "delivery") navigate("/delivery");
  };

  return (
    <footer className="bg-[#111] text-[#e9e9e9] border-t border-[#2A2A2A]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 py-14">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Info */}
          <div>
            <img src={assets.logo} alt="Dastakhat" className="w-36 mb-5" />
            <p className="text-sm leading-relaxed text-[#B3B3B3]">
              Dastakhat blends tradition and elegance, offering a timeless
              collection of Abayas, Chadors, and modest wear designed for the
              modern woman.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-base font-semibold mb-4 tracking-wide text-white">
              SHOP
            </h3>
            <ul className="space-y-2 text-sm text-[#B3B3B3]">
              <li className="hover:text-[#C9A227] cursor-pointer">All Products</li>
              <li className="hover:text-[#C9A227] cursor-pointer">New Arrivals</li>
              <li className="hover:text-[#C9A227] cursor-pointer">Best Sellers</li>
              <li className="hover:text-[#C9A227] cursor-pointer">Abayas</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-base font-semibold mb-4 tracking-wide text-white">
              COMPANY
            </h3>
            <ul className="space-y-2 text-sm text-[#B3B3B3]">
              <li
                className="hover:text-[#C9A227] cursor-pointer"
                onClick={() => footerAction("about")}
              >
                About
              </li>
              <li
                className="hover:text-[#C9A227] cursor-pointer"
                onClick={() => footerAction("return-policy")}
              >
                Return Policy
              </li>
              <li
                className="hover:text-[#C9A227] cursor-pointer"
                onClick={() => footerAction("delivery")}
              >
                Delivery
              </li>
              <li
                className="hover:text-[#C9A227] cursor-pointer"
                onClick={() => footerAction("privacy-policy")}
              >
                Privacy Policy
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-base font-semibold mb-4 tracking-wide text-white">
              CONTACT
            </h3>
            <ul className="space-y-2 text-sm text-[#B3B3B3]">
              <li>
                <a href="tel:+923352778111" className="hover:text-[#C9A227]">
                  +92 335 2778111
                </a>
              </li>
              <li>
                <a
                  href="mailto:dasthakat@gmail.com"
                  className="hover:text-[#C9A227]"
                >
                  dasthakat@gmail.com
                </a>
              </li>
            </ul>

            {/* Socials */}
            <div className="flex gap-4 mt-5">
              <a
                href="#"
                className="w-8 h-8 flex items-center justify-center border border-[#2C2C2C] rounded-full hover:border-[#C9A227] hover:text-[#C9A227] transition-all"
              >
                <FaFacebookF size={14} />
              </a>
              <a
                href="#"
                className="w-8 h-8 flex items-center justify-center border border-[#2C2C2C] rounded-full hover:border-[#C9A227] hover:text-[#C9A227] transition-all"
              >
                <FaInstagram size={14} />
              </a>
              <a
                href="#"
                className="w-8 h-8 flex items-center justify-center border border-[#2C2C2C] rounded-full hover:border-[#C9A227] hover:text-[#C9A227] transition-all"
              >
                <FaTiktok size={14} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="mt-10 border-t border-[#2C2C2C] pt-6 text-center text-xs text-[#777] tracking-wide">
          © {new Date().getFullYear()} Dastakhat — All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;


// import React from "react";
// import { assets } from "../assets/assets";
// import { useNavigate } from "react-router-dom";
// import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

// const Footer = () => {
//   const navigate = useNavigate();

//   const footerAction = (path) => {
//     if (path === "home") navigate("/");
//     else if (path === "about") navigate("/about");
//     else if (path === "return-policy") navigate("/return-policy");
//     else if (path === "privacy-policy") navigate("/privacy-policy");
//     else if (path === "delivery") navigate("/delivery");
//   };

//   return (
//     <footer className="bg-[#1A1A1A] text-[#FAF9F6] pt-14 pb-6 px-6 sm:px-12 lg:px-20">
//       {/* --- Top Footer Grid --- */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
//         {/* Brand Section */}
//         <div>
//           <img src={assets.logo} alt="logo" className="w-36 mb-4" />
//           <p className="text-[#A1A1A1] text-sm leading-relaxed">
//             Where elegance meets modesty. Explore premium abayas, strollers, and
//             signature collections crafted for every occasion.
//           </p>
//         </div>

//         {/* Company Links */}
//         <div>
//           <h3 className="text-lg font-semibold mb-4 text-[#C9A227]">Company</h3>
//           <ul className="space-y-2 text-sm text-[#FAF9F6]/80">
//             <li className="cursor-pointer hover:text-[#C9A227]" onClick={() => footerAction("home")}>Home</li>
//             <li className="cursor-pointer hover:text-[#C9A227]" onClick={() => footerAction("about")}>About Us</li>
//             <li className="cursor-pointer hover:text-[#C9A227]" onClick={() => footerAction("return-policy")}>Return Policy</li>
//             <li className="cursor-pointer hover:text-[#C9A227]" onClick={() => footerAction("delivery")}>Delivery</li>
//             <li className="cursor-pointer hover:text-[#C9A227]" onClick={() => footerAction("privacy-policy")}>Privacy Policy</li>
//           </ul>
//         </div>

//         {/* Quick Links */}
//         <div>
//           <h3 className="text-lg font-semibold mb-4 text-[#C9A227]">Quick Links</h3>
//           <ul className="space-y-2 text-sm text-[#FAF9F6]/80">
//             <li className="cursor-pointer hover:text-[#C9A227]">Shop All</li>
//             <li className="cursor-pointer hover:text-[#C9A227]">New Arrivals</li>
//             <li className="cursor-pointer hover:text-[#C9A227]">Best Sellers</li>
//             <li className="cursor-pointer hover:text-[#C9A227]">Contact Us</li>
//           </ul>
//         </div>

//         {/* Contact Section */}
//         <div>
//           <h3 className="text-lg font-semibold mb-4 text-[#C9A227]">Get in Touch</h3>
//           <ul className="space-y-2 text-sm text-[#FAF9F6]/80">
//             <li>
//               <a href="tel:+923352778111" className="hover:text-[#C9A227]">
//                 +92 335 2778111
//               </a>
//             </li>
//             <li>
//               <a href="mailto:dasthakat@gmail.com" className="hover:text-[#C9A227]">
//                 dasthakat@gmail.com
//               </a>
//             </li>
//           </ul>

//           {/* Social Icons */}
//           <div className="flex gap-4 mt-4 text-[#FAF9F6]/70">
//             <a href="#" className="hover:text-[#C9A227]"><FaFacebookF /></a>
//             <a href="#" className="hover:text-[#C9A227]"><FaInstagram /></a>
//             <a href="#" className="hover:text-[#C9A227]"><FaTiktok /></a>
//           </div>
//         </div>
//       </div>

//       {/* --- Bottom Copyright --- */}
//       <div className="border-t border-[#2C2C2C] pt-5 text-center text-xs sm:text-sm text-[#A1A1A1]">
//         © {new Date().getFullYear()} Dastakhat.com — All Rights Reserved.
//       </div>
//     </footer>
//   );
// };

// export default Footer;
