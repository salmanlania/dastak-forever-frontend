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
  }, [cartItems]);

  console.log('cartItems', cartItems)

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
            <p className="!text-gray-500 !text-center !text-sm">
              Your cart is empty.
            </p>
          )}

          {cartData.map((item, index) => {
            const productData = products.find((p) => p._id === item._id);
            console.log('productData' , productData)
            if (!productData) return null;

            return (
              <div
                key={index}
                className="flex flex-col sm:flex-row items-center justify-between gap-4 border border-gray-200 rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-4 w-full sm:w-auto">
                  <img
                    className="w-20 h-20 object-cover rounded-lg"
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
      </div>
    </div>
  );
};

export default Cart;
