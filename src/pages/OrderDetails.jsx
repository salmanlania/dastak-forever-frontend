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
  const currency = "Rs.";

  if (!product) {
    return (
      <div className="!text-center py-20 !text-gray-600">
        Product not found.
      </div>
    );
  }

  return (
    <section className="min-h-screen !bg-[#F9F6F2] border-t py-12 px-6 sm:px-12">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <button
            onClick={() => navigate(-1)}
            className="border border-[#C4A484] !text-[#C4A484] p-2 rounded-full hover:!bg-[#C4A484] hover:!text-white transition"
          >
            <IoIosArrowBack size={20} />
          </button>
          <h2 className="!text-2xl font-semibold !text-[#2C2420]">
            Order Details
          </h2>
        </div>

        <div className="!bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sm:p-10">
          <div className="flex flex-col md:flex-row gap-8">
            <img
              src={product?.image[0]}
              alt={product?.name}
              className="w-full md:w-72 h-80 object-cover rounded-xl border"
            />

            <div className="flex flex-col gap-3">
              <h2 className="!text-2xl font-medium !text-[#2C2420] tracking-wide">
                {product?.name}
              </h2>

              <p className="!text-gray-700">
                <span className="font-medium">Price:</span> {currency}{" "}
                {product?.price}
              </p>

              <p className="!text-gray-700">
                <span className="font-medium">Size:</span> {size}
              </p>

              <p className="!text-gray-700">
                <span className="font-medium">Quantity:</span> {quantity}
              </p>

              <p className="!text-gray-500 !text-sm">
                Ordered on:{" "}
                <span className="font-medium">
                  {new Date().toDateString()}
                </span>
              </p>

              <span className="mt-2 inline-flex items-center gap-2 !bg-[#F3EDE5] !text-[#A57A57] font-medium px-4 py-1 rounded-full border border-[#E5D6C6] !text-sm w-fit">
                <span className="w-2 h-2 !bg-[#A57A57] rounded-full"></span>
                Processing
              </span>

              <div className="mt-4 !text-lg font-semibold !text-[#2C2420]">
                Total: {currency} {product?.price * quantity}
              </div>
            </div>
          </div>

          <div className="border-t mt-8 pt-6 flex flex-col sm:flex-row justify-end gap-4">
            <button
              onClick={() => navigate("/contact")}
              className="!bg-[#C9A227] !text-white !text-sm py-3 px-6 rounded-full hover:!bg-[#B5835A] transition-all duration-300"
            >
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ViewOrderDetails;
