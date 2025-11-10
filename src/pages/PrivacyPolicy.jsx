const PrivacyPolicy = () => {
  return (
    <div className="!bg-[#faf8f6] border-t py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="!bg-white border border-gray-100 shadow-sm rounded-2xl p-8">
          <h1 className="!text-2xl md:!text-3xl font-semibold !text-[#2C2420] mb-2 tracking-wide">
            Privacy Policy
          </h1>
          <p className="!text-sm !text-gray-500 mb-8">Effective October 2025</p>

          <div className="space-y-8 !text-[15px] leading-relaxed !text-[#3D3D3D]">
            <div>
              <h2 className="!text-xl font-semibold !text-[#C4A484] mb-2">
                Introduction
              </h2>
              <p>
                At <strong>Dasthakat</strong>, we respect your privacy and are committed to
                protecting your personal information. This policy explains how we
                collect, use, and secure your data when you interact with our website
                or place an order.
              </p>
            </div>

            <div>
              <h2 className="!text-xl font-semibold !text-[#C4A484] mb-2">
                Information We Collect
              </h2>
              <p>
                We collect details such as your name, email, phone number, address,
                and payment information to fulfill orders. We may also use cookies
                and analytics tools to enhance your experience and site performance.
              </p>
            </div>

            <div>
              <h2 className="!text-xl font-semibold !text-[#C4A484] mb-2">
                How We Use Your Information
              </h2>
              <p>
                Your data is used to process orders, improve customer service, and
                inform you of updates or offers (only with your consent). We do not
                sell or share your personal information for third-party marketing.
              </p>
            </div>

            <div>
              <h2 className="!text-xl font-semibold !text-[#C4A484] mb-2">
                Data Security
              </h2>
              <p>
                We employ secure encryption and restricted access protocols to
                protect your personal data. Only authorized personnel can access your
                information to ensure confidentiality and safety.
              </p>
            </div>

            <div>
              <h2 className="!text-xl font-semibold !text-[#C4A484] mb-2">
                Cookies & Tracking
              </h2>
              <p>
                Cookies help us provide a more personalized browsing experience and
                measure site usage. You may disable cookies in your browser settings,
                though this may affect site functionality.
              </p>
            </div>

            <div>
              <h2 className="!text-xl font-semibold !text-[#C4A484] mb-2">
                Contact Us
              </h2>
              <p>
                For questions or concerns, please email us at{" "}
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

export default PrivacyPolicy;
