// import React, { useContext, useEffect, useState } from 'react'
// import Title from './Title'
// import { ShopContext } from '../context/ShopContext';
// import ProductItem from './ProductItem';

// const BestSeller = () => {

//     const [bestSeller, setBestSeller] = useState([])
//     const { products } = useContext(ShopContext)

//     useEffect(() => {

//         const bestProduct = products.filter((item) => (item?.bestseller))
//         setBestSeller(bestProduct.slice(0, 5))

//     }, [products])

//     return (
//         <div className='my-10'>
//             <div className='text-center text-3xl py-8'>
//                 <Title text1={"BEST"} text2={"SELLERS"} />
//                 <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.</p>
//             </div>

//             <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
//                 {
//                     bestSeller.map((item, index) => (
//                         <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
//                     ))
//                 }
//             </div>
//         </div>
//     )
// }

// export default BestSeller

import React, { useContext, useEffect, useState } from 'react'
import Title from './Title'
import { ShopContext } from '../context/ShopContext';
import ProductItem from './ProductItem';

const BestSeller = () => {

    const [bestSeller, setBestSeller] = useState([])
    const { products } = useContext(ShopContext)

    useEffect(() => {
        const bestProduct = products.filter((item) => item?.bestseller)
        setBestSeller(bestProduct.slice(0, 5))
    }, [products])

    return (
        <div 
            className='my-14 pb-12 px-4 sm:px-10 bg-[#F8F5F2] !important rounded-2xl shadow-sm'
        >
            <div className='text-center text-3xl py-8'>
                <Title 
                    text1={"BEST"} 
                    text2={"SELLERS"} 
                />
                <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-[#5C5C5C] !important'>
                    Our timeless abayas most loved by our customers. Perfect blend of elegance and modesty.
                </p>
                <div className='w-24 h-[3px] bg-[#C4A484] !important mx-auto mt-3'></div>
            </div>

            <div 
                className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6'
            >
                {
                    bestSeller.map((item, index) => (
                        <div 
                            key={index} 
                            className='p-4 !bg-white !important rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-[#EAEAEA] !important'
                        >
                            <ProductItem 
                                id={item._id} 
                                image={item.image} 
                                name={item.name} 
                                price={item.price} 
                            />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default BestSeller