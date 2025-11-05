const ReturnPolicy = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#faf7f4] via-[#fff] to-[#f5efe9] text-gray-800 px-6 py-10">
      <div className="max-w-3xl w-full bg-white/60 backdrop-blur-md border border-[#e4d5c5] shadow-2xl rounded-3xl p-10 md:p-14 transition-all duration-300 hover:shadow-[#c6a988]/30 hover:shadow-2xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-semibold text-[#C19A6B] tracking-wide">
            Dasthakat Return Policy
          </h1>
          <p className="text-sm text-gray-500 mt-2">
            Effective from October 2025
          </p>
        </div>

        <div className="space-y-8 text-gray-700 leading-relaxed">
          <div>
            <h2 className="text-2xl font-semibold text-[#C19A6B] mb-2">
              No Return Policy
            </h2>
            <p>
              At <strong>Dasthakat</strong>, every abaya is stitched with precision and
              care. Since each product is customized and made-to-order, we maintain
              a strict <strong>No Return, No Exchange</strong> policy.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-[#C19A6B] mb-2">
              Order Accuracy
            </h3>
            <p>
              Please double-check your size, color, and fabric preferences before
              confirming your order. Once an order is placed, it cannot be modified
              or canceled.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-[#C19A6B] mb-2">
              Damaged or Defective Items
            </h3>
            <p>
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

          <div>
            <h3 className="text-xl font-semibold text-[#C19A6B] mb-2">
              Customer Commitment
            </h3>
            <p>
              We take pride in the quality and craftsmanship of our abayas. Each
              design reflects elegance, modesty, and comfort — handmade for you by
              <strong> Dasthakat</strong>.
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

export default ReturnPolicy;