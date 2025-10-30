import React, { useContext, useEffect, useState } from 'react'
import Title from './Title'
import { ShopContext } from '../context/ShopContext'
import ProductItem from './ProductItem'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';

const LatestCollection = () => {
    const navigate = useNavigate()
    // const { products } = useContext(ShopContext)
      const products = useSelector((state) => state.product.items || []);
    const [latestProducts, setLatestProducts] = useState([])

    useEffect(() => {
        if (products.length > 0) {
            setLatestProducts(products.slice(0, 10))
        }
    }, [products])

    return (
        <div className='my-16 !bg-[#FAF9F6] py-10'>

            {/* Section Title */}
            <div className='text-center pb-10'>
                <Title text1={"LATEST"} text2={"COLLECTIONS"} />
                <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base !text-[#5F5F5F]'>
                    Discover our newest abayas crafted with elegance, comfort, and timeless sophistication.
                </p>
            </div>

            {/* Product Grid */}
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 gap-y-8 px-4 sm:px-8'>
                {
                    latestProducts.slice(0, 5).map((item, index) => (
                        <div
                            key={index}
                            className='p-4 bg-white! border !border-[#E0E0E0] rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1'
                        >
                            <ProductItem
                                id={item._id}
                                image={item.image}
                                name={item.name}
                                price={item.price}
                                hideCartButton={true}
                            />
                        </div>
                    ))
                }
            </div>

            {/* Section Bottom CTA (Optional) */}
            <div className='text-center mt-12'>
                <button onClick={() => navigate('/product')} className='!bg-[#C4A484] !text-[#FFFFFF] px-8 py-3 font-semibold tracking-wide hover:!bg-[#B5835A] transition-all duration-300'>
                    VIEW ALL COLLECTIONS
                </button>
            </div>

        </div>
    )
}

export default LatestCollection