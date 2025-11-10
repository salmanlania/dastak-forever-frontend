const ReturnPolicy = () => {
  return (
    <div className="!!bg-[#faf8f6] border-t py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="!!bg-white border border-gray-100 shadow-sm rounded-2xl p-8">
          <h1 className="!text-2xl md:!text-3xl font-semibold !text-[#2C2420] mb-2 tracking-wide">
            Return Policy
          </h1>
          <p className="!text-sm !text-gray-500 mb-8">Updated November 2025</p>

          <div className="space-y-8 !text-[15px] leading-relaxed !text-[#3D3D3D]">
            <div>
              <h2 className="!text-xl font-semibold !text-[#C4A484] mb-2">
                No Returns or Exchanges
              </h2>
              <p>
                Every <strong>Dasthakat</strong> abaya is individually handcrafted to order.
                Because each piece is made exclusively for you, we maintain a
                <strong> no return or exchange</strong> policy.
              </p>
            </div>

            <div>
              <h2 className="!text-xl font-semibold !text-[#C4A484] mb-2">
                Confirm Before You Order
              </h2>
              <p>
                Please ensure your selected size, color, and fabric are correct before checkout.
                Once an order is placed, it cannot be changed or canceled, as tailoring begins immediately.
              </p>
            </div>

            <div>
              <h2 className="!text-xl font-semibold !text-[#C4A484] mb-2">
                Damaged or Defective Items
              </h2>
              <p>
                If your item arrives damaged, contact us within <strong>24 hours</strong> of delivery at{" "}
                <a
                  href="mailto:support@dasthakat.com"
                  className="!text-[#C4A484] underline hover:!text-[#B5835A] transition-colors"
                >
                  support@dasthakat.com
                </a>.
                Our team will review and assist you promptly.
              </p>
            </div>

            <div>
              <h2 className="!text-xl font-semibold !text-[#C4A484] mb-2">
                Our Craft Promise
              </h2>
              <p>
                Each design at <strong>Dasthakat</strong> is created with precision, grace, and care.
                Our goal is timeless modest fashion made with integrity — crafted exclusively for you.
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

export default ReturnPolicy;