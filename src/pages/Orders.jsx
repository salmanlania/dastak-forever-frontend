import React from "react";
import Title from "../components/Title";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Orders = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const products = useSelector((state) => state.product.items);
  const currency = "Rs.";
  const navigate = useNavigate();

  const orderList = [];

  for (const id in cartItems) {
    for (const size in cartItems[id]) {
      if (cartItems[id][size] > 0) {
        const product = products.find((p) => p._id === id);
        if (product) {
          orderList.push({
            ...product,
            size,
            quantity: cartItems[id][size],
          });
        }
      }
    }
  }

  return (
    <section className="border-t pt-16 pb-20 px-6 sm:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="!!text-center mb-10">
          <Title text1="MY" text2="ORDERS" />
        </div>

        {orderList.length === 0 && (
          <div className="!text-center !text-gray-500 mt-10">
            <p className="mb-4 !text-sm">You have no orders yet.</p>
            <button
              onClick={() => navigate("/")}
              className="!bg-[#C9A227] !text-white !text-sm px-5 py-2 rounded-lg hover:!bg-[#B5835A] transition-all duration-300"
            >
              Continue Shopping
            </button>
          </div>
        )}

        {orderList.map((item, index) => (
          <div
            key={index}
            role="listitem"
            className="!bg-white border border-gray-200 rounded-xl p-6 mb-6 shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <div className="flex items-center justify-between mb-4">
              <p className="!text-sm font-medium !text-gray-500">
                Order #{index + 1}
              </p>
              <span className="!text-[11px] !bg-[#F3EDE5] !text-[#A57A57] px-3 py-1 rounded-full tracking-wide font-medium">
                Processing
              </span>
            </div>

            <div className="flex gap-4">
              <img
                src={item.image[0]}
                alt={item.name}
                className="w-16 h-20 object-cover rounded-lg border"
              />
              <div className="flex flex-col justify-between">
                <div>
                  <p className="font-semibold !text-gray-800 !text-[15px]">
                    {item.name}
                  </p>
                  <p className="!text-sm !text-gray-600 mt-1">
                    {currency} {item.price}
                  </p>
                </div>
                <div className="!text-[13px] !text-gray-500 mt-2">
                  Qty:{" "}
                  <span className="!text-gray-700 font-medium">
                    {item.quantity}
                  </span>
                  &nbsp;|&nbsp; Size:{" "}
                  <span className="!text-gray-700 font-medium">
                    {item.size}
                  </span>
                </div>
              </div>
            </div>

            <div className="border-t my-4" />

            <div className="flex justify-between items-center">
              <p className="!text-xs !text-gray-500">
                Ordered on:{" "}
                <span className="font-medium !text-gray-700">
                  {new Date().toDateString()}
                </span>
              </p>

              <button
                onClick={() => navigate(`/orders/${item._id}/${item.size}`)}
                className="!bg-[#C9A227] !text-white !text-xs border border-gray-300 px-4 py-2 rounded-lg hover:!bg-[#B5835A] transition-all duration-300"
              >
                View Details
              </button>
            </div>

            <div className="mt-4">
              <div className="flex justify-between !text-[11px] !text-gray-500 mb-1">
                <span>Placed</span>
                <span>Shipped</span>
                <span>Out for Delivery</span>
                <span>Delivered</span>
              </div>

              <div className="w-full h-[4px] !bg-gray-200 rounded-full">
                <div className="h-full w-1/3 !bg-[#A57A57] rounded-full"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Orders;