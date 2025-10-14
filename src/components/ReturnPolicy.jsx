import React from "react";

const ReturnPolicy = () => {
  return (
    <section className="min-h-screen bg-white text-gray-800 flex items-center justify-center px-6 py-12">
      <div className="max-w-3xl w-full">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-semibold text-center text-black mb-6 tracking-wide">
          Dasthakat Return Policy
        </h1>
        <p className="text-center text-sm text-gray-500 mb-10">
          Effective from October 2025
        </p>

        {/* Policy Box */}
        <div className="bg-[#f9f9f9] rounded-2xl shadow-sm p-6 md:p-10 space-y-6 border border-gray-200">
          <h2 className="text-2xl font-medium text-[#C19A6B]">
            No Return Policy
          </h2>
          <p className="text-gray-700 leading-relaxed">
            At <strong>Dasthakat</strong>, every abaya is stitched with precision and
            care. Since each product is customized and made-to-order, we maintain
            a strict <strong>No Return, No Exchange</strong> policy.
          </p>

          {/* Order Accuracy */}
          <div>
            <h3 className="text-xl font-medium text-[#C19A6B] mb-2">
              Order Accuracy
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Please double-check your size, color, and fabric preferences before
              confirming your order. Once an order is placed, it cannot be modified
              or canceled.
            </p>
          </div>

          {/* Damaged Items */}
          <div>
            <h3 className="text-xl font-medium text-[#C19A6B] mb-2">
              Damaged or Defective Items
            </h3>
            <p className="text-gray-700 leading-relaxed">
              In the rare case that you receive a damaged item, please contact us
              within <strong>24 hours</strong> of delivery at{" "}
              <a
                href="mailto:support@dasthakat.com"
                className="text-[#C19A6B] underline hover:text-[#a17d55] transition-colors"
              >
                support@dasthakat.com
              </a>
              . Our team will review your case and guide you through the next steps.
            </p>
          </div>

          {/* Customer Commitment */}
          <div>
            <h3 className="text-xl font-medium text-[#C19A6B] mb-2">
              Customer Commitment
            </h3>
            <p className="text-gray-700 leading-relaxed">
              We take pride in the quality and craftsmanship of our abayas. Each
              design reflects elegance, modesty, and comfort — handmade for you by
              <strong> Dasthakat</strong>.
            </p>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-gray-500 text-sm mt-10">
          © {new Date().getFullYear()} Dasthakat. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default ReturnPolicy;