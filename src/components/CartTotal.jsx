// import React, { useContext } from 'react'
// import Title from './Title'
// import { ShopContext } from '../context/ShopContext'

// const CartTotal = () => {

//     const { currency,delivery_fee,getCartAmount } = useContext(ShopContext);

//     return (
//         <div className='w-full'>
//             <div className='text-2xl'>
//                 <Title text1={'CART'} text2={'TOTALS'} />
//             </div>
//             <div className='flex flex-col gap-2 mt-2 text-sm'>
//                 <div className='flex justify-between'>
//                     <p>Subtotal</p>
//                     <p>{currency} {getCartAmount()}.00</p>
//                 </div>
//                 <hr />
//                 <div className='flex justify-between'>
//                     <p>Shipping Free</p>
//                     <p>{currency} {delivery_fee}</p>
//                 </div>
//                 <hr />
//                 <div className='flex justify-between'>
//                     <b>Total</b>
//                     <b>{currency} {getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee}.00</b>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default CartTotal

import React from 'react';
import { useSelector } from 'react-redux';
import Title from './Title';

const CartTotal = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const products = useSelector((state) => state.product.items);
  const currency = "Rs."; // Or get dynamically if you have it in Redux
  const delivery_fee = 200; // Set your delivery fee or get from Redux if dynamic

  // Calculate subtotal
  const subtotal = Object.keys(cartItems).reduce((acc, id) => {
    const product = products.find((p) => p._id === id);
    if (!product) return acc;

    const sizes = cartItems[id];
    const totalForProduct = Object.keys(sizes).reduce((sum, size) => {
      return sum + (sizes[size] * product.price);
    }, 0);

    return acc + totalForProduct;
  }, 0);

  const total = subtotal + delivery_fee;

  return (
    <div className="w-full">
      <div className="text-2xl">
        <Title text1="CART" text2="TOTALS" />
      </div>
      <div className="flex flex-col gap-2 mt-2 text-sm">
        <div className="flex justify-between">
          <p>Subtotal</p>
          <p>{currency} {subtotal}.00</p>
        </div>
        <hr />
        <div className="flex justify-between">
          <p>Shipping Fee</p>
          <p>{currency} {delivery_fee}</p>
        </div>
        <hr />
        <div className="flex justify-between">
          <b>Total</b>
          <b>{currency} {subtotal === 0 ? 0 : total}.00</b>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
