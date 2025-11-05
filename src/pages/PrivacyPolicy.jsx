
const PrivacyPolicy = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#faf7f4] via-[#fff] to-[#f5efe9] text-gray-800 px-6 py-16">
      <div className="absolute inset-0 bg-white/90 backdrop-blur-sm"></div>

      <div className="relative max-w-3xl w-full z-10">
        <h1 className="text-3xl md:text-4xl font-semibold text-center text-black mb-4 tracking-wide">
          Dasthakat Privacy Policy
        </h1>
        <p className="text-center text-sm text-gray-500 mb-12">
          Effective from October 2025
        </p>

        <div className="bg-[#fefcfb] rounded-2xl shadow-lg p-6 md:p-10 space-y-8 border border-gray-200 transition-all duration-300 hover:shadow-xl">
          <div>
            <h2 className="text-2xl font-semibold text-[#C19A6B] mb-2">
              Introduction
            </h2>
            <p className="text-gray-700 leading-relaxed">
              At <strong>Dasthakat</strong>, we value your privacy and are committed to
              protecting your personal information. This Privacy Policy explains
              how we collect, use, and safeguard your data when you visit our
              website or make a purchase.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-[#C19A6B] mb-2">
              Information We Collect
            </h3>
            <p className="text-gray-700 leading-relaxed">
              We collect personal details you provide, such as your name, email,
              phone number, shipping address, and payment information. We may
              also use cookies and analytics tools to improve your shopping
              experience and our website performance.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-[#C19A6B] mb-2">
              How We Use Your Information
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Your information helps us process orders, provide customer support,
              enhance our collections, and share updates or offers (only with your
              consent). We never sell or share your data for marketing purposes.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-[#C19A6B] mb-2">
              Data Security
            </h3>
            <p className="text-gray-700 leading-relaxed">
              We use modern encryption and authentication measures to protect your
              data. Access is limited to authorized personnel only, ensuring your
              personal information remains confidential and secure.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-[#C19A6B] mb-2">
              Cookies & Tracking
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Our site uses cookies to personalize your experience and analyze site
              traffic. You may disable cookies anytime in your browser settings,
              though some site functions may be limited.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-[#C19A6B] mb-2">
              Contact Us
            </h3>
            <p className="text-gray-700 leading-relaxed">
              For any questions or concerns regarding this policy, please reach out
              to us at{" "}
              <a
                href="mailto:support@dasthakat.com"
                className="text-[#C19A6B] underline hover:text-[#a17d55] transition-colors"
              >
                support@dasthakat.com
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

export default PrivacyPolicy;