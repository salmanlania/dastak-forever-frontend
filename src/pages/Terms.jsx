const TermsAndConditions = () => {
  return (
    <div className="!bg-[#faf8f6] border-t py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="!bg-white border border-gray-100 shadow-sm rounded-2xl p-8">
          <h1 className="!text-2xl md:!text-3xl font-semibold !text-[#2C2420] mb-2 tracking-wide">
            Terms & Conditions
          </h1>
          <p className="!text-sm !text-gray-500 mb-8">Effective from October 2025</p>

          <div className="space-y-8 !text-[15px] leading-relaxed !text-[#3D3D3D]">
            <div>
              <h2 className="!text-xl font-semibold !text-[#C4A484] mb-2">
                Introduction
              </h2>
              <p>
                Welcome to <strong>Dasthakat</strong>. By accessing our website and placing an order, 
                you agree to comply with our terms and conditions. Please read these carefully before making a purchase.
              </p>
            </div>

            <div>
              <h2 className="!text-xl font-semibold !text-[#C4A484] mb-2">
                Orders and Payment
              </h2>
              <p>
                All orders must be placed through our official website. Payments are processed securely via approved payment gateways. 
                Dasthakat reserves the right to cancel any order in case of payment failure or discrepancies.
              </p>
            </div>

            <div>
              <h2 className="!text-xl font-semibold !text-[#C4A484] mb-2">
                No Return & Exchange
              </h2>
              <p>
                All abayas are made-to-order and customized. As such, we maintain a strict 
                <strong> No Return, No Exchange</strong> policy. Please verify your selections carefully before confirming your order.
              </p>
            </div>

            <div>
              <h2 className="!text-xl font-semibold !text-[#C4A484] mb-2">
                Delivery
              </h2>
              <p>
                Orders are processed within 2–4 business days and delivered according to our Delivery Policy. 
                Dasthakat is not responsible for delays due to incorrect addresses or unforeseen circumstances.
              </p>
            </div>

            <div>
              <h2 className="!text-xl font-semibold !text-[#C4A484] mb-2">
                Intellectual Property
              </h2>
              <p>
                All content on this website, including images, designs, and !text, is the property of Dasthakat and protected under copyright laws. 
                Unauthorized use is strictly prohibited.
              </p>
            </div>

            <div>
              <h2 className="!text-xl font-semibold !text-[#C4A484] mb-2">
                Limitation of Liability
              </h2>
              <p>
                Dasthakat is not liable for any indirect, incidental, or consequential damages arising from the use of our website or products. 
                Our liability is limited to the value of the purchased product(s).
              </p>
            </div>

            <div>
              <h2 className="!text-xl font-semibold !text-[#C4A484] mb-2">
                Contact Us
              </h2>
              <p>
                For any questions regarding these terms, please reach out to us at{" "}
                <a
                  href="mailto:support@dasthakat.com"
                  className="!text-[#C4A484] underline hover:!text-[#B5835A] transition-colors"
                >
                  support@dasthakat.com
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

export default TermsAndConditions;