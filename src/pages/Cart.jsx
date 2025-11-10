import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Title from "../components/Title";
import CartTotal from "../components/CartTotal";
import { updateQuantity, removeItem } from "../store/cartSlice";
import { GiTrashCan } from "react-icons/gi";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items);
  const products = useSelector((state) => state.product.items);
  const currency = "Rs.";
  const [cartData, setCartData] = useState([]);

  useEffect(() => {

    if (!products.length) return;

    const tempData = [];
    for (const id in cartItems) {
      for (const size in cartItems[id]) {
        if (cartItems[id][size] > 0) {
          tempData.push({
            _id: id,
            size,
            quantity: cartItems[id][size],
          });
        }
      }
    }
    setCartData(tempData);
  }, [cartItems, products]);

  const handleQuantityChange = (id, size, value) => {
    if (!value || value < 1) return;
    dispatch(updateQuantity({ id, size, quantity: Number(value) }));
  };

  const handleRemove = (id, size) => {
    dispatch(removeItem({ id, size }));
  };

  return (
    <div className="border-t pt-10 pb-16">
      <div className="!text-center mb-10">
        <Title text1="YOUR" text2="CART" />
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-10">
        <div className="space-y-6">
          {cartData.length === 0 && (
            <div className="!text-center space-y-3">
              <p className="!text-gray-500 !text-sm">Your cart is empty.</p>
              <button
                onClick={() => navigate("/products")}
                className="!bg-[#C9A227] !text-[#FFFFFF] px-4 py-2 rounded-lg text-sm hover:!bg-[#B5835A] transition-all"
              >
                Continue Shopping
              </button>
            </div>
          )}

          {!products.length && (
            <div className="animate-pulse space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center gap-4 p-4 border rounded-2xl">
                  <div className="w-20 h-20 !bg-gray-200 rounded-lg"></div>
                  <div className="flex-1 space-y-2">
                    <div className="w-32 h-4 !bg-gray-200 rounded"></div>
                    <div className="w-20 h-3 !bg-gray-200 rounded"></div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {cartData.map((item, index) => {
            const productData = products.find((p) => p._id === item._id);
            if (!productData) return null;
            return (
              <div
                key={index}
                className="flex flex-col sm:flex-row items-center justify-between gap-4 border border-gray-200 rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-4 w-full sm:w-auto">
                  <img
                    onClick={() => navigate(`/product/${productData._id}`)}
                    className="w-20 h-20 object-cover rounded-lg cursor-pointer transition-transform duration-300 hover:scale-105"
                    src={productData?.image[0]}
                    alt={productData?.name}
                  />
                  <div>
                    <p className="font-medium !text-gray-800">
                      {productData.name}
                    </p>
                    <p className="!text-sm !text-gray-500 mt-1">
                      {currency}
                      {productData.price}
                    </p>
                    <p className="!text-xs mt-1 !bg-gray-100 inline-block px-2 py-1 rounded-md">
                      Size: {item.size}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <input
                    type="number"
                    min={1}
                    value={item.quantity}
                    onChange={(e) =>
                      handleQuantityChange(item._id, item.size, e.target.value)
                    }
                    className="border w-14 px-2 py-1 rounded-md !text-center"
                  />
                  <GiTrashCan
                    onClick={() => handleRemove(item._id, item.size)}
                    className="!text-gray-500 hover:!text-red-500 !text-xl cursor-pointer"
                  />
                </div>
              </div>
            );
          })}
        </div>

        {
          cartData.length ? (
            <div className="!bg-gray-50 border border-gray-200 rounded-2xl p-6 shadow-sm h-fit">
              <CartTotal />
              <button
                disabled={cartData.length <= 0}
                onClick={() => navigate("/place-order")}
                className="!bg-[#C9A227] !text-[#FFFFFF] !text-sm w-full py-3 mt-6 rounded-lg tracking-wide hover:!bg-[#B5835A] transition-all duration-300"
              >
                Proceed To Checkout
              </button>
            </div>
          ) : null
        }
      </div>
    </div>
  );
};

export default Cart;