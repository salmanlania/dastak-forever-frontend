import React from "react";
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

const ViewOrderDetails = () => {
  const { id, size } = useParams();
  const navigate = useNavigate();

  const cartItems = useSelector((state) => state.cart.items);
  const products = useSelector((state) => state.product.items);

  const product = products.find((p) => p._id === id);
  const quantity = cartItems[id]?.[size] || 0;
  const currency = "Rs";

  if (!product) {
    return (
      <div className="!text-center py-20 !text-gray-600">
        Product not found.
      </div>
    );
  }

  return (
    <div className="min-h-screen !bg-[#F9F6F2] px-4 md:px-10 py-10">
      
      <div className="flex items-center gap-3 mb-6">
        <button
          className="border border-[#C4A484] !text-[#C4A484] p-2 rounded-full hover:!bg-[#C4A484] hover:!text-white transition"
          onClick={() => navigate(-1)}
        >
          <IoIosArrowBack size={20} />
        </button>
        <h2 className="!text-xl md:!text-2xl font-semibold !text-[#2C2420]">
          Order Details
        </h2>
      </div>

      <div className="!bg-white rounded-2xl shadow-sm border border-gray-200 p-6 md:p-10">

        <div className="flex flex-col md:flex-row gap-6">
          <img
            src={product?.image[0]}
            className="w-full md:w-72 h-80 object-cover rounded-xl border"
            alt={product?.name}
          />

          <div className="flex flex-col gap-3">
            <h2 className="!text-2xl font-medium !text-[#2C2420] tracking-wide">
              {product?.name}
            </h2>

            <p className="!text-gray-700">
              <span className="font-medium">Price:</span> {currency} {product?.price}
            </p>

            <p className="!text-gray-700">
              <span className="font-medium">Size:</span> {size}
            </p>

            <p className="!text-gray-700">
              <span className="font-medium">Quantity:</span> {quantity}
            </p>

            <p className="!text-gray-500 !text-sm">
              Ordered on: <span className="font-medium">{new Date().toDateString()}</span>
            </p>

            <span className="mt-2 inline-flex items-center gap-2 !bg-green-50 !text-green-600 font-medium px-4 py-1 rounded-full border border-green-200 !text-sm w-fit">
              <span className="w-2 h-2 !bg-green-500 rounded-full"></span>
              Ready to Ship
            </span>

            <div className="!text-lg font-semibold !text-[#2C2420] mt-4">
              Total: {currency} {product?.price * quantity}
            </div>
          </div>
        </div>

        <div className="flex gap-4 mt-8 w-1/2 ml-auto justify-end">
          {/* <button className="flex-1 border border-[#C4A484] !text-[#C4A484] py-3 rounded-full hover:!bg-[#C4A484] hover:!text-white transition">
            Track Order
          </button> */}
          <button onClick={()=>navigate('/contact')} className="w-1/2 flex-1 !bg-[#2C2420] !text-white py-3 rounded-full hover:!bg-black transition">
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewOrderDetails;
