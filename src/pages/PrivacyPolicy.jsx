import React from "react";

const PrivacyPolicy = () => {
  return (
    <section className="min-h-screen bg-white text-gray-800 flex items-center justify-center px-6 py-20">
      <div className="max-w-3xl w-full">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-semibold text-center text-black mb-4 tracking-wide">
          Dasthakat Privacy Policy
        </h1>
        <p className="text-center text-sm text-gray-500 mb-12">
          Effective from October 2025
        </p>

        {/* Policy Box */}
        <div className="bg-[#fdfdfd] rounded-2xl shadow-md p-6 md:p-10 space-y-8 border border-gray-200">
          {/* Introduction */}
          <div>
            <h2 className="text-2xl font-semibold text-[#C19A6B] mb-2">
              Introduction
            </h2>
            <p className="text-gray-700 leading-relaxed">
              At <strong>Dasthakat</strong>, we value your privacy and are committed to
              protecting your personal information. This Privacy Policy explains
              how we collect, use, and protect your data when you visit our
              website or make a purchase.
            </p>
          </div>

          {/* Information Collection */}
          <div>
            <h3 className="text-xl font-semibold text-[#C19A6B] mb-2">
              Information We Collect
            </h3>
            <p className="text-gray-700 leading-relaxed">
              We collect personal details you provide such as your name, email,
              phone number, shipping address, and payment information. We may
              also collect data automatically through cookies and analytics tools
              to improve your experience on our site.
            </p>
          </div>

          {/* Usage of Information */}
          <div>
            <h3 className="text-xl font-semibold text-[#C19A6B] mb-2">
              How We Use Your Information
            </h3>
            <p className="text-gray-700 leading-relaxed">
              We use your information to process orders, provide customer support,
              improve our products, and send updates or promotions (only if you’ve
              opted in). We never sell or share your data with third parties for
              marketing purposes.
            </p>
          </div>

          {/* Data Protection */}
          <div>
            <h3 className="text-xl font-semibold text-[#C19A6B] mb-2">
              Data Security
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Your data is stored securely and protected using modern encryption
              and authentication techniques. Only authorized personnel have access
              to your information to ensure your privacy.
            </p>
          </div>

          {/* Cookies */}
          <div>
            <h3 className="text-xl font-semibold text-[#C19A6B] mb-2">
              Cookies & Tracking
            </h3>
            <p className="text-gray-700 leading-relaxed">
              We use cookies to enhance user experience, analyze traffic, and
              improve site performance. You can disable cookies in your browser
              settings if you prefer not to share this data.
            </p>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-xl font-semibold text-[#C19A6B] mb-2">
              Contact Us
            </h3>
            <p className="text-gray-700 leading-relaxed">
              If you have any questions about our Privacy Policy, please contact
              us at{" "}
              <a
                href="mailto:support@dasthakat.com"
                className="text-[#C19A6B] underline hover:text-[#a17d55] transition-colors"
              >
                support@dasthakat.com
              </a>
            </p>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-gray-500 text-sm mt-10">
          © {new Date().getFullYear()} Dasthakat. All Rights Reserved.
        </p>
      </div>
    </section>
  );
};

export default PrivacyPolicy;