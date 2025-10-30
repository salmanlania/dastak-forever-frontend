import { useEffect, useState } from 'react';
import { HiArrowLeft } from 'react-icons/hi';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from 'react-router-dom';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';
import { addToCart } from "../store/cartSlice";

const Product = () => {
  const { productId } = useParams();
  const products = useSelector((state) => state.product.items || []);
  const currency = "Rs."
  const dispatch = useDispatch();

  const [productData, setProductData] = useState(false);
  const [size, setSize] = useState('');
  const [image, setImage] = useState('');
  const [startIndex, setStartIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const product = products.find((item) => item._id === productId);
    if (product) {
      setProductData(product);
      setImage(product.image[0]);
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
      alert('Please select a size');
      return;
    }
    dispatch(addToCart({ id: productData._id, size, quantity: 1 }));
  };

  if (!productData) return <div className="opacity-0"></div>;

  return productData ? (
    <div className="border-t pt-10 transition-opacity duration-500 opacity-100">
      <button
        onClick={() => navigate('/products')}
        className="mb-4 flex items-center gap-1 !text-gray-700 hover:!text-black !bg-white shadow-sm border rounded-full px-3 py-2 transition-all duration-200 hover:shadow-md"
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
              className="absolute left-0 top-1/2 -translate-y-1/2 !bg-white border rounded-full p-1 shadow-md hover:!bg-gray-100"
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
              className="absolute right-0 top-1/2 -translate-y-1/2 !bg-white border rounded-full p-1 shadow-md hover:!bg-gray-100"
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

          <p className="!text-gray-600 mb-6 leading-relaxed md:w-4/5">
            {productData.shortDesc || "A beautifully designed abaya for all occasions."}
          </p>

          <div className="my-6">
            <p className="font-medium mb-2">Select Size</p>
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
          </div>

          <button
           onClick={handleAddToCart}
            className="!bg-black !text-white px-8 py-3 rounded-md !text-sm hover:!bg-gray-800 transition-all"
          >
            Add to Cart
          </button>

          <hr className="my-8 w-4/5" />

          <ul className="!text-sm !text-gray-600 space-y-1">
            <li>✅ 100% Original product</li>
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

      <RelatedProducts
        category={productData.category}
        subCategory={productData.subCategory}
      />
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;