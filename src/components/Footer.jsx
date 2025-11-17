import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const Footer = () => {
  const navigate = useNavigate();

  const footerAction = (path) => {
    if (path === "home") navigate("/");
    else if (path === "about") navigate("/about");
    else if (path === "return-policy") navigate("/return-policy");
    else if (path === "privacy-policy") navigate("/privacy-policy");
    else if (path === "delivery") navigate("/delivery-policy");
  };

  return (
    <footer className="bg-[#111] text-[#e9e9e9] border-t border-[#2A2A2A]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <img src={assets.logo} alt="Dastakhat" className="w-36 mb-5" />
            <p className="text-sm leading-relaxed text-[#B3B3B3]">
              Dastakhat blends tradition and elegance, offering a timeless
              collection of Abayas, Chadors, and modest wear designed for the
              modern woman.
            </p>
          </div>

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
                  href="mailto:info@dasthakat.com"
                  className="hover:text-[#C9A227]"
                >
                  info@dasthakat.com
                </a>
              </li>
            </ul>

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

        <div className="mt-10 border-t border-[#2C2C2C] pt-6 text-center text-xs text-[#777] tracking-wide">
          © {new Date().getFullYear()} Dastakhat — All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;