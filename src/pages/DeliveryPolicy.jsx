
const DeliveryPolicy = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#faf7f4] via-[#fff] to-[#f5efe9] text-gray-800 px-6 py-16">
      <div className="max-w-3xl w-full bg-white/60 backdrop-blur-md border border-[#e4d5c5] shadow-2xl rounded-3xl p-10 md:p-14 transition-all duration-300 hover:shadow-[#c6a988]/30 hover:shadow-2xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-semibold text-[#C19A6B] tracking-wide">
            Dasthakat Delivery Policy
          </h1>
          <p className="text-sm text-gray-500 mt-2">
            Effective from October 2025
          </p>
        </div>

        <div className="space-y-8 text-gray-700 leading-relaxed">
          <div>
            <h2 className="text-2xl font-semibold text-[#C19A6B] mb-2">
              Delivery Overview
            </h2>
            <p>
              At <strong>Dasthakat</strong>, we take pride in delivering your abayas with
              care and precision. Every order is tailored to perfection before
              dispatch, reflecting the elegance and quality of our brand.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-[#C19A6B] mb-2">
              Order Processing Time
            </h3>
            <p>
              All orders are processed within <strong>2 to 4 business days</strong> after
              payment confirmation. During high-demand periods, processing may take
              slightly longer, but our priority is always prompt delivery.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-[#C19A6B] mb-2">
              Delivery Timeframe
            </h3>
            <ul className="list-disc list-inside space-y-1">
              <li>
                <strong>Karachi:</strong> 2 – 4 business days after dispatch.
              </li>
              <li>
                <strong>Other Cities in Pakistan:</strong> 3 – 7 business days.
              </li>
              <li>
                <strong>International Orders:</strong> Coming soon.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-[#C19A6B] mb-2">
              Shipping Charges
            </h3>
            <p>
              We offer <strong>free delivery</strong> on orders above PKR 15,000. Orders
              below this amount incur a minimal delivery fee of PKR 350–450,
              depending on location.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-[#C19A6B] mb-2">
              Order Tracking
            </h3>
            <p>
              Once your order is dispatched, you’ll receive an email or WhatsApp
              message containing your tracking number. You can use it to monitor
              your shipment in real-time.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-[#C19A6B] mb-2">
              Address Accuracy
            </h3>
            <p>
              Please ensure your shipping details are correct before placing your
              order. Dasthakat is not responsible for delays or failed deliveries
              caused by incorrect address information.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-[#C19A6B] mb-2">
              Need Help?
            </h3>
            <p>
              For delivery-related inquiries, contact us at{" "}
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

        <div className="mt-12 text-center border-t border-[#e5d6c7] pt-6">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Dasthakat. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DeliveryPolicy;