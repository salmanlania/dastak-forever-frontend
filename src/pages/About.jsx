import Title from '../components/Title'
import { useState } from 'react'

const FAQItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b py-2">
      <button
        onClick={() => setOpen(!open)}
        className="w-full !text-left flex justify-between items-center font-medium !text-gray-800"
      >
        {question}
        <span className="ml-2">{open ? '−' : '+'}</span>
      </button>
      {open && <p className="mt-2 !text-gray-700">{answer}</p>}
    </div>
  )
}

const About = () => {
  return (
    <section className="px-6 md:px-16 py-16 !bg-[#faf7f4] !text-gray-800 min-h-screen">

      <div className="max-w-5xl mx-auto space-y-12">

        {/* About / Storytelling */}
        <div>
          <div className='!text-3xl md:!text-4xl font-semibold !text-center !text-[#2C2420] mb-4'>
            <Title text1={'ABOUT'} text2={'US'} />
          </div>
          <p className='!text-gray-700 leading-relaxed mb-4'>
            Dasthakat was born from a passion to blend tradition with modern fashion.
            Founded in 2023 in Pakistan, our goal is to make high-quality, hand-stitched abayas and clothing accessible to women who value elegance, modesty, and comfort.
          </p>
          <p className='!text-gray-700 leading-relaxed mb-4'>
            Each product is carefully crafted with attention to detail, using premium fabrics sourced ethically. Our journey started with a simple vision:
            empower women to express their individuality while staying rooted in tradition.
          </p>
          <p className='!text-gray-700 leading-relaxed mb-4'>
            Over the years, Dasthakat has grown into a trusted brand, delivering bespoke designs, curated collections, and a seamless online shopping experience across Pakistan.
          </p>
          <p className='!text-gray-700 leading-relaxed'>
            Our story continues with a commitment to quality, transparency, and customer satisfaction—values that remain at the heart of everything we do.
          </p>
        </div>

        {/* Mission & Values */}
        <div>
          <div className='!text-2xl md:!text-3xl font-semibold !text-[#C19A6B] mb-4'>Our Mission & Values</div>
          <ul className='list-disc pl-5 space-y-2 !text-gray-700'>
            <li>Deliver high-quality, ethically sourced, and beautifully crafted products.</li>
            <li>Provide a seamless and secure online shopping experience.</li>
            <li>Prioritize customer satisfaction and transparency in all transactions.</li>
            <li>Support local artisans and promote sustainable fashion practices.</li>
            <li>Foster a community where tradition meets modern style.</li>
          </ul>
        </div>

        {/* Why Choose Us */}
        <div>
          <div className='!text-2xl md:!text-3xl font-semibold !text-[#C19A6B] mb-4'>Why Choose Us</div>
          <div className='grid md:grid-cols-3 gap-6'>
            <div className='border p-6 rounded-xl shadow-sm hover:shadow-md transition-all'>
              <b>Premium Quality</b>
              <p className='!text-gray-700 mt-2'>Every product is hand-stitched and carefully inspected to ensure the highest standard of craftsmanship.</p>
            </div>
            <div className='border p-6 rounded-xl shadow-sm hover:shadow-md transition-all'>
              <b>Hassle-Free Shopping</b>
              <p className='!text-gray-700 mt-2'>Our platform is easy to navigate, with secure checkout and multiple payment options.</p>
            </div>
            <div className='border p-6 rounded-xl shadow-sm hover:shadow-md transition-all'>
              <b>Size Accuracy</b>
              <p className='!text-gray-700 mt-2'>Detailed size charts and fit guidance help you choose the perfect size every time.</p>
            </div>
            <div className='border p-6 rounded-xl shadow-sm hover:shadow-md transition-all'>
              <b>Reliable Delivery</b>
              <p className='!text-gray-700 mt-2'>Fast and careful shipping ensures your order reaches you in perfect condition.</p>
            </div>
            <div className='border p-6 rounded-xl shadow-sm hover:shadow-md transition-all'>
              <b>Exceptional Support</b>
              <p className='!text-gray-700 mt-2'>Our customer service team is always available to assist you with any queries.</p>
            </div>
            <div className='border p-6 rounded-xl shadow-sm hover:shadow-md transition-all'>
              <b>Ethical & Sustainable</b>
              <p className='!text-gray-700 mt-2'>We collaborate with local artisans and use sustainable practices wherever possible.</p>
            </div>
          </div>
        </div>

        {/* Size Guide / Fit Chart */}
        <div>
          <div className='!text-2xl md:!text-3xl font-semibold !text-[#C19A6B] mb-4'>Size Guide / Fit Chart</div>
          <p className='!text-gray-700 mb-4'>Choose your size carefully. All measurements are in inches:</p>
          <div className='overflow-x-auto'>
            <table className='w-full border border-gray-300 !text-sm'>
              <thead className='!bg-[#F3EDE5]'>
                <tr>
                  <th className='border px-4 py-2'>Size</th>
                  <th className='border px-4 py-2'>Bust</th>
                  <th className='border px-4 py-2'>Waist</th>
                  <th className='border px-4 py-2'>Hip</th>
                  <th className='border px-4 py-2'>Length</th>
                </tr>
              </thead>
              <tbody>
                <tr className='!text-gray-700'>
                  <td className='border px-4 py-2'>S</td>
                  <td className='border px-4 py-2'>34</td>
                  <td className='border px-4 py-2'>28</td>
                  <td className='border px-4 py-2'>36</td>
                  <td className='border px-4 py-2'>52</td>
                </tr>
                <tr className='!text-gray-700'>
                  <td className='border px-4 py-2'>M</td>
                  <td className='border px-4 py-2'>36</td>
                  <td className='border px-4 py-2'>30</td>
                  <td className='border px-4 py-2'>38</td>
                  <td className='border px-4 py-2'>53</td>
                </tr>
                <tr className='!text-gray-700'>
                  <td className='border px-4 py-2'>L</td>
                  <td className='border px-4 py-2'>38</td>
                  <td className='border px-4 py-2'>32</td>
                  <td className='border px-4 py-2'>40</td>
                  <td className='border px-4 py-2'>54</td>
                </tr>
                <tr className='!text-gray-700'>
                  <td className='border px-4 py-2'>XL</td>
                  <td className='border px-4 py-2'>40</td>
                  <td className='border px-4 py-2'>34</td>
                  <td className='border px-4 py-2'>42</td>
                  <td className='border px-4 py-2'>55</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQs */}
        <div>
          <div className='!text-2xl md:!text-3xl font-semibold !text-[#C19A6B] mb-4'>Frequently Asked Questions</div>
          <div className='space-y-2'>
            <div className='space-y-2'>
              <FAQItem
                question="1. What payment methods do you accept?"
                answer="We accept all major debit/credit cards, online bank transfers, and cash on delivery (COD)."
              />
              <FAQItem
                question="2. How long does delivery take?"
                answer="Delivery within Karachi takes 2-4 business days, other cities 3-7 business days."
              />
              <FAQItem
                question="3. Can I return or exchange my order?"
                answer="We have a strict No Return / No Exchange policy due to customized and made-to-order products. Damaged items can be reported within 24 hours."
              />
              <FAQItem
                question="4. Do you offer custom orders?"
                answer="Yes, you can request custom designs. Please contact our support team for inquiries."
              />
              <FAQItem
                question="5. How can I track my order?"
                answer="After dispatch, you’ll receive a tracking number via email or WhatsApp to monitor your shipment."
              />
              <FAQItem
                question="6. Who can I contact for support?"
                answer="Reach out to support@dasthakat.com or call +92 335 2778111."
              />
            </div>
          </div>

          {/* Quick Info / Trust */}
          <div className='grid md:grid-cols-4 gap-6 !text-gray-700'>
            <div className='border p-4 rounded-xl !text-center'>
              <b>Secure Payments</b>
              <p className='!text-sm'>All transactions are encrypted and secure.</p>
            </div>
            <div className='border p-4 rounded-xl !text-center'>
              <b>Fast Delivery</b>
              <p className='!text-sm'>Quick and reliable shipping across Pakistan.</p>
            </div>
            <div className='border p-4 rounded-xl !text-center'>
              <b>COD Available</b>
              <p className='!text-sm'>Cash on delivery supported for local orders.</p>
            </div>
            <div className='border p-4 rounded-xl !text-center'>
              <b>Customer Support</b>
              <p className='!text-sm'>Assistance anytime via email or phone.</p>
            </div>
          </div>

        </div>

        <p className="!text-center !text-gray-500 !text-sm mt-12">
          © {new Date().getFullYear()} Dasthakat. All Rights Reserved.
        </p>
      </div>
    </section>
  )
}

export default About