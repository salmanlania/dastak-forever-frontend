import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {
  const reviews = [
    {
      name: "Ayesha Khan",
      city: "Karachi",
      review:
        "The abaya quality is beyond expectations! Fabric feels luxurious and stitching is top-notch. Loved the overall shopping experience.",
    },
    {
      name: "Hina Malik",
      city: "Lahore",
      review:
        "Dasthakat’s designs are elegant yet modern — I received so many compliments. Packaging and delivery were on point!",
    },
    {
      name: "Sana Fatima",
      city: "Islamabad",
      review:
        "Finally found a brand that understands modest fashion with true class. I’m definitely ordering again soon!",
    },
  ];

  return (
    <section className="!bg-white py-16 px-6 sm:px-12">
      <div className="max-w-6xl mx-auto !text-center">
        <h2 className="font-playfair !text-3xl sm:!text-4xl !text-[#1A1A1A] mb-3">
          What Our <span className="!text-[#C9A227]">Customers Say</span>
        </h2>
        <p className="!text-gray-600 !text-sm sm:!text-base max-w-2xl mx-auto mb-12">
          Real stories from women who’ve embraced elegance with Dasthakat.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((item, index) => (
            <div
              key={index}
              className="p-8 !bg-[#FAF9F6] rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center !text-center"
            >
              <FaQuoteLeft className="!text-[#C9A227] !text-2xl mb-4" />
              <p className="!text-gray-700 !text-sm sm:!text-base leading-relaxed mb-6">
                “{item.review}”
              </p>
              <div>
                <h4 className="font-semibold !text-[#1A1A1A] !text-base">
                  {item.name}
                </h4>
                <p className="!text-gray-500 !text-sm">{item.city}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;