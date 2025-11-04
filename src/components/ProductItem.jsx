import React, { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../store/cartSlice";

const ProductItem = ({ id, image, name, price, sizes, hideCartButton }) => {

  const [size, setSize] = useState(sizes ? sizes[0] : "M");
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const handleAddToCart = (e) => {
    e.preventDefault();
    const user_token = localStorage.getItem('userToken');

    // if (!user_token) {
    //   window.open(
    //     `/login`,
    //     '_blank',
    //     'toolbar=yes,scrollbars=yes,top=100,left=400,width=600,height=500'
    //   );
    // }
    // return
    dispatch(addToCart({ id, size, quantity }));

  };

  return (
    <div className="!text-[#1A1A1A] cursor-pointer block group !bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 h-full flex flex-col">
      <Link to={`/product/${id}`} onClick={() => window.scrollTo(0, 0)}>
        <div className="overflow-hidden rounded-t-xl">
          <img
            className="w-full aspect-[3/4] object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
            src={image[0]}
            alt={name}
          />
        </div>
      </Link>

      <div className="p-4 flex flex-col justify-between flex-grow">
        <div>
          <p className="!text-sm sm:!text-md font-medium !text-[#1A1A1A]">
            {name}
          </p>
          <p className="!text-[13px] sm:!text-[15px] font-semibold !text-[#C4A484] tracking-wider mt-1 italic">
            Rs.
            {price}
          </p>
        </div>

        {!hideCartButton && (
          <div className="mt-3 space-y-2 flex flex-col items-center">
            <div className="flex justify-center gap-2 flex-wrap">
              {["S", "M", "L", "XL", "XXL", "CUS"].map((s) => (
                <button
                  key={s}
                  onClick={() => setSize(s)}
                  className={`px-3 py-1 !text-xs rounded-md border transition-all ${size === s
                    ? "!bg-black !text-white border-black"
                    : "!bg-white !text-gray-600 border-gray-300 hover:border-black"
                    }`}
                >
                  {s}
                </button>
              ))}
            </div>

            <div className="flex items-center justify-center gap-2 mt-4">
              <button
                onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                className="w-7 h-7 flex items-center justify-center border border-gray-300 rounded hover:!bg-gray-100"
              >
                -
              </button>
              <span className="!text-sm font-medium">{quantity}</span>
              <button
                onClick={() => setQuantity((prev) => prev + 1)}
                className="w-7 h-7 flex items-center justify-center border border-gray-300 rounded hover:!bg-gray-100"
              >
                +
              </button>
            </div>

            <button
              onClick={handleAddToCart}
              className="w-full mt-4 py-2 !text-sm font-medium !bg-[#C9A227] !text-[#FFFFFF] rounded-md hover:!bg-[#B5835A] transition-all duration-300"
            >
              Add to Cart
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductItem;