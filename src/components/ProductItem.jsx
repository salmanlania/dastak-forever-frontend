// import React, { useContext } from 'react'
// import { ShopContext } from '../context/ShopContext'
// import { Link } from 'react-router-dom';

// const ProductItem = ({ id, image, name, price }) => {

//   const { currency } = useContext(ShopContext);

//   return (
//     <Link to={`/product/${id}`} onClick={() => window.scrollTo(0, 0)} className='text-gray-700 cursor-pointer'>

//       <div className=' overflow-hidden'>
//         <img className='hover:scale-110 transition ease-in-out' src={image[0]} alt="" />
//       </div>

//       <p className='pt-3 pb-1 text-sm'>{name}</p>
//       <p className='text-sm font-medium'>{currency}{price}</p>
      
//     </Link>
//   )
// }

// export default ProductItem


import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom';

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);

  return (
    <Link 
      to={`/product/${id}`} 
      onClick={() => window.scrollTo(0, 0)} 
      className='text-[#1A1A1A] !important cursor-pointer block group'
    >
      {/* Product Image */}
      <div className='overflow-hidden rounded-xl bg-[#fff] !important'>
        <img 
          className='w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out' 
          src={image[0]} 
          alt={name} 
        />
      </div>

      {/* Product Info */}
      <div className='pt-3 pb-2'>
        <p className='text-base sm:text-lg font-medium text-[#1A1A1A] !important tracking-wide leading-snug line-clamp-2'>
          {name}
        </p>
        <p className='text-[17px] sm:text-[19px] font-semibold text-[#C4A484] !important tracking-wider mt-1 italic'>
          {currency}{price}
        </p>
      </div>
    </Link>
  )
}

export default ProductItem