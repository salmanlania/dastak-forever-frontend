import { useEffect, useState } from 'react';
import { HiArrowLeft } from 'react-icons/hi';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from 'react-router-dom';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { addToCart } from "../store/cartSlice";
import { toast } from "react-toastify";

const Product = () => {
  const { productId } = useParams();
  const products = useSelector((state) => state.product.items || []);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { scrollY } = useScroll();

  const [showStickyBar, setShowStickyBar] = useState(false);
  const [productData, setProductData] = useState(null);
  const [size, setSize] = useState('');
  const [image, setImage] = useState('');
  const [startIndex, setStartIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const currency = "Rs.";

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 500) setShowStickyBar(true);
    else setShowStickyBar(false);
  });

  useEffect(() => {
    const product = products.find((item) => item._id === productId);
    if (product) {
      setProductData(product);
      setImage(product.image[0]);
      setTimeout(() => setLoading(false), 600);
    }
  }, [products, productId]);

  const handleNext = () => {
    if (startIndex + 4 < productData.image.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const handleAddToCart = () => {
    if (!size) {
      toast.success('Please select a size');
      return;
    }
    dispatch(addToCart({ id: productData._id, size, quantity: 1 }));
  };

  if (loading || !productData) {
    return (
      <div className="animate-pulse p-6 space-y-6">
        <div className="h-8 w-32 !bg-gray-200 rounded"></div>
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="flex-1 space-y-4">
            <div className="w-full h-[500px] !bg-gray-200 rounded"></div>
            <div className="flex gap-2 justify-center">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="w-24 h-24 !bg-gray-200 rounded"></div>
              ))}
            </div>
          </div>
          <div className="flex-1 space-y-4">
            <div className="h-8 w-1/2 !bg-gray-200 rounded"></div>
            <div className="h-6 w-1/4 !bg-gray-200 rounded"></div>
            <div className="h-20 w-full !bg-gray-200 rounded"></div>
            <div className="h-10 w-32 !bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="border-t pt-10 pb-24 md:pb-10">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 flex items-center gap-1 !text-gray-700 hover:!text-black sticky top-2 !bg-white/80 backdrop-blur-md border px-3 py-2 rounded-full shadow-sm z-10"
      >
        <HiArrowLeft className="!text-lg" /> Back
      </button>

      <div className="flex flex-col lg:flex-row gap-12">
        <div className="flex-1 flex flex-col items-center">
          <div className="w-full max-w-[600px] border rounded-lg overflow-hidden !bg-gray-50">
            <img
              src={image}
              alt={productData.name}
              className="w-full h-[500px] object-fill transition-all"
            />
          </div>

          <div className="relative mt-4 w-full max-w-[600px]">
            <button
              onClick={handlePrev}
              disabled={startIndex === 0}
              className={`absolute left-0 top-1/2 -translate-y-1/2 border rounded-full p-1 shadow-md transition ${startIndex === 0
                ? 'opacity-30 cursor-not-allowed'
                : 'hover:!bg-gray-100 !bg-white'
                }`}
            >
              <IoChevronBack className="!text-lg" />
            </button>

            <div className="flex overflow-hidden justify-center gap-3 px-8">
              {productData.image
                .slice(startIndex, startIndex + 4)
                .map((item, index) => (
                  <img
                    key={index}
                    onClick={() => setImage(item)}
                    src={item}
                    alt=""
                    className={`w-24 h-24 object-cover rounded-md cursor-pointer border ${image === item
                      ? 'border-black'
                      : 'border-gray-200 hover:border-black'
                      } transition-all`}
                  />
                ))}
            </div>

            <button
              onClick={handleNext}
              disabled={startIndex + 4 >= productData.image.length}
              className={`absolute right-0 top-1/2 -translate-y-1/2 border rounded-full p-1 shadow-md transition ${startIndex + 4 >= productData.image.length
                ? 'opacity-30 cursor-not-allowed'
                : 'hover:!bg-gray-100 !bg-white'
                }`}
            >
              <IoChevronForward className="!text-lg" />
            </button>
          </div>
        </div>

        <div className="flex-1">
          <h1 className="font-semibold !text-3xl mb-3">{productData.name}</h1>

          <div className="flex items-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <img
                key={i}
                src={i < 4 ? assets.star_icon : assets.star_dull_icon}
                alt="star"
                className="w-4"
              />
            ))}
            <p className="!text-gray-500 ml-2 !text-sm">(122 Reviews)</p>
          </div>

          <p className="!text-3xl font-semibold !text-gray-800 mb-5">
            {currency}
            {productData.price}
          </p>

          <p className="!text-gray-600 mb-6 leading-relaxed max-w-lg md:max-w-none">
            {productData.shortDesc || "A beautifully designed abaya for all occasions."}
          </p>

          <div className="my-6">
            <p className="font-medium mb-2">Select Size</p>
            {productData.sizes?.length > 0 ? (
              <div className="flex gap-2 flex-wrap">
                {productData.sizes.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => setSize(item)}
                    className={`border py-2 px-4 rounded-md ${size === item
                      ? 'border-black !bg-black !text-white'
                      : '!bg-gray-100 hover:!bg-gray-200'
                      }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            ) : (
              <p className="!text-gray-500 !text-sm">Currently out of stock</p>
            )}
          </div>

          <button
            onClick={handleAddToCart}
            className="hidden md:inline-block !bg-[#C9A227] !text-white px-6 py-2 font-semibold tracking-wide hover:!bg-[#B5835A] transition-all duration-300"
          >
            Add to Cart
          </button>

          {/* <div className="fixed bottom-0 left-0 right-0 !bg-white border-t border-gray-200 shadow-md md:hidden z-50">
            <div className="flex justify-between items-center px-4 py-3">
              <div>
                <p className="font-semibold !text-gray-800">{currency}{productData.price}</p>
                <p className="!text-xs !text-gray-500">{productData.name}</p>
              </div>
              <button
                onClick={handleAddToCart}
                className="!bg-[#C9A227] !text-white px-6 py-2 rounded-md font-semibold hover:!bg-[#B5835A] transition-all duration-300"
              >
                Add to Cart
              </button>
            </div>
          </div> */}

          <AnimatePresence>
            {showStickyBar && (
              <motion.div
                key="mobile-addtocart"
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "100%", opacity: 0 }}
                transition={{ type: "spring", stiffness: 120, damping: 18 }}
                className="fixed bottom-0 left-0 right-0 !bg-white border-t border-gray-200 shadow-lg md:hidden z-50"
              >
                <div className="flex justify-between items-center px-4 py-3">
                  <div>
                    <p className="font-semibold !text-gray-800">{currency}{productData.price}</p>
                    <p className="!text-xs !text-gray-500 truncate max-w-[160px]">{productData.name}</p>
                  </div>
                  <button
                    onClick={handleAddToCart}
                    className="!bg-[#C9A227] !text-white px-6 py-2 rounded-md font-semibold hover:!bg-[#B5835A] transition-all duration-300"
                  >
                    Add to Cart
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <hr className="my-8 w-4/5" />

          <ul className="!text-sm !text-gray-600 space-y-1">
            <li>✅ 100% Authentic product</li>
            <li>🚚 Cash on delivery available</li>
          </ul>
        </div>
      </div>

      <div className="mt-20">
        <div className="flex border-b">
          <b className="px-5 py-3 !text-sm border-t border-l border-r !bg-gray-100">
            Fabric & Care
          </b>
        </div>
        <div className="border p-6 !text-sm !text-gray-600 leading-relaxed">
          <ul className="list-disc pl-5 space-y-2">
            <li>Premium Nida or Chiffon Fabric</li>
            <li>Hand wash or gentle machine wash</li>
            <li>Do not bleach or tumble dry</li>
            <li>Iron at low temperature</li>
          </ul>
        </div>
      </div>

      <div className="mt-10">
        <div className="flex border-b">
          <b className="px-5 py-3 !text-sm border-t border-l border-r !bg-gray-100">
            Size & Fit
          </b>
        </div>
        <div className="border p-6 !text-sm !text-gray-600 leading-relaxed">
          <ul className="list-disc pl-5 space-y-2">
            <li>Relaxed fit suitable for modest wear</li>
            <li>Model height: 5'6" wearing size Medium</li>
            <li>Available in Small to 2XL sizes</li>
          </ul>
        </div>
      </div>

      <div className="mt-10">
        <div className="flex border-b">
          <b className="px-5 py-3 !text-sm border-t border-l border-r !bg-gray-100">
            Shipping & Returns
          </b>
        </div>
        <div className="border p-6 !text-sm !text-gray-600 leading-relaxed">
          <ul className="list-disc pl-5 space-y-2">
            <li>Free shipping on orders over Rs. 5,000</li>
            <li>Delivery within 3–5 working days nationwide</li>
            <li><strong>No return policy.</strong> Please review your order carefully before purchase.</li>
          </ul>
        </div>
      </div>

      <RelatedProducts
        category={productData.category}
        subCategory={productData.subCategory}
      />
    </div>
  );
};

export default Product;