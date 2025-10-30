import React from "react";

const DeliveryPolicy = () => {
  return (
    <section className="min-h-screen bg-white text-gray-800 flex items-center justify-center px-6 py-20">
      <div className="max-w-3xl w-full">
        <h1 className="text-3xl md:text-4xl font-semibold text-center text-black mb-4 tracking-wide">
          Dasthakat Delivery Policy
        </h1>
        <p className="text-center text-sm text-gray-500 mb-12">
          Effective from October 2025
        </p>

        <div className="bg-[#fdfdfd] rounded-2xl shadow-md p-6 md:p-10 space-y-8 border border-gray-200">
          <div>
            <h2 className="text-2xl font-semibold text-[#C19A6B] mb-2">
              Delivery Overview
            </h2>
            <p className="text-gray-700 leading-relaxed">
              At <strong>Dasthakat</strong>, we take pride in delivering your abayas with
              care and commitment. Each order is stitched to perfection before
              being shipped, ensuring that every piece reflects the elegance and
              quality of our brand.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-[#C19A6B] mb-2">
              Order Processing Time
            </h3>
            <p className="text-gray-700 leading-relaxed">
              All orders are processed within <strong>2 to 4 business days</strong> after
              payment confirmation. During peak seasons or sales, processing time
              may extend slightly, but we always strive to deliver your order as
              soon as possible.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-[#C19A6B] mb-2">
              Delivery Timeframe
            </h3>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed">
              <li>
                <strong>Karachi:</strong> 2 to 4 business days after dispatch.
              </li>
              <li>
                <strong>Other Cities in Pakistan:</strong> 3 to 7 business days.
              </li>
              <li>
                <strong>International Orders:</strong> Currently not available, but
                coming soon.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-[#C19A6B] mb-2">
              Shipping Charges
            </h3>
            <p className="text-gray-700 leading-relaxed">
              We offer <strong>free delivery</strong> on orders above PKR 15,000. For orders
              below this amount, a minimal delivery fee of PKR 350-450 applies,
              depending on your location.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-[#C19A6B] mb-2">
              Order Tracking
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Once your order is dispatched, you will receive a confirmation email
              or WhatsApp message with a tracking number. You can use it to track
              your shipment in real-time.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-[#C19A6B] mb-2">
              Address Accuracy
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Please ensure that your shipping details are accurate. We are not
              responsible for delays or failed deliveries caused by incorrect
              address information.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-[#C19A6B] mb-2">
              Need Help?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              For any questions regarding your delivery, feel free to contact us at{" "}
              <a
                href="mailto:support@dasthakat.com"
                className="text-[#C19A6B] underline hover:text-[#a17d55] transition-colors"
              >
                support@dasthakat.com
              </a>{" "}
              or call{" "}
              <a
                href="tel:+923352778111"
                className="text-[#C19A6B] underline hover:text-[#a17d55] transition-colors"
              >
                +92 335 2778111
              </a>
              .
            </p>
          </div>
        </div>

        <p className="text-center text-gray-500 text-sm mt-10">
          © {new Date().getFullYear()} Dasthakat. All Rights Reserved.
        </p>
      </div>
    </section>
  );
};

export default DeliveryPolicy;