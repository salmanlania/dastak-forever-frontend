import { FaShieldHalved, FaTruckFast, FaCircleCheck, FaHeadset, FaCreditCard } from "react-icons/fa6";
import { IoSparklesSharp } from "react-icons/io5";

const BrandAssurance = () => {
  const items = [
    {
      icon: <FaCircleCheck className="!text-[#C9A227] !text-3xl mb-2" />,
      title: "Premium Quality",
      desc: "Each piece is hand-checked for perfection.",
    },
    {
      icon: <IoSparklesSharp className="!text-[#C9A227] !text-3xl mb-2" />,
      title: "Modern & Modest",
      desc: "Designed for elegance without compromise.",
    },
    {
      icon: <FaTruckFast className="!text-[#C9A227] !text-3xl mb-2" />,
      title: "Fast Delivery",
      desc: "Swift & secure shipping all over Pakistan.",
    },
    {
      icon: <FaCreditCard className="!text-[#C9A227] !text-3xl mb-2" />,
      title: "Secure Payments",
      desc: "Your transactions are fully encrypted.",
    },
    {
      icon: <FaHeadset className="!text-[#C9A227] !text-3xl mb-2" />,
      title: "Dedicated Support",
      desc: "Our team is always here to assist you with any concerns.",
    },
    {
      icon: <FaShieldHalved className="!text-[#C9A227] !text-3xl mb-2" />,
      title: "Authenticity Guaranteed",
      desc: "Every product crafted under strict quality control.",
    },
  ];

  return (
    <section className="!bg-[#FAF9F6] py-6 sm:py-16 px-6 sm:px-12 border-t border-[#EAEAEA]">
      <div className="max-w-6xl mx-auto !text-center">
        <h2 className="!text-2xl sm:!text-3xl font-semibold mb-10 !text-[#1A1A1A]">
          Why Shop with Dasthakat
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center p-6 !bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300"
            >
              {item.icon}
              <h3 className="font-semibold !text-lg !text-[#1A1A1A] mt-2">
                {item.title}
              </h3>
              <p className="!text-sm !text-gray-600 mt-1">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandAssurance;