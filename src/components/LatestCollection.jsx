import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import ProductItem from './ProductItem'
import Title from './Title'

const LatestCollection = () => {
    const navigate = useNavigate()
    const products = useSelector((state) => state.product.items || []);
    const [latestProducts, setLatestProducts] = useState([])

    useEffect(() => {
        if (products.length > 0) {
            setLatestProducts(products.slice(0, 10))
        }
    }, [products])

    return (
        <div className='my-8 !bg-[#FAF9F6] py-4'>

            <div className='text-center pb-10'>
                <Title text1={"LATEST"} text2={"COLLECTIONS"} />
                <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base !text-[#5F5F5F]'>
                    Discover our newest abayas crafted with elegance, comfort, and timeless sophistication.
                </p>
            </div>

            {/* <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 gap-y-8 px-4 sm:px-8'> */}
            <div
                className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'
            >
                {
                    latestProducts.slice(0, 4).map((item, index) => (
                        <div
                            key={index}
                            // className='p-4 bg-white! border !border-[#E0E0E0] rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1'
                            className='!bg-white !important rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-[#EAEAEA] !important'
                        >
                            <ProductItem
                                id={item?._id}
                                image={item?.image}
                                name={item?.name}
                                price={item?.price}
                                sizes={item?.sizes}
                                hideCartButton={true}
                            />
                        </div>
                    ))
                }
            </div>

            <div className='text-center mt-12'>
                <button onClick={() => navigate('/product')} className='!bg-[#C9A227] !text-[#FFFFFF] px-8 py-3 font-semibold tracking-wide hover:!bg-[#B5835A] transition-all duration-300'>
                    View All Collections
                </button>
            </div>
        </div>
    )
}

export default LatestCollection