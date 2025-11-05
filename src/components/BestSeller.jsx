import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ProductItem from './ProductItem';
import Title from './Title';

const BestSeller = () => {
    const products = useSelector((state) => state.product.items || []);
    const [bestSeller, setBestSeller] = useState([])

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
                className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'
            >
                {
                    bestSeller.slice(0, 4).map((item, index) => (
                        <div
                            key={index}
                            className='!bg-white !important rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-[#EAEAEA] !important'
                        >
                            <ProductItem
                                id={item?._id}
                                image={item?.image}
                                name={item?.name}
                                price={item?.price}
                                sizes={item?.sizes}
                            />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default BestSeller