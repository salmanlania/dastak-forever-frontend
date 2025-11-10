const DeliveryPolicy = () => {
  return (
    <div className="!bg-[#faf8f6] border-t py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="!bg-white border border-gray-100 shadow-sm rounded-2xl p-8">
          <h1 className="!text-2xl md:!text-3xl font-semibold !text-[#2C2420] mb-2 tracking-wide">
            Delivery Policy
          </h1>
          <p className="!text-sm !text-gray-500 mb-8">Effective October 2025</p>

          <div className="space-y-8 !text-[15px] leading-relaxed !text-[#3D3D3D]">
            <div>
              <h2 className="!text-xl font-semibold !text-[#C4A484] mb-2">
                Delivery Overview
              </h2>
              <p>
                At <strong>Dasthakat</strong>, each abaya is crafted with care and precision.
                Our delivery process ensures your order reaches you safely and on time,
                reflecting the same quality and elegance that defines our brand.
              </p>
            </div>

            <div>
              <h2 className="!text-xl font-semibold !text-[#C4A484] mb-2">
                Order Processing Time
              </h2>
              <p>
                Orders are processed within <strong>2 to 4 business days</strong> after
                payment confirmation. During peak periods, processing may take slightly
                longer, but we always strive to dispatch your order as soon as possible.
              </p>
            </div>

            <div>
              <h2 className="!text-xl font-semibold !text-[#C4A484] mb-2">
                Delivery Timeframe
              </h2>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>Karachi:</strong> 2 – 4 business days after dispatch.</li>
                <li><strong>Other Cities (Pakistan):</strong> 3 – 7 business days.</li>
                <li><strong>International Orders:</strong> Coming soon.</li>
              </ul>
            </div>

            <div>
              <h2 className="!text-xl font-semibold !text-[#C4A484] mb-2">
                Shipping Charges
              </h2>
              <p>
                We offer <strong>free delivery</strong> on orders above PKR 15,000.
                Orders below this amount will include a minimal delivery fee of
                PKR 350–450, depending on your location.
              </p>
            </div>

            <div>
              <h2 className="!text-xl font-semibold !text-[#C4A484] mb-2">
                Order Tracking
              </h2>
              <p>
                Once your order is shipped, you will receive a tracking number via
                email or WhatsApp. You can use this to monitor your delivery status
                in real time.
              </p>
            </div>

            <div>
              <h2 className="!text-xl font-semibold !text-[#C4A484] mb-2">
                Address Accuracy
              </h2>
              <p>
                Please ensure that your shipping details are accurate before placing
                your order. Dasthakat is not responsible for delays or undelivered
                packages resulting from incorrect or incomplete addresses.
              </p>
            </div>

            <div>
              <h2 className="!text-xl font-semibold !text-[#C4A484] mb-2">
                Need Help?
              </h2>
              <p>
                For delivery-related inquiries, contact us at{" "}
                <a
                  href="mailto:support@dasthakat.com"
                  className="!text-[#C4A484] underline hover:!text-[#B5835A] transition-colors"
                >
                  support@dasthakat.com
                </a>{" "}
                or call{" "}
                <a
                  href="tel:+923352778111"
                  className="!text-[#C4A484] underline hover:!text-[#B5835A] transition-colors"
                >
                  +92 335 2778111
                </a>.
              </p>
            </div>
          </div>
        </div>

        <p className="!text-center !text-gray-400 !text-sm mt-10">
          © {new Date().getFullYear()} Dasthakat. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default DeliveryPolicy;
