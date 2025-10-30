// import React, { useContext, useEffect, useState } from 'react'
// import { useSelector, useDispatch } from 'react-redux';
// import Title from '../components/Title'
// import CartTotal from '../components/CartTotal';
// import { ShopContext } from '../context/ShopContext'
// import { updateQuantity, removeItem } from '../store/cartSlice';
// import { assets } from '../assets/assets';

// const Cart = ({ navigate }) => {
//   const dispatch = useDispatch();
//   // const { products, currency, navigate, cartItems, updateQuantity } = useContext(ShopContext);
//   const cartItems = useSelector((state) => state.cart.items);
//   const products = useSelector((state) => state.product.items);
//   const currency = "Rs.";

//   const [cartData, setCartData] = useState([]);

//   useEffect(() => {
//     const tempData = []
//     for (const items in cartItems) {
//       for (const item in cartItems[items]) {
//         if (cartItems[id][size] > 0) {
//           tempData.push({
//             _id: items,
//             size: item,
//             quantity: cartItems[id][size],
//           })
//         }
//       }
//     }
//     setCartData(tempData)
//   }, [cartItems])

//   const handleQuantityChange = (id, size, value) => {
//     if (!value || value < 1) return;
//     dispatch(updateQuantity({ id, size, quantity: Number(value) }));
//   };

//   const handleRemove = (id, size) => {
//     dispatch(removeItem({ id, size }));
//   };

//   return (
//     <div className='border-t pt-14'>
//       <div className='text-2xl mb-3'>
//         <Title text1={'YOUR'} text2={'CART'} />
//       </div>
//       <div>
//         {cartData.map((item, index) => {
//           const productData = products.find((product) => product._id === item._id);
//           if (!productData) return null;
//           return (
//             <div key={index} className='py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4'>
//               <div className='flex items-start gap-6'>
//                 <img className='w-16 sm:w-20' src={productData.image[0]} alt={productData.name} />
//                 <div>
//                   <p className='text-xs sm:text-lg font-medium'>{productData.name}</p>
//                   <div className='flex items-center gap-5 mt-2'>
//                     <p>{currency}{productData.price}</p>
//                     <p className='px-2 sm:px-3 sm:py-1 border bg-slate-50'>{item.size}</p>
//                   </div>
//                 </div>
//               </div>
//               <input
//                 type="number"
//                 min={1}
//                 value={item.quantity}
//                 onChange={(e) => handleQuantityChange(item._id, item.size, e.target.value)}
//                 className="border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1"
//               />

//               <img
//                 onClick={() => handleRemove(item._id, item.size)}
//                 className="w-4 mr-4 sm:w-5 cursor-pointer"
//                 src="/assets/bin_icon.png" // replace with your assets.bin_icon if needed
//                 alt="Remove"
//               />
//               {/* <input onChange={(e) => e.target.value === '' || e.target.value === '0' ? null : updateQuantity(item._id, item.size, Number(e.target.value))} className='border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1' type="number" min={1} defaultValue={item.quantity} />
//               <img onClick={() => updateQuantity(item._id, item.size, 0)} className='w-4 mr-4 sm:w-5 cursor-pointer' src={assets.bin_icon} alt="" /> */}
//             </div>
//           )

//         })}
//       </div>

//       <div className='flex justify-end my-20'>
//         <div className='w-full sm:w-[450px]'>
//           <CartTotal />
//           <div className='w-full text-end'>
//             <button onClick={() => navigate('/place-order')} className='bg-black text-white text-sm my-8 px-8 py-3'>PROCEED TO CHECKOUT</button>
//           </div>
//         </div>

//       </div>

//     </div>
//   )
// }

// export default Cart
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Title from '../components/Title';
import CartTotal from '../components/CartTotal';
import { updateQuantity, removeItem } from '../store/cartSlice';

const Cart = ({ navigate }) => {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);
  const products = useSelector((state) => state.product.items);
  const currency = "Rs."; // Or get from your store/context if needed

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

  const handleQuantityChange = (id, size, value) => {
    if (!value || value < 1) return;
    dispatch(updateQuantity({ id, size, quantity: Number(value) }));
  };

  const handleRemove = (id, size) => {
    dispatch(removeItem({ id, size }));
  };

  return (
    <div className="border-t pt-14">
      <div className="text-2xl mb-3">
        <Title text1="YOUR" text2="CART" />
      </div>

      <div>
        {cartData.map((item, index) => {
          const productData = products.find((p) => p._id === item._id);
          if (!productData) return null;

          return (
            <div
              key={index}
              className="py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4"
            >
              <div className="flex items-start gap-6">
                <img className="w-16 sm:w-20" src={productData.image[0]} alt={productData.name} />
                <div>
                  <p className="text-xs sm:text-lg font-medium">{productData.name}</p>
                  <div className="flex items-center gap-5 mt-2">
                    <p>{currency}{productData.price}</p>
                    <p className="px-2 sm:px-3 sm:py-1 border bg-slate-50">{item.size}</p>
                  </div>
                </div>
              </div>

              <input
                type="number"
                min={1}
                value={item.quantity}
                onChange={(e) => handleQuantityChange(item._id, item.size, e.target.value)}
                className="border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1"
              />

              <img
                onClick={() => handleRemove(item._id, item.size)}
                className="w-4 mr-4 sm:w-5 cursor-pointer"
                src="/assets/bin_icon.png" // replace with your assets.bin_icon if needed
                alt="Remove"
              />
            </div>
          );
        })}
      </div>

      <div className="flex justify-end my-20">
        <div className="w-full sm:w-[450px]">
          <CartTotal />
          <div className="w-full text-end">
            <button
              onClick={() => navigate('/place-order')}
              className="bg-black text-white text-sm my-8 px-8 py-3"
            >
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
